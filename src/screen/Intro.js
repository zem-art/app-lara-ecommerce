import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/stylesIntro';

export class Intro extends Component {
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

export default Intro;
