import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Button,
  RefreshControl,
  Image,
} from 'react-native';

import {styles} from '../styles/stylesHome';
import Spinner from 'react-native-spinkit';
import Category from '../controller/Category';
import Header from '../controller/HeaderfromHome';
import AsyncStorage from '@react-native-community/async-storage';
import {connect} from 'react-redux';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      isloading: true,
      isEror: false,
      refreash: false,
      token: '',
    };
  }

  componentDidMount() {
    //console.log('Home DID MOUNT');
    this.getdata();
    // get token to Asyncstore
    AsyncStorage.getItem('token').then((token) => {
      // console.log(data);
      this.props.userLogin(token);
    });

    // console.log(this.props.userReducer);
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getdata();
  }

  getdata = async () => {
    await fetch('https://larashop12.herokuapp.com/api/products', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data.data);
        //change from function to object
        this.setState({
          isEror: false,
          isloading: false,
          data: data.data,
          refreash: false,
        });
      })
      .catch((eror) => {
        this.setState({
          isloading: false,
          isEror: true,
          refreash: false,
        });
        // console.log(eror);
        // console.log('Eror Data Tidak Di Temukan');
        //// if respon from backend
        if (eror.response) {
          alert(eror.response.data.message);
        }
        // // respons from claent
        else if (eror.request) {
          alert('kamu sedang offline nih');
        }
        // else {
        //   console.log('data tidak Ada');
        // }
      });
  };

  MyToken = async (value) => {
    try {
      await AsyncStorage.getItem('token', value);
      // console.log('token nya ', AsyncStorage.getItem('token'));
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    //// if loading data
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
          <TouchableOpacity
            style={{top: 20}}
            onPress={() => this.state.onRefreash()}>
            <Text>Klik Me Untuk Merefreash</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation} />
        </View>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreash}
              onRefresh={() => this.onRefreash()}
            />
          }>
          <View style={styles.iklan}>
            <Text>Ini Bagian Iklan</Text>
          </View>
          <View style={styles.Menu}>
            <Text style={styles.titleCategory}>Category</Text>
            <ScrollView horizontal={true}>
              <View>
                {/*given the props so that the category has props from Home*/}
                {/* navigation this props */}
                <Category navigation={this.props.navigation} />
              </View>
            </ScrollView>
          </View>
          <View style={styles.nameItem}>
            {/* return data from its map , this return */}
            {this.state.data.map((item, index) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.userToken.userReducer.user !== null
                    ? this.props.navigation.navigate('Detail', {
                        item: item,
                      })
                    : this.props.navigation.navigate('Login'),
                    alert('Maaf Anda Harus LogIn Terlebih Dahulu');
                }}
                key={index}>
                <View style={styles.body}>
                  <View style={styles.product}>
                    <Image style={styles.Image} source={{uri: item.image}} />
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>Price</Text>
                    <Text style={styles.stock}>stock :{item.totalPrice}</Text>
                    <Text style={styles.Rating}>rating : {item.rating}</Text>

                    <Button title="Lihat" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}
// used to use the token
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (access_token) =>
      dispatch({type: 'SET_USER', payload: access_token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// check token in redux
//  <TouchableOpacity
//    onPress={() => console.log(this.props.userToken.userReducer.user)}>
//    <Text>Klik</Text>
//  </TouchableOpacity>
