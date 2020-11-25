import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../styles/styleAdmin';
export class Market extends Component {
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
          <Text style={styles.titleDashboard}>Welcome</Text>
        </View>
        <View style={styles.Profile}>
          <View style={styles.photo}>
            <Text>this photo</Text>
          </View>
          <View style={styles.titleStore}>
            <Text>Ini Bagian Profile</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.all}>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Task.png')}
              />
              <Text>Product Management</Text>
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

            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/Rocket.png')}
              />
              <Text>Order List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allIcon}>
              <Image
                style={styles.icon}
                source={require('../asset/icon/rAtingPrioduct.png')}
              />
              <Text>Rating Product</Text>
            </TouchableOpacity>

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
        </ScrollView>
      </View>
    );
  }
}

export default Market;
