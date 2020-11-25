import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import {styles} from '../styles/styleEditProfile';

export class ProfileDetail extends Component {
  constructor() {
    super();
    this.state = {
      url: '',
    };
  }
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
          <Text style={styles.title}>This Profile</Text>
        </View>
        <View style={styles.image}>
          <TouchableOpacity
            // onPress={() => this.addPhoto()}
            style={styles.inImage}>
            <Image style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.containt}>
          <TextInput style={styles.input} placeholder="Name" />
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Phone" />
          <TextInput style={styles.input} placeholder="Address" />

          <View style={styles.allpact}>
            <TouchableOpacity
              // onPress={() => this.AddProfile()}
              style={styles.edit}>
              <Text style={styles.textEdit}>Edit Profile</Text>
            </TouchableOpacity>
          </View>

          {/* <TouchableOpacity
          onPress={() => console.log(this.props.userToken.userReducer.user)}>
          <Text>Klik Token</Text>
        </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

export default ProfileDetail;
