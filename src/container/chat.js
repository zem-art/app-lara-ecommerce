import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import {styles} from '../styles/stylesChat';

export class Chat extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <TouchableOpacity
            onPressOut={() => this.props.navigation.goBack()}
            style={styles.exback}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity> */}
          <Text style={styles.titleCart}>Chat</Text>
        </View>
        <View style={styles.pactItem}>
          <ScrollView>
            <View style={styles.item}>
              <Text style={styles.titleStore}>This Store</Text>
              <View style={styles.Row}>
                <View style={styles.inItem}>
                  <Text>Image</Text>
                </View>
                <Text style={styles.textItems}>Name Items</Text>
                {/* <Image /> */}
              </View>
            </View>
          </ScrollView>
        </View>
        {/* <View style={styles.pactChekout}>
          <View style={styles.exChekOut}>
            <TouchableOpacity style={styles.chekOut}>
              <Text style={styles.textChekOut}>CHekOut</Text>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    );
  }
}

export default Chat;
