import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  ToastAndroid,
  TextInput,
} from 'react-native';
import {styles} from '../styles/styleDetail';
import axios from 'axios';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

export class DetailProduct extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isloading: true,
      isEror: false,
      refreash: false,
      openModal: false,
      jumlah: 0,
      id: '',
      product: '',
      qty: 1,
      cart: {},
    };
  }
  componentDidMount() {
    this.getDetail();
  }

  cartItem() {
    this.setState({openModal: true});
  }
  getDetail = async () => {
    try {
      const response = await axios({
        // call deatail product using data passing
        url: this.props.route.params.item.href.link,
        method: 'GET',
      });
      const data = response.data;
      console.log(data.data);
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
        console.log('Respon Dari BackEnd', err.response.data.message);
      } else if (err.request) {
        ToastAndroid.show('kamu sedang offline nih', ToastAndroid.LONG);
      }
    }
  };

  addCart() {
    axios({
      url: `https://larashop12.herokuapp.com/api/pesan/${this.props.route.params.item.id}`,
      method: 'POST',
      data: {
        jumlah_pesan: this.state.jumlah,
      },
      headers: {
        Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
      },
    })
      .then((result) => {
        console.log('Berhasil Di masukan ke keranjang', result);
        this.props.navigation.navigate('Troli');
        ToastAndroid.show(
          'Berhasil Di masukan ke keranjang',
          ToastAndroid.LONG,
        );
      })
      .catch((err) => {
        ToastAndroid.show('Gagal Memasukan Ke keranjang', ToastAndroid.LONG);
        console.log('Gagal Memasukan ke keranjang', err);
      });
  }

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
    // console.log('lagi mencari id', this.props.route.params.item.id);
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
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Troli')}
            style={styles.exHeader}>
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
              <Text>Rating :</Text>
              <Text style={styles.textrating}>{this.state.data.rating}</Text>
            </View>
            <View style={styles.description}>
              <Text>Description :</Text>
              <Text style={styles.textdescription}>
                {this.state.data.description}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.buy}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('chatUser')}>
            <Image
              style={styles.chat}
              source={require('../asset/icon/chatLol.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.Buy}>
            <Text style={styles.textBuy}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.cartItem()} style={styles.cart}>
            <Text style={styles.textCart}>Tambah Ke Keranjang</Text>
          </TouchableOpacity>
        </View>

        {/* this pact Modal add BUY */}

        <Modal visible={this.state.openModal} transparent={true}>
          <ScrollView>
            <TouchableOpacity onPress={() => this.setState({openModal: false})}>
              <View style={styles.back}>
                <Text>Back</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.pactModal}>
              <View style={styles.inModal}>
                <View style={styles.imageModal}>
                  <Image
                    style={styles.imageModal1}
                    source={{uri: this.state.data.image}}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.text1}>{this.state.data.name}</Text>
                  <Text style={styles.text2}>Jumlah</Text>
                  <View style={styles.MinMax}>
                    <TouchableOpacity style={styles.MiM}>
                      <Text style={styles.text3}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                      onChangeText={(jumlah) => this.setState({jumlah})}
                      keyboardType="number-pad"
                      style={styles.input}
                      placeholder="."
                    />
                    <TouchableOpacity style={styles.MiM}>
                      <Text style={styles.text3}>+</Text>
                    </TouchableOpacity>
                  </View>
                  {/* <Text>undifine</Text> */}
                </View>
              </View>
              <TouchableOpacity
                onPress={() => this.addCart()}
                style={styles.addChart}>
                <Text style={styles.textBuyModal}>Buy</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(DetailProduct);
