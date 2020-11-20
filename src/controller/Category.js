import {View, TouchableOpacity, Image, Text} from 'react-native';
import {styles} from '../styles/stylesHome';
import React, {Component} from 'react';

export class Category extends Component {
  render() {
    return (
      <View style={styles.category}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Product', {
              category: 'Fashion',
            })
          }
          style={styles.inCategory}>
          <Image
            style={styles.iconCategory}
            source={require('../asset/icon/Clothes.png')}
          />
          <Text>Fashion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Product', {
              category: 'Electronic',
            })
          }
          style={styles.inCategory}>
          <Image
            style={styles.iconCategory}
            source={require('../asset/icon/electronic.png')}
          />
          <Text>Electronic</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Product', {
              category: 'Foods',
            })
          }
          style={styles.inCategory}>
          <Image
            style={styles.iconCategory}
            source={require('../asset/icon/foods.png')}
          />
          <Text>Foods</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Product', {
              category: 'Healty Appliance',
            })
          }
          style={styles.inCategory}>
          <Image
            style={styles.iconCategory}
            source={require('../asset/icon/healthcare.png')}
          />
          <Text>Healty Care</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Product', {
              category: 'Household Appliance',
            })
          }
          style={styles.inCategory}>
          <Image
            style={styles.iconCategory}
            source={require('../asset/icon/rumahTangga.png')}
          />
          <Text style={styles.titleIcon}>Home </Text>
          <Text style={styles.titleIcon}>Appliances</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Product', {
              category: 'SmartPhone',
            })
          }
          style={styles.inCategory}>
          <Image
            style={styles.iconCategory}
            source={require('../asset/icon/SmartPhone.png')}
          />
          <Text style={styles.titleIcon}>SmartPhone</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Category;
