import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from '../../styles/stylesRegister';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      noPhone: '',
      isloading: false,
    };
  }

  gotoLogin() {
    this.props.navigation.navigate('Login');
  }

  userRegister() {
    this.setState({isloading: true});
    axios({
      url: `https://larashop12.herokuapp.com/api/auth/register`,
      method: 'POST',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      },
    })
      .then((responseJson) => {
        //   // di extark data nya
        const {data} = responseJson.data;
        // If the data is exactly the same as the form that must be filled in, then send it to the backend
        if (data === data) {
          ToastAndroid.show(
            'Akun Berhasil Mendaftar Daftar',
            ToastAndroid.LONG,
          );
          this.gotoLogin();
        }
      })
      .catch((eror) => {
        ToastAndroid.show('Maaf Data Harus Di isi', ToastAndroid.LONG);
        this.setState({isloading: false});
        // // respon from backEnd
        if (eror.response) {
          ToastAndroid.show(
            'Kesalahan Dari BackEnd Kami',
            ToastAndroid.LONG,
            eror.response.data.messager,
          );
          console.log(eror.response.messager);
        }
        // respons from claent
        else if (eror.request) {
          ToastAndroid.show('Kamu Sedang Offline', ToastAndroid.LONG);
        }
        // respon from developer
        else {
          ToastAndroid.show(
            'Maaf Ada Kesalahan Yang Berasal Dari Kami',
            ToastAndroid.LONG,
          );
        }
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.text}>Create a new account to accsess</Text>
            <Text style={styles.text}>thousands of Products</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.textdata1}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name"
              onChangeText={(name) => this.setState({name: name})}
            />
            <Text style={styles.textdata1}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Email"
              onChangeText={(email) => this.setState({email: email})}
            />
            <Text style={styles.textdata1}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password: password})}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.userRegister()}>
              {this.state.isloading ? (
                <Spinner color={'white'} size={30} type="Wave" />
              ) : (
                <Text style={styles.buttonText}> Register</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.text2}>Already have an account</Text>
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.props.navigation.navigate('Login')}>
            <Text style={styles.text1}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Register;
