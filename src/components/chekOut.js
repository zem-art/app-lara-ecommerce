import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styleCheckOut';

export class ChekOut extends Component {
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
          <Text style={styles.title}>ChekOut</Text>
        </View>
        <View>
          <View>
            <Text>Body</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ChekOut;
