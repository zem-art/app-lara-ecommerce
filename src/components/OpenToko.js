import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image} from 'react-native';

// import Spinner from 'react-native-spinkit';
import {styles} from '../styles/OpenToko';

export class OpenToko extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.background}>
          <View style={styles.header}>
            <Text style={styles.title}> Create Store </Text>
            <Text style={styles.text}> Create a new Shop to show </Text>
            <Text style={styles.text}> The world about your new products</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.textdata1}> Name Store </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Name Store"
              onChangeText={(name) =>
                this.setState({
                  name: name,
                })
              }
            />
            <Text style={styles.textdata1}> Address </Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Address"
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
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={styles.forgot}> Forgot Password </Text>
            </TouchableOpacity> */}
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Create</Text>
              {/* {this.state.isloading ? (
                <Spinner color={'white'} size={30} type="Wave" />
              ) : (
                <Text style={styles.buttonText}> Login </Text>
              )} */}
            </TouchableOpacity>
          </View>
          {/* <Text style={styles.text2}> You don 't have an account</Text> */}
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.text3}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default OpenToko;
