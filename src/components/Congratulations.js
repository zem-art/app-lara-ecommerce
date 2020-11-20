import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/stylesIntro';
import AsyncStorage from '@react-native-community/async-storage';

export class Conguratulation extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
    };
  }

  componentDidMount() {
    this.MyToken();
    console.log('token nya =>', AsyncStorage.getItem('token'));
  }

  // MyToken() {
  //   AsyncStorage.getItem('token').then((token) => {
  //     console.log(AsyncStorage.getItem(token));
  //     if (token !== null) {
  //       this.setState({
  //         token: token,
  //       });
  //     } else {
  //       this.logOut();
  //     }
  //   });
  // }

  MyToken = async (value) => {
    try {
      await AsyncStorage.getItem('token', value);
      // console.log('token nya ', AsyncStorage.getItem('token'));
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={styles.background}> */}
        <View style={styles.sizeIcon}>
          <Image
            style={styles.icon}
            source={require('../asset/icon/shopcart.png')}
          />
          <Text style={styles.title}>Welcome to Lara Shop</Text>
          <Text style={styles.title1}>
            get started now to access thousands of product
          </Text>
          <TouchableOpacity
            style={styles.start}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.start1}>Get Start</Text>
          </TouchableOpacity>
        </View>
        {/* </View> */}
      </View>
    );
  }
}

export default Conguratulation;
