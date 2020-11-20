import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../styles/styleAdmin';
export class Market extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleDashboard}>Dashboard Penjual</Text>
        </View>
        <ScrollView>
          <View style={styles.all}>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/mail21.png')}
              />
              <Text>Mesengger</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Bell.png')}
              />
              <Text>Notification</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.all}>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Task.png')}
              />
              <Text>Product Management</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Rocket.png')}
              />
              <Text>Order List</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.all}>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/rAtingPrioduct.png')}
              />
              <Text>Rating Product</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('AddProduct')}
              style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/addItemMarket.png')}
              />
              <Text>Add Product</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Market;
