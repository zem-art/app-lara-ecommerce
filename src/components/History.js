import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {styles} from '../styles/history';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class History extends Component {
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
    this.getPesanan();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getPesanan();
  }

  getPesanan = async () => {
    try {
      const response = await axios({
        // call deatail product using data passing
        url: 'https://larashop12.herokuapp.com/api/history',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      });
      // tidak ada then disini kalo mau di kasih then di sini
      const data = response.data;
      console.log('ini dari pesanan ditail', data.pesanan);
      this.setState({
        isEror: false,
        isloading: false,
        data: data.pesanan,
        refreash: false,
      });
    } catch (err) {
      this.setState({
        isloading: false,
        isEror: true,
        refreash: false,
        // tidak ada data nya di array
        data: [],
      });
      console.log(err);
      // if respon from backend
      if (err.response) {
        console.log(
          'Maaf Tidak Ada Barang Pesanan anda',
          err.response.data.message,
        );
      } else if (err.request) {
        ToastAndroid.show('kamu sedang offline nih', ToastAndroid.LONG);
      } else {
        ToastAndroid.show(
          'Tidak Ada Barang Yang Ingin Di Pesanan ',
          ToastAndroid.LONG,
        );
      }
    }
  };

  ChecOut() {
    try {
      axios({
        url: 'https://larashop12.herokuapp.com/api/bayar',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      }).then((resulty) => {
        console.log('Hasil checkOUt', resulty);
        ToastAndroid.show(
          'Pesanan berhasil di bayar dan sedang dalam proses pengiriman',
          ToastAndroid.LONG,
        );
        this.props.navigation.navigate('Troli');
      });
    } catch (err) {
      console.log(err);
      if (err.response) {
        console.log(
          'Pesanan berhasil di bayar dan sedang dalam proses pengiriman',
          err.response.data.message,
        );
      } else if (err.request) {
        ToastAndroid.show('kamu sedang offline nih', ToastAndroid.LONG);
      } else {
        ToastAndroid.show(
          'Tidak Ada Barang Yang Ingin Di Pesanan ',
          ToastAndroid.LONG,
        );
      }
    }
  }

  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.loading}>
          <Spinner color={'blue'} size={50} type="ThreeBounce" />
          <Text>Sedang Memuat data</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Purchase History</Text>
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.body}>
            {this.state.data.length !== 0 ? (
              <>
                {this.state.data.map((item, index) => (
                  <View style={styles.ItemPact} key={index}>
                    <Text style={styles.titleItem}>
                      Kode Pesanan : {item.kode_pesanan}
                    </Text>
                    <View style={styles.pactItem}>
                      <View style={styles.Eximage}>
                        <Image
                          style={styles.image}
                          source={require('../asset/img/pria.png')}
                        />
                      </View>
                      <View style={styles.ceterangan}>
                        <Text style={styles.text}>{item.status}</Text>
                        <Text style={styles.text}>$ :{item.jumlah_harga}</Text>
                        <Text style={styles.text}>
                          Tanggal Pesanan: {item.tanggal}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </>
            ) : (
              <Text style={styles.textcheckOut}>Tidak ada pesanan</Text>
            )}
          </View>
        </ScrollView>
        <TouchableOpacity
          // onPress={() => this.setState({data: []})}
          onPress={() => this.ChecOut()}
          style={styles.chekOut}>
          <Text style={styles.textChekOut}>ChekOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(History);
