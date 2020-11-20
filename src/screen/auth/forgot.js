import React, {Component} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {styles} from '../../styles/stylesForgot';
export class Forgot extends Component {
  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.background}>
            <View style={styles.header}>
              <Text style={styles.title}>Forgot Password</Text>
              <Text style={styles.text}>
                Are you sure you forgot your password ?
              </Text>
            </View>
            <View style={styles.content}>
              <Text style={styles.textdata1}>Email</Text>
              <TextInput style={styles.input} placeholder="Enter Your Email" />
              <Text style={styles.text1}>
                Please enter your email for verification
              </Text>
              <View style={styles.button}>
                <Button
                  color="#ff1493"
                  title="Send"
                  onPress={() => alert('belum jadi')}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Forgot;
