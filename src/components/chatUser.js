import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
  RefreshControl,
} from 'react-native';
import {styles} from '../styles/stylesChatUser';
import {connect} from 'react-redux';
import axios from 'axios';
import Pusher from 'pusher-js/react-native';

export class chatUser extends Component {
  constructor() {
    super();
    this.state = {
      dataMesage: ['in daleman state'],
      send: '',
      accept: '',
      sendTo: '',
      data: [],
      id: '',
    };
    // console.log('ini dari state data', this.state.data);
  }
  componentDidMount() {
    this.getChat();
    Pusher.logToConsole = true;

    var pusher = new Pusher('3498a888774f5b64ebc4', {
      cluster: 'ap1',
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      // alert(JSON.stringify(data));
      this.getChat();
    });
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getChat();
  }

  sendMessage() {
    console.log('mula mengirim');
    const {send} = this.state;
    const data = new FormData();
    data.append('message', send);
    data.append('receiver_id', this.props.route.params.item.id);
    const url = 'https://larashop12.herokuapp.com/api/message';
    fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
      },
    })
      .then((response) => response.json())
      .then((resulty) => {
        console.log('resultyy ==>', resulty);
        ToastAndroid.show('Berhasil', ToastAndroid.LONG);
        console.log('berhasil');
      })
      .catch((err) => {
        console.log('eror saat mengirim', err);
        alert(err);
      });
  }

  getChat = async () => {
    try {
      let response = await axios({
        url: `https://larashop12.herokuapp.com/api/message/${this.props.route.params.item.id}`,
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      });
      const data = response.data;
      console.log('ini dari data message', data.message);
      this.setState({
        data: data.message,
        isEror: false,
        isloading: false,
        refreash: false,
      });
    } catch (err) {
      this.setState({
        isloading: false,
        isEror: true,
        refreash: false,
      });
      console.log('Eror dari data ', err);
      if (err.response) {
        console.log('Maaf Gagal Mengirim pesan', err.response.data.message);
      } else if (err.request) {
        ToastAndroid.show('Maaf Anda Sedang Offline', ToastAndroid.LONG);
      } else {
        ToastAndroid.show('Maaf Ada Kesalahan Dari Kami', ToastAndroid.LONG);
      }
    }
  };

  render() {
    // console.log('ini dari state data', this.props.route.params.item.id);
    return (
      <View style={styles.container}>
        <View style={styles.hiader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <View style={styles.personalIdentity}>
            <Image
              style={styles.man}
              source={require('../asset/icon/manperson.png')}
            />
            <View>
              <Text>Name People</Text>
              <Text>Status</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.menu}
              source={require('../asset/icon/manuBalok1.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreash}
                onRefresh={() => this.onRefreash()}
              />
            }>
            {this.state.data.map((item, index) => {
              if (item.from === 1) {
                return (
                  <View style={styles.From}>
                    <Text>{item.message}</Text>
                  </View>
                );
              } else {
                return (
                  <View style={styles.Accept}>
                    <Text>{item.message}</Text>
                  </View>
                );
              }
            })}
          </ScrollView>
          {/* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */}
        </View>
        <View style={styles.pactInput}>
          <View style={styles.inputan}>
            <TextInput
              // value={this.state.message}
              multiline={true}
              onChangeText={(send) =>
                this.setState({
                  send: send,
                })
              }
              style={styles.input}
              placeholder="Masukan Text"
            />
            <TouchableOpacity
              onPress={() => this.sendMessage()}
              style={styles.sendData}>
              <Image
                style={styles.send}
                source={require('../asset/icon/Send.png')}
              />
            </TouchableOpacity>
          </View>
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

export default connect(mapStateToProps)(chatUser);

{
  /* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */
}
