import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from '../styles/styleDetail';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class DetailProduct extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isloading: true,
      isEror: false,
      refreash: false,
    };
  }
  componentDidMount() {
    this.getDetail();
  }
  getDetail = async () => {
    try {
      const response = await axios({
        // call deatail product using data passing
        url: this.props.route.params.item.href.link,
        method: 'GET',
      });
      const data = response.data;
      //console.log(data.data);
      this.setState({
        isEror: false,
        isloading: false,
        data: data.data,
      });
    } catch (err) {
      this.setState({
        isloading: false,
        isEror: true,
        //refreash: false,
      });
      console.log(err);
      // if respon from backend
      if (err.response) {
        console.log(err.response.data.message);
      } else if (err.request) {
        alert('kamu sedang offline nih');
      }
    }
  };

  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner color={'blue'} size={50} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    } else if (this.state.isEror) {
      ////respon from developer
      return (
        <View style={styles.loading}>
          <Text>Maaf Terjadi Eror Saat Memuat Data</Text>
          <Text>Dan Kesalahan Dari Kami Bukan Dari Anda</Text>
        </View>
      );
    }
    //console.log(this.props.route.params);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.exHeader}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.iconHeader}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.exHeader}>
            <Image
              style={styles.iconHeader}
              source={require('../asset/icon/troli3.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <Image style={styles.image} source={{uri: this.state.data.image}} />
          <View style={styles.items}>
            <Text style={styles.name}>{this.state.data.name}</Text>
            <View style={styles.combine1}>
              <Text style={styles.price}>$ : {this.state.data.price}</Text>
              <Text style={styles.category}>
                Kategori: {this.state.data.categori}
              </Text>
            </View>
            <View style={styles.combine}>
              <Text style={styles.stock}>Stock :{this.state.data.stock}</Text>
              <Text style={styles.discount}>
                Discount :{this.state.data.discount}
              </Text>
              <Text style={styles.total}>
                Total Price :{this.state.data.totalPrice}
              </Text>
            </View>
            <View style={styles.rating}>
              <Text style={styles.textrating}>
                Rating :{this.state.data.rating}
              </Text>
            </View>
            <View style={styles.description}>
              <Text style={styles.textdescription}>
                Description :{this.state.data.decription}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buy}>
          <TouchableOpacity>
            <Image
              style={styles.chat}
              source={require('../asset/icon/chatLol.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buy}>
            <Text style={styles.textBuy}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cart}>
            <Text style={styles.textCart}>Tambah Ke Keranjang</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default DetailProduct;
