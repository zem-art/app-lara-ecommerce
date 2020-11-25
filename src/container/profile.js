import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/stylesProfile';
import Header from '../controller/HeaderFromProfil';
import OrderList from '../controller/OrderList';
import {connect} from 'react-redux';

export class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation} />
        </View>
        <View style={styles.order}>
          {this.props.userToken.userReducer.user ? (
            <OrderList nivigaiton={this.props.navigation} />
          ) : (
            <Text style={styles.textAtention}>
              Maaf Anda Belum Belum Terdaftar
            </Text>
          )}
        </View>

        <View style={styles.credit}>
          <Text style={styles.text1}>Account</Text>
          {this.props.userToken.userReducer.user ? (
            <>
              <TouchableOpacity
                style={styles.inCredit}
                onPress={() => this.props.navigation.navigate('Market')}>
                <Text style={styles.text2}>Buka Toko</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={styles.login}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.textLogin}>Nothing Account </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* <TouchableOpacity
          onPress={() => console.log(this.props.userToken.userReducer.user)}>
          <Text>Klik Token</Text>
        </TouchableOpacity> */}

        <View style={styles.office}>
          <Text style={styles.text4}>Service</Text>
          <View style={styles.inOffice}>
            {this.props.userToken.userReducer.user ? (
              <>
                <TouchableOpacity style={styles.cart}>
                  <Image
                    style={styles.inCart}
                    source={require('../asset/icon//Rating23.png')}
                  />
                  <Text>Ulasan Saya</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cart}>
                  <Image
                    style={styles.inCart}
                    source={require('../asset/icon/Help-2-256.png')}
                  />
                  <Text>Help</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cart}>
                  <Image
                    style={styles.inCart}
                    source={require('../asset/icon/CS.png')}
                  />
                  <Text>Service Center</Text>
                </TouchableOpacity>
              </>
            ) : (
              <Text> Service Center</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}
// // get token from redux
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

// // send token to redux and
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (access_token) =>
      dispatch({type: 'SET_USER', payload: access_token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

//logOuth = async () => {
//   try {
//     const keys = await AsyncStorage.getAllKeys();
//     await AsyncStorage.multiRemove(keys);
//     {
//       // // remove token in redux
//       this.props.userLogin(null);
//     }
//   } catch (error) {
//     console.error('Error clearing app data.');
//   }
// };
