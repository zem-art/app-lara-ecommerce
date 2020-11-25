import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAdmin';
import {connect} from 'react-redux';

export class Market extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      nama: '',
      email: '',
      refreash: false,
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  getProfile = async () => {
    await fetch('http://larashop12.herokuapp.com/api/profile', {
      method: 'GET',
      headers: {
        // this is a token stored on redux
        Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data ===521', data.profile);
        // console.log(data);
        //change from function to object
        this.setState({
          isEror: false,
          isloading: false,
          data: data.profile,
          refreash: false,
        });
      })
      .catch((eror) => {
        this.setState({
          isloading: false,
          isEror: true,
          refreash: false,
        });
        // console.log(eror);
        // console.log('Eror Data Tidak Di Temukan');
        //// if respon from backend
        if (eror.response) {
          ToastAndroid(
            'Kesalahan Dari BAckEnd',
            ToastAndroid.LONG,
            eror.response.data.message,
          );
        }
        // // respons from claent
        else if (eror.request) {
          ToastAndroid('kamu sedang offline nih', ToastAndroid.LONG);
        }
      });
  };
  render() {
    // console.log('ini state data ', this.state.data);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.titleDashboard}>Welcome</Text>
        </View>
        <View style={styles.Profile}>
          {this.state.data.map((item, index) => (
            <View style={styles.Profile} key={index}>
              <View style={styles.photo}>
                <Image style={styles.photo1} source={{uri: item.image}} />
              </View>
              <View style={styles.titleStore}>
                <Text style={styles.text1}>{item.nama} Store</Text>
                <Text style={styles.text1}>{item.user.email}</Text>
              </View>
            </View>
          ))}
        </View>
        <ScrollView>
          <View style={styles.all}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Management')}
              style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Task.png')}
              />
              <Text>Product Management</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddProduct')}
              style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/addItemMarket.png')}
              />
              <Text>Add Product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Rocket.png')}
              />
              <Text>Order List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/rAtingPrioduct.png')}
              />
              <Text>Rating Product</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/mail21.png')}
              />
              <Text>Mesengger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Bell.png')}
              />
              <Text>Notification</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
export default connect(mapStateToProps)(Market);
