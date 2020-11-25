import React, {Component} from 'react';
import {TextInput, Image, TouchableOpacity, View} from 'react-native';
import {styles} from '../styles/stylesHome';

export class Header extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.search} placeholder="Search" />
        <Image
          style={styles.iconSearch}
          source={require('../asset/icon/search2.png')}
        />
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Troli')}
          style={styles.Troli}>
          <Image
            style={styles.iconTroli}
            source={require('../asset/icon/troli3.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.Mesengger}>
          <Image
            style={styles.iconMesengger}
            source={require('../asset/icon/maiiilil.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
