import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/stylesProfile';
import Header from '../controller/HeaderFromProfil';
import OrderList from '../controller/OrderList';

export class Profile extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.background}> */}
        <View style={styles.header}>
          <Header navigation={this.props.navigation} />
        </View>
        <View style={styles.order}>
          <OrderList nivigaiton={this.props.navigation} />
        </View>

        <View style={styles.credit}>
          <Text style={styles.text1}>Account</Text>
          {this.state.token !== '' ? (
            <TouchableOpacity style={styles.inCredit}>
              <Text style={styles.text2}>LogOut</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.inCredit}>
              <Text style={styles.text2}>Buka Toko</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.office}>
          <Text style={styles.text4}>Service</Text>
          <View style={styles.inOffice}>
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
          </View>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

export default Profile;
