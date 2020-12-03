import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ToastAndroid,
  Platform,
} from 'react-native';
import {styles} from '../styles/styleEditProduct';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Spinner from 'react-native-spinkit';

export class EditProduct extends Component {
  constructor(props) {
    super(props);
    // this destrack passing data
    const {item} = this.props.route.params;
    this.state = {
      url: '',
      name: item.name,
      price: item.price.toString(),
      stock: item.stock.toString(),
      totalPrice: item.total_price.toString(),
      discount: item.discount.toString(),
      image: {uri: item.image},
      uri: item.image,
      description: item.detail,
      id: item.id,

      srcImg: '',
      filename: '',

      isloading: false,
      isEror: false,

      Eror: false,
      loading: false,
    };
    // console.log('ini state', this.state);
  }

  addPhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('RESPONSE =', response);
      if (response.didCancel) {
        console.log('User, Cancel Image Picker');
      } else if (response.error) {
        console.log('ImagePicker Eror', response.error);
      } else if (response.customeBottom) {
        console.log('User Tapped Costume buttom', response.customeBottom);
      } else {
        // //  check response and fileName
        // // jangan lupa huruf gede dan kecil nya harus di perhatikan
        console.log('respon img picker, and fileName ', response.fileName);
        this.setState({
          image: response,
        });
      }
    });
  };

  editProduct = async () => {
    console.log('SEDANG DI EDIT');
    this.setState({isloading: true});
    const {name, price, stock, discount, description, image} = this.state;
    if (
      name !== '' ||
      price !== '' ||
      stock !== '' ||
      discount !== '' ||
      description !== '' ||
      image !== ''
    ) {
      const edit = {
        name: name,
        price: price,
        stock: stock,
        discount: discount,
        description: description,
        _method: 'PUT',
      };
      // console.log('Ini Data Edit', edit);
      // console.log('Ini Data ID', this.props.route.params.item.id);
      fetch(
        `https://larashop12.herokuapp.com/api/products/${this.props.route.params.item.id}`,
        {
          method: 'POST',
          body: this.FromData(image, edit),
          headers: {
            Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
          },
        },
      )
        .then((response) => {
          console.log('Respon +++', response);
          return response.text();
        })
        .then((resulty) => {
          console.log('resulty=== Berhasil ', resulty);
          if (resulty) {
            ToastAndroid.show('Data Berhasil Di Edit', ToastAndroid.LONG);
            this.props.navigation.navigate('Market');
            this.setState({
              isEror: false,
              isloading: false,
            });
          }
        })
        .catch((eror) => {
          if (eror) {
            ToastAndroid.show('Data Belum Di Ubah', ToastAndroid.LONG);
            // console.log('Eror', eror.response.data);
          } else {
            ToastAndroid.show('Data Gagal Di Ubah', ToastAndroid.LONG);
          }
          this.setState({
            isEror: false,
            isloading: false,
          });
        });
    } else {
      ToastAndroid.show('Mohon Lengkapi Data Tersebut ', ToastAndroid.LONG);
    }
  };

  FromData = (image, body) => {
    const data = new FormData();

    data.append('image', {
      name: image.fileName,
      type: image.type,
      uri:
        Platform.OS === 'android'
          ? image.uri
          : image.uri.replace('file://', ''),
    });
    Object.keys(body).forEach((key) => {
      data.append(key, body[key]);
    });
    console.log('ini data ', data);
    return data;
  };

  deleteItem = async () => {
    console.log('SEDANG MENGHAPUS');
    this.setState({loading: true});
    fetch(
      `https://larashop12.herokuapp.com/api/products/${this.props.route.params.item.id}`,
      {
        method: 'DELETE',
        headers: {
          // 'Content-Type': 'application/json',
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      },
    )
      .then((response) => {
        console.log('Respon +++', response);
        return response.text();
      })
      .then((resulty) => {
        console.log('resulty=== Berhasil ', resulty);
        if (resulty) {
          ToastAndroid.show('Berhasil Di Hapus', ToastAndroid.LONG);
          this.props.navigation.navigate('Market');
          this.setState({
            Eror: false,
            loading: false,
          });
        }
      })
      .catch((error) => {
        ToastAndroid.show('Gagal Menghapus', ToastAndroid.LONG);
        console.log(error);
        this.setState({
          Eror: false,
          loading: false,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Change Your Product</Text>
        </View>
        <View style={styles.pactImage}>
          <TouchableOpacity
            onPress={() => this.addPhoto()}
            style={styles.exImage}>
            <Image style={styles.image} source={{uri: this.state.image.uri}} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.content}>
            <Text>Name</Text>
            <TextInput
              value={this.state.name}
              onChangeText={(name) => this.setState({name: name})}
              style={styles.input}
              placeholder="Name Product"
            />
            <Text>Stock</Text>
            <TextInput
              style={styles.input}
              value={this.state.stock}
              onChangeText={(stock) => this.setState({stock: stock})}
              placeholder="Stock"
            />
            <Text>Discount</Text>
            <TextInput
              style={styles.input}
              value={this.state.discount}
              onChangeText={(discount) => this.setState({discount: discount})}
              placeholder="Discount"
            />
            <Text>Price</Text>
            <TextInput
              style={styles.input}
              value={this.state.price}
              onChangeText={(price) => this.setState({price: price})}
              placeholder="Total Price"
            />
            <Text>Description</Text>
            <TextInput
              style={styles.input}
              value={this.state.description}
              onChangeText={(description) =>
                this.setState({description: description})
              }
              placeholder="Description"
            />
            <View style={styles.pacthClick}>
              <TouchableOpacity
                onPress={() => this.deleteItem()}
                style={styles.delete}>
                {this.state.loading ? (
                  <Spinner color={'white'} size={35} type="Wave" />
                ) : (
                  <Text style={styles.text}>Delete Product</Text>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.editProduct()}
                style={styles.edit}>
                {this.state.isloading ? (
                  <Spinner color={'white'} size={35} type="Wave" />
                ) : (
                  <Text style={styles.text}>Edit Product</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};

export default connect(mapStateToProps)(EditProduct);

// <TouchableOpacity
//  onPress={() => console.log(this.props.userToken.userReducer.user)}>
//  <Text>Klik Token</Text>
// </TouchableOpacity>

// console.log(
//   'ini dari passing datadan ID nya',
//   this.props.route.params.item,
// );
