import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  Platform,
} from 'react-native';
import {styles} from '../styles/styleEditProfile';
import Spinner from 'react-native-spinkit';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';

export class ProfileDetail extends Component {
  constructor(props) {
    super(props);
    // this destrack passing data
    const {item} = this.props.route.params;
    this.state = {
      url: '',
      name: item.nama,
      adress: item.alamat,
      phone: item.phone,
      email: item.user.email,
      image: {uri: item.image},
      uri: item.image,

      isloading: false,
      srcImg: '',
      filename: '',
    };
  }

  addPhoto = () => {
    const options = {
      noData: true,
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
          image: response,
        });
      }
    });
  };

  editData() {
    const {adress, phone, email, name, image} = this.state;
    if (
      name !== '' ||
      adress !== '' ||
      phone !== '' ||
      email !== '' ||
      image !== ''
    ) {
      const edit = {
        nama: name,
        email: email,
        phone: phone,
        alamat: adress,
        _method: 'PUT',
      };
      console.log('ini data edit', edit);
      fetch(`http://larashop12.herokuapp.com/api/profile`, {
        method: 'POST',
        body: this.createFromData(image, edit),
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
  }

  createFromData = (image, body) => {
    const data = new FormData();

    data.append('image', {
      name: image.fileName,
      type: image.type,
      uri:
        Platform.OS === 'android'
          ? image.uri
          : image.uri.replace('file://', ''),
    });
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    console.log('ini data ', data);
    return data;
  };

  render() {
    // console.log(this.props.route.params.item);
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner color={'blue'} size={50} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      ////respon from developer
      return (
        <View style={styles.loading1}>
          <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
          <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>This Profile</Text>
        </View>
        <View style={styles.image}>
          <TouchableOpacity
            onPress={() => this.addPhoto()}
            style={styles.inImage}>
            <Image style={styles.icon} source={{uri: this.state.image.uri}} />
          </TouchableOpacity>
        </View>
        <View style={styles.containt}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={this.state.name}
            onChangeText={(name) => this.setState({name: name})}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={this.state.email}
            onChangeText={(email) => this.setState({email: email})}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={this.state.phone}
            onChangeText={(phone) => this.setState({phone: phone})}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={this.state.adress}
            onChangeText={(adress) => this.setState({adress: adress})}
          />
          <View style={styles.allpact}>
            <TouchableOpacity
              onPress={() => this.editData()}
              style={styles.edit}>
              <Text style={styles.textEdit}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
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

export default connect(mapStateToProps)(ProfileDetail);
