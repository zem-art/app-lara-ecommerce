import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Picker,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleAddItems';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Spinner from 'react-native-spinkit';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      name: '',
      categori: [],
      image: '',
      description: '',
      price: '',
      stock: '',
      discount: '',
      setSelectedValue: '',
      url: '',
      srcImg: '',
      filename: '',
      uri: '',
      // create category for setState picker
      inputCategori: '',
      isloading: false,
    };
  }

  componentDidMount() {
    this.getCategori();
    // console.log(this.props.userToken.userReducer.user);
  }

  addPhoto = () => {
    this.setState({isloading: true});
    const options = {
      title: 'Pilih Gambar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
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
          srcImg: {uri: response.uri},
          uri: response.uri,
          filename: response.fileName,
        });
      }
    });
    this.setState({
      isloading: false,
    });
  };

  addData() {
    this.setState({isloading: true});
    console.log('Mulai Upload');
    const {
      name,
      categori,
      description,
      price,
      stock,
      discount,
      inputCategori,
    } = this.state;
    if (
      (name !== '' || categori !== '',
      description !== '' || price !== '' || stock !== '',
      discount !== '')
    ) {
      // data that will be filled and declared
      const add = {
        name: name,
        categori_id: inputCategori,
        description: description,
        price: price,
        stock: stock,
        discount: discount,
      };
      // create fromData
      const data = new FormData();
      data.append('image', {
        uri: this.state.uri,
        type: 'image/jpeg',
        name: this.state.filename,
      });
      // the declaration of the add above
      for (var key in add) {
        var encodedKey = encodeURIComponent(key);
        var encodedValue = encodeURIComponent(add[key]);
        data.append(encodedKey, encodedValue);
      }
      const url = 'http://larashop12.herokuapp.com/api/products';
      fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          // this is a token stored on redux
          Authorization: `Bearer ${this.props.userToken.userReducer.user}`,
        },
      })
        .then((response) => {
          console.log('response === ', response);
          return response.text();
        })
        .then((result) => {
          if (result) {
            console.log('result === ', result);
            ToastAndroid.show('Data Berhasil diTambahan', ToastAndroid.LONG);
            this.props.navigation.navigate('Market');
          }
        })
        .catch((err) => {
          this.setState({isloading: false});
          console.log('Oupload eror', err);
          ToastAndroid.show('Data Gagal Di Tambahkan', ToastAndroid.LONG);
        });
    } else {
      ToastAndroid.show(
        'Tolong Lengakapi Data Product Anda',
        ToastAndroid.LONG,
      );
    }
    this.setState({
      isloading: false,
    });
  }

  getCategori() {
    this.setState({isloading: true});
    try {
      axios
        .get('http://larashop12.herokuapp.com/api/categori')
        .then((categori) => {
          //console.log('ini categori');
          console.log(categori.data.data);
          this.setState({
            categori: categori.data.data,
          });
        });
    } catch (eror) {
      console.error(eror);
      console.log('eror');
    }
    this.setState({isloading: false});
  }

  render() {
    //console.log('ini categori', this.state.categori);
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.inHeader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.back}
                source={require('../asset/icon/back.png')}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Tambahkan Product Anda</Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.dataAdd}>
            <View style={styles.pactImage}>
              <TouchableOpacity
                style={styles.eximage}
                onPress={() => this.addPhoto()}>
                <Image
                  style={styles.image}
                  source={
                    this.state.uri !== ''
                      ? {
                          uri: this.state.uri,
                        }
                      : {
                          uri:
                            'https://image.shutterstock.com/image-vector/add-icon-plus-vector-260nw-454078798.jpg',
                        }
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={styles.pactItem}>
              <Text>Name Product</Text>
              <TextInput
                value={this.state.name}
                multiline={true}
                style={styles.input}
                placeholder="name Product"
                onChangeText={(name) =>
                  this.setState({
                    name: name,
                  })
                }
              />
              <Text>Category</Text>
              <Picker
                mode="dropdown"
                selectedValue={this.state.inputCategori}
                style={styles.input1}
                onValueChange={(itemValue) =>
                  this.setState({inputCategori: itemValue})
                }>
                {this.state.categori.map((item, value) => {
                  return <Picker.Item label={item.categori} value={item.id} />;
                })}
              </Picker>
              <View style={styles.text1}>
                <Text>Price</Text>
                <Text style={styles.text2}>Discount</Text>
              </View>
              <View style={styles.pactPrice}>
                <TextInput
                  value={this.state.price}
                  style={styles.input2}
                  placeholder="Price"
                  onChangeText={(price) =>
                    this.setState({
                      price: price,
                    })
                  }
                />

                <TextInput
                  value={this.state.discount}
                  style={styles.input3}
                  placeholder="Discount"
                  onChangeText={(discount) =>
                    this.setState({
                      discount: discount,
                    })
                  }
                />
              </View>
              <Text>Stock</Text>
              <TextInput
                value={this.state.stock}
                style={styles.input}
                placeholder="Stock"
                onChangeText={(stock) =>
                  this.setState({
                    stock: stock,
                  })
                }
              />
              <Text>Descriptsi Product</Text>
              <TextInput
                value={this.state.description}
                multiline={true}
                style={styles.description}
                placeholder="Description Product"
                onChangeText={(description) =>
                  this.setState({
                    description: description,
                  })
                }
              />
            </View>
            <TouchableOpacity
              onPress={() => this.addData()}
              style={styles.addItem}>
              {this.state.isloading ? (
                <Spinner color={'blue'} size={10} type="Wave" />
              ) : (
                <Text style={styles.text}>Add Product</Text>
              )}
            </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */}
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

export default connect(mapStateToProps)(AddProduct);
