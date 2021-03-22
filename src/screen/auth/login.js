import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
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
    this.props.navigation.navigate('Intro');
  }

  userLogin = async () => {
    this.setState({isloading: true});
    try {
      axios
        .post('https://larashop12.herokuapp.com/api/auth/login', {
          email: this.state.email,
          password: this.state.password,
        })
        // .then((response) => response)
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
            ToastAndroid.show('Anda Berhasil Login', ToastAndroid.LONG);
            AsyncStorage.setItem('token', access_token).then((value) => {
              this.gotoHome();
            });
            this.setState({
              isloading: false,
            });
          }
        })
        .catch((eror) => {
          ToastAndroid.show('Email Atau Password Salah', ToastAndroid.LONG);
          console.log('Erororo', eror);
          this.setState({
            isloading: false,
          });
        });
    } catch (eror) {
      this.setState({isloading: false});
      if (eror.response) {
        ToastAndroid.show(
          'Maaf Terjadi Kesalahan Dari Kami',
          ToastAndroid.LONG,
        );
        console.log('Erororr ', eror.response.data);
      }
    }
  };
  render() {
    return (
      <View style={styles.container}>
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
        </View>
        <Text style={styles.text2}> You don 't have an account</Text>
        <TouchableOpacity
          style={styles.login}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.text3}> Sign Up </Text>
        </TouchableOpacity>
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

// <Text style={styles.text1}> Connect With: </Text>
// <View style={styles.connect}>
// <TouchableOpacity>
// <Image
// style={styles.social}
// source={require('../../asset/icon/Fb.png')}
// />
// </TouchableOpacity>
// <TouchableOpacity>
// <Image
// style={styles.social}
// source={require('../../asset/icon/Goggle.png')}
// />
// </TouchableOpacity>
// <TouchableOpacity>
// <Image
// style={styles.social}
// source={require('../../asset/icon/Twither.png')}
// />
// </TouchableOpacity>
// </View>
