import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleEditProfile';
// import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: '',
      email: '',
      phone: '',
      address: '',
      image: '',
      srcImg: '',
      filename: '',
      uri: '',
      url: '',
    };
  }

  addPhoto() {
    const options = {
      noData: true,
      title: 'Take Picture',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('RESPONSE =', response);
      if (response.didCancel) {
        console.log('User, Cancel Image Picker');
      } else if (response.error) {
        console.log('ImagePicker Eror', response.error);
      } else if (response.customeBottom) {
        console.log('User Tapped Costume buttom', response.customeBottom);
      } else {
        // //  check response and fileName
        // // jangan lupa huruf gede dan kecil nya harus di perhatikan
        console.log('respon img picker, and fileName ', response.fileName);
        this.setState({
          srcImg: {uri: response.uri},
          uri: response.uri,
          filename: response.fileName,
        });
      }
    });
  }
  AddProfile = () => {
    const {name, email, phone, address} = this.state;
    if (name !== '' || email !== '' || phone !== '' || address !== '') {
      // // the default name of the backend is first
      const data = {
        nama: name,
        email: email,
        phone: phone,
        alamat: address,
      };
      // // create a component to hold all the data here
      const add = new FormData();
      // // all data is entered into add
      add.append('image', {
        uri: this.state.uri,
        type: 'image/jpeg',
        name: this.state.filename,
      });
      for (var key in data) {
        // // all adds are converted to strings
        add.append(key.toString(), data[key]);
      }
      console.log('ini data add', add);
      fetch('http://larashop12.herokuapp.com/api/profile', {
        method: 'POST',
        // // call the component which wraps all of its data (add)
        body: add,
        headers: {
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      })
        .then((response) => {
          console.log('respon ===', response);
          return response.json();
        })
        .then((resulty) => {
          console.log('resulty===', resulty);
          if (resulty) {
            ToastAndroid.show('Data Berhasil Di Tambahkan', ToastAndroid.LONG);
            this.props.navigation.navigate('Profile');
          }
        })
        .catch((error) => {
          ToastAndroid.show('Data Gagal ditambah kan', ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show('Mohon Lengkapi Data Tersebut ', ToastAndroid.LONG);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Complete profile</Text>
        </View>
        <View style={styles.image}>
          <TouchableOpacity
            onPress={() => this.addPhoto()}
            style={styles.inImage}>
            <Image
              source={
                this.state.uri !== ''
                  ? {
                      uri: this.state.uri,
                    }
                  : {
                      uri:
                        'https://image.shutterstock.com/image-vector/add-icon-plus-vector-260nw-454078798.jpg',
                    }
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containt}>
          <TextInput
            onChangeText={(name) => this.setState({name: name})}
            style={styles.input}
            placeholder="Name"
          />
          <TextInput
            onChangeText={(email) => this.setState({email: email})}
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            onChangeText={(phone) => this.setState({phone: phone})}
            style={styles.input}
            placeholder="Phone"
          />
          <TextInput
            onChangeText={(address) => this.setState({address: address})}
            style={styles.input}
            placeholder="Address"
          />

          <View style={styles.allpact}>
            <TouchableOpacity
              onPress={() => this.AddProfile()}
              style={styles.edit}>
              <Text style={styles.textEdit}>Complete profile</Text>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Profile);

// <TouchableOpacity style={styles.edit}>
//    <Text style={styles.textEdit}>Edit Profile</Text>
//  </TouchableOpacity>
