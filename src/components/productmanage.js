import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {styles} from '../styles/styleManage';

export class Management extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <TouchableOpacity
            onPress={() => console.log(this.props.userToken.userReducer.user)}>
            <Text>Klik Token</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.back}
              source={require('../asset/icon/back.png')}
            />
          </TouchableOpacity>
          <Text style={styles.titleDashboard}>Dashboard</Text>
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
