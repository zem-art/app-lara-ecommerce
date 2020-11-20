import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/stylesProfile';

export class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.exSign}>
          <TouchableOpacity
            style={styles.sign}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text3}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sign}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.text3}>Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.settingClik}
          onPress={() => this.props.navigation.navigate('Setting')}>
          <Image
            style={styles.setting}
            source={require('../asset/icon/setting131231.png')}
          />
        </TouchableOpacity>
        <View style={styles.inHeader}>
          <TouchableOpacity>
            <Image
              style={styles.profil}
              source={require('../asset/icon/manperson.png')}
            />
          </TouchableOpacity>
          <Text style={styles.textProfile}>Fulan</Text>
        </View>
        <View style={styles.component}>
          <View style={styles.component1}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>Favorit</Text>
          </View>
          <View style={styles.component1}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>Follow Toko</Text>
          </View>
          <View style={styles.component1}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>Just seen</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
