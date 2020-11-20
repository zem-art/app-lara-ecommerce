import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Button, Image} from 'react-native';
import {styles} from '../styles/styleProduct';

import {
  electronic,
  fashion,
  foods,
  healty,
  homeApliance,
  smartPhone,
} from '../DataProduct';

export class Product extends Component {
  getdataProduct() {
    const {category} = this.props.route.params;
    switch (category) {
      case 'Fashion':
        return fashion;
      case 'Electronic':
        return electronic;
      case 'Foods':
        return foods;
      case 'Healty Appliance':
        return healty;
      case 'Household Appliance':
        return homeApliance;
      case 'SmartPhone':
        return smartPhone;
    }
  }

  render() {
    const item = this.getdataProduct();

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.route.params.category}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}>
            <Image
              style={styles.troli}
              source={require('../asset/icon/troli3.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.nameItem}>
          {item.map((product, index) => (
            <TouchableOpacity
              key={index}
              onLongPress={() => alert('belum jadi')}>
              <View style={styles.body}>
                <View style={styles.product}>
                  <Image source={product.image} style={styles.Image} />
                  <Text style={styles.name}>{product.name}</Text>
                  <Text style={styles.price}>Rp. {product.price}</Text>
                  <Text style={styles.stock}>stock :{product.stock}</Text>
                  <Text style={styles.Rating}>{product.rating}</Text>
                  <Button
                    title="Beli"
                    onPress={() => alert('belum bisa di beli')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}

export default Product;
