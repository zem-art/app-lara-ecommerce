import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ToastAndroid} from 'react-native';
import {styles} from '../styles/styleSetting';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';

export class Setting extends Component {
  logOuth = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      {
        // // remove token in redux
        this.props.userLogin(null);
      }
      this.props.navigation.navigate('Intro');
      ToastAndroid.show('Anda Berhasil LogOut', ToastAndroid.LONG);
    } catch (error) {
      console.error('Error clearing app data.');
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
          <Text style={styles.text}>Pengaturan Account</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.titleAccount}>
            <Text style={styles.text1}>Account Me</Text>
          </View>
          <View style={styles.account}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditProfile')}
              style={styles.allPact}>
              <Text style={styles.text2}>Profile Me</Text>
              <Image
                style={styles.arrow}
                source={require('../asset/icon/arrowleft.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.allPact}>
              <Text style={styles.text2}>Address</Text>
              <Image
                style={styles.arrow}
                source={require('../asset/icon/arrowleft.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('EditProfile')}
              style={styles.allPact}>
              <Text style={styles.text2}>Complete profile</Text>
              <Image
                style={styles.arrow}
                source={require('../asset/icon/arrowleft.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.titleAccount}>
            <Text style={styles.text1}>Help </Text>
          </View>
          <View style={styles.account1}>
            <TouchableOpacity style={styles.allPact}>
              <Text style={styles.text2}>Help center</Text>
              <Image
                style={styles.arrow}
                source={require('../asset/icon/arrowleft.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.allPact}>
              <Text style={styles.text2}>Tips & Trick</Text>
              <Image
                style={styles.arrow}
                source={require('../asset/icon/arrowleft.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.logOuth}
            onPress={() => this.logOuth()}>
            <Text style={styles.textend}>LogOut</Text>
          </TouchableOpacity>
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

// // send token to redux and
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (access_token) =>
      dispatch({type: 'SET_USER', payload: access_token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Setting);

{
  /* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */
}
