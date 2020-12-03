import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/stylesChat';
import {connect} from 'react-redux';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class Chat extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
      isloading: true,
      isEror: false,
      refreash: false,
    };
  }

  componentDidMount() {
    this.getAllChat();
  }

  getAllChat = async () => {
    try {
      const response = await axios({
        url: 'https://larashop12.herokuapp.com/api/message',
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      });
      // tidak ada then disini kalo mau di kasih then di sini
      const data = response.data;
      console.log('ini dari pesanan Chat', data.user);
      this.setState({
        isEror: false,
        isloading: false,
        user: data.user,
        refreash: false,
      });
    } catch (err) {
      this.setState({
        isloading: false,
        isEror: true,
        refreash: false,
        // // tidak ada data nya di array
        // data: [],
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
          <Text style={styles.titleCart}>Chat</Text>
        </View>
        <View style={styles.pactItem}>
          <ScrollView>
            {this.state.user.length !== 0 ? (
              <>
                {this.state.user.map((item, index) => (
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('chatUser', {item: item})
                    }
                    style={styles.item}
                    key={index}>
                    <Text style={styles.titleStore}>{item.name}</Text>
                    <View style={styles.Row}>
                      <View style={styles.inItem}>
                        <Image
                          style={styles.Inimage}
                          source={require('../asset/icon/manperson.png')}
                        />
                      </View>
                      <Text style={styles.textItems}>{item.email}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <Text style={styles.textcheckOut}>Belum Memilki chat</Text>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(Chat);

//   <TouchableOpacity
// onPressOut={() => this.props.navigation.goBack()}
// style={styles.exback}>
// <Image
//  style={styles.back}
// source={require('../asset/icon/back.png')}
// />
//  </TouchableOpacity>
