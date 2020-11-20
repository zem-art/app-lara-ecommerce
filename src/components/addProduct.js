import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Picker,
} from 'react-native';
import {styles} from '../styles/styleAddItems';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';

export class AddProduct extends Component {
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
    };
  }

  componentDidMount() {
    console.log(this.props.userReducer);
  }

  addData = async () => {
    const {
      name,
      categori,
      image,
      description,
      price,
      stock,
      discount,
      token,
    } = this.state;

    if (
      name === '' &&
      categori === '' &&
      image !== '' &&
      description === '' &&
      price === '' &&
      stock === '' &&
      discount === ''
    ) {
      const add = {
        name: name,
        categori: categori,
        image: image,
        description: description,
        price: price,
        stock: stock,
        discount: discount,
      };
      await fetch('http://larashop12.herokuapp.com/api/products', {
        method: 'POST',
        body: this.createPhoto(image, add),
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json)
        .then((result) => {
          if (result) console.log('Oupload sucsess', result);
          alert('Data Berhasil diTambahan');
        })
        .catch((err) => {
          console.log('Oupload eror', err);
          alert('Data Gagal Di Tambahkan');
        });
    } else {
      alert('Tolong lengkapi Product Anda');
    }
  };

  addPhoto = () => {
    const options = {
      title: 'select Photo',
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({image: response});
      }
    });
  };

  render() {
    console.log(this.props.userToken);
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
              <TouchableOpacity style={styles.image}>
                <Text>Image</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pactItem}>
              <Text>Name Product</Text>
              <TextInput
                multiline={true}
                style={styles.input}
                placeholder="name Product"
                onChangeText={(name) =>
                  this.setState({
                    name: name,
                  })
                }
              />
              <Text>Kategori</Text>
              <Picker
                selectedValue={this.state.category}
                style={styles.input1}
                onValueChange={(itemValue) =>
                  this.setState({categori: itemValue})
                }>
                {this.state.categori.map((item, value) => (
                  <Picker.Item label={item.categori} value={item.id} />
                ))}
              </Picker>
              <Text>Harga</Text>
              <TextInput
                style={styles.input}
                placeholder="exemple"
                onChangeText={(price) =>
                  this.setState({
                    price: price,
                  })
                }
              />
              <Text>Discount</Text>
              <TextInput
                style={styles.input}
                placeholder="exemple"
                onChangeText={(discount) =>
                  this.setState({
                    discount: discount,
                  })
                }
              />
              <Text>Stock</Text>
              <TextInput
                style={styles.input}
                placeholder="exemple"
                onChangeText={(stock) =>
                  this.setState({
                    stock: stock,
                  })
                }
              />
              <Text>Descriptsi Product</Text>
              <TextInput
                multiline={true}
                style={styles.description}
                placeholder="exemple"
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
              <Text style={styles.text}>Tambah Data</Text>
            </TouchableOpacity>
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

export default connect(mapStateToProps)(AddProduct);
