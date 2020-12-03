import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ToastAndroid,
  RefreshControl,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/styleManage';
import Spinner from 'react-native-spinkit';
export class Management extends Component {
  constructor() {
    super();

    this.state = {
      isloading: true,
      isEror: false,
      refreash: false,
      data: [],
    };
  }

  componentDidMount() {
    this.getDataProduct();
  }

  onRefreash() {
    this.setState({
      refreash: true,
    });
    this.getDataProduct();
  }

  getDataProduct = async () => {
    await fetch('https://larashop12.herokuapp.com/api/product/user', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data product ====', data.product);
        //change from function to object
        this.setState({
          isEror: false,
          isloading: false,
          data: data.product,
          refreash: false,
        });
      })
      .catch((eror) => {
        this.setState({
          isloading: false,
          isEror: true,
          refreash: false,
        });
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
        // else {
        //   console.log('data tidak Ada');
        // }
      });
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
          <TouchableOpacity
            style={{top: 20}}
            onPress={() => this.state.onRefreash()}>
            <Text>Klik Me Untuk refreash</Text>
          </TouchableOpacity>
        </View>
      );
    }
    // this pact content
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.titleDashboard}>Dashboard</Text>
        </View>
        <View style={styles.body}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreash}
                onRefresh={() => this.onRefreash()}
              />
            }>
            <View style={styles.pactItem}>
              {this.state.data.map((item, index) => (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('EditProduct', {
                      item: item,
                    })
                  }
                  style={styles.product}>
                  <View style={styles.inProduct}>
                    <Image style={styles.item} source={{uri: item.image}} />
                  </View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.stock}>Stock: {item.stock}</Text>
                  <Text style={styles.price}>Price: {item.price} </Text>
                  <View style={styles.pactRating}>
                    <Image
                      style={styles.stars}
                      source={require('../asset/icon/star.png')}
                    />
                    <Text> Rating</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
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
export default connect(mapStateToProps)(Management);

// <TouchableOpacity
//  onPress={() => console.log(this.props.userToken.userReducer.user)}>
//  <Text>Klik Token</Text>
// </TouchableOpacity>
