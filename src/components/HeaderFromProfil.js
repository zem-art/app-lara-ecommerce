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
import {styles} from '../styles/stylesProfile';
import {connect} from 'react-redux';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      nama: '',
      email: '',
      image: '',
      refreash: false,
    };
  }

  componentDidMount() {
    this.getProfile();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getProfile();
  }

  getProfile = async () => {
    await fetch('http://larashop12.herokuapp.com/api/profile', {
      method: 'GET',
      headers: {
        // this is a token stored on redux
        Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data =12', data.profile);
        //console.log(data);
        //change from function to object
        this.setState({
          isEror: false,
          isloading: false,
          data: data.profile,
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
          ToastAndroid(
            'Kesalahan Dari BAckEnd',
            ToastAndroid.LONG,
            eror.response.data.message,
          );
        }
        // // respons from claent
        else if (eror.request) {
          ToastAndroid('kamu sedang offline nih', ToastAndroid.LONG);
        }
      });
  };

  render() {
    // console.log('ini state data ', this.state.data.length);
    return (
      <View>
        {/* <TouchableOpacity
          onPress={() => console.log(this.props.userToken.userReducer.user)}>
          <Text>Klik Token</Text>
        </TouchableOpacity> */}
        {this.props.userToken.userReducer.user ? (
          <></>
        ) : (
          <View style={styles.exSign}>
            <TouchableOpacity
              style={styles.sign}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.text3}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sign}
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.text3}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.props.userToken.userReducer.user ? (
          <>
            <TouchableOpacity
              style={styles.settingClik}
              onPress={() => this.props.navigation.navigate('Setting')}>
              <Image
                style={styles.setting}
                source={require('../asset/icon/setting131231.png')}
              />
            </TouchableOpacity>
          </>
        ) : (
          <Text>{null}</Text>
        )}

        <View style={styles.inHeader}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreash}
                onRefresh={() => this.onRefreash()}
              />
            }>
            {this.state.data.length !== 0 ? (
              <>
                {this.state.data.map((item, index) => (
                  <View style={styles.inHeader}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('ProfileDetail', {
                          item: item,
                        })
                      }
                      key={index}>
                      <Image style={styles.profil} source={{uri: item.image}} />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.textProfile}>{item.nama}</Text>
                      <Text style={styles.textProfile}>{item.user.email}</Text>
                    </View>
                  </View>
                ))}
              </>
            ) : this.props.userToken.userReducer.user ? (
              <TouchableOpacity
                style={styles.navigate}
                onPress={() => this.props.navigation.navigate('EditProfile')}>
                <Text style={styles.text5}>Tolong Lengkapi data anda</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.navigate}
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.text5}>Anda belum Terdaftar</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
        <View style={styles.component}>
          <View style={styles.component1}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>Favorit</Text>
          </View>
          <View style={styles.component1}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>Follow Toko</Text>
          </View>
          <View style={styles.component1}>
            <Text style={styles.text}>0</Text>
            <Text style={styles.text}>Just seen</Text>
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

export default connect(mapStateToProps)(Header);

// <Image
// style={styles.profil}
// source={require('../asset/icon/manperson.png')}
/// >
