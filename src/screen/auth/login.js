import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import {styles} from '../../styles/stylesLogin';
import Spinner from 'react-native-spinkit';
import {connect} from 'react-redux';

// send to reducer
// const user = (payload) => ({type: 'SET_USER', payload});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isloading: false,
    };
  }

  gotoHome() {
    this.props.navigation.navigate('Home');
  }

  userLogin = async () => {
    this.setState({isloading: true});
    try {
      axios
        .post(`https://larashop12.herokuapp.com/api/auth/login`, {
          email: this.state.email,
          password: this.state.password,
        })
        .then((responseJson) => {
          // di extark data nya
          const {data} = responseJson.data;
          // apabila masuk data tinggal di pakai .
          // jadi ini masuk ke data nya
          console.log(data);
          const {access_token} = data;

          // // send to redux
          this.props.userLogin(access_token);
          if (access_token) {
            alert('Anda Berhasil Login');
            AsyncStorage.setItem('token', access_token).then((value) => {
              this.gotoHome();
            });
            this.setState({
              isloading: false,
            });
          }
        });
    } catch (eror) {
      // alert('Data Yang di Masukan Tidak Ada');
      this.setState({isloading: false});
      if (eror.response) {
        alert('Email Atau Password Salah', eror.response.data.messager);
        console.log(eror.response.messager);
      }
      // respons from claent
      else if (eror.request) {
        alert('Data Yang Di Masukan Salah');
      }
      // respon from developer
      else {
        alert('Kesalahan Dari Kami');
      }
      // respon from developer and claent
      // alert('kamu offline nih');
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.title}> Sign In </Text>
            <Text style={styles.text}> Create a new account to accsess </Text>
            <Text style={styles.text}> thousands of Products </Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.textdata1}> Email </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              onChangeText={(email) =>
                this.setState({
                  email: email,
                })
              }
            />
            <Text style={styles.textdata1}> Password </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              onChangeText={(password) =>
                this.setState({
                  password: password,
                })
              }
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={styles.forgot}> Forgot Password </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.userLogin()}>
              {this.state.isloading ? (
                <Spinner color={'white'} size={30} type="Wave" />
              ) : (
                <Text style={styles.buttonText}> Login </Text>
              )}
            </TouchableOpacity>
            <Text style={styles.text1}> Connect With: </Text>
            <View style={styles.connect}>
              <TouchableOpacity>
                <Image
                  style={styles.social}
                  source={require('../../asset/icon/Fb.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.social}
                  source={require('../../asset/icon/Goggle.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.social}
                  source={require('../../asset/icon/Twither.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.text2}> You don 't have an account</Text>
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.text3}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (access_token) =>
      dispatch({type: 'SET_USER', payload: access_token}),
  };
};

export default connect(null, mapDispatchToProps)(Login);
