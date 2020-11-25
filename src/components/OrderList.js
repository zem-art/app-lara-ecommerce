import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from '../styles/stylesProfile';
export class OrderList extends Component {
  render() {
    return (
      <View style={styles.order}>
        <TouchableOpacity style={styles.cart}>
          <Image
            style={styles.inCart}
            source={require('../asset/icon/cartCredit.png')}
          />
          <Text>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cart}>
          <Image
            style={styles.inCart}
            source={require('../asset/icon/packing.png')}
          />
          <Text>Packing</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cart}>
          <Image
            style={styles.inCart}
            source={require('../asset/icon/delivery.png')}
          />
          <Text>Delivery</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cart}>
          <Image
            style={styles.inCart}
            source={require('../asset/icon/Rating.png')}
          />
          <Text>Rating</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default OrderList;
