import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import Login from '../screen/auth/login';
import Register from '../screen/auth/register';
import Forgot from '../screen/auth/forgot';
import Intro from '../screen/Intro';
import MyTabs from './TabBottom';
import Setting from '../components/setting';
import cartScreen from '../components/cartScreen';
import Product from '../components/productScreen';
import ChekOut from '../components/chekOut';
import Category from '../controller/Category';
import Header from '../controller/HeaderFromProfil';
import DetailProduct from '../components/DetailProduct';
import AddProduct from '../components/addProduct';
import OpenToko from '../components/OpenToko';
import Market from '../container/marketPlace';
import Profile from '../components/FormulirProfile';
import ProfileDetail from '../components/profileDetail';

const Stack = createStackNavigator();

class Navigation extends Component {
  componentDidMount() {
    //console.log('Home DID MOUNT');
    // get token to Asyncstore
    AsyncStorage.getItem('token').then((token) => {
      // console.log(data);
      this.props.userLogin(token);
    });

    // console.log(this.props.userReducer);
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode={{headerMode: false}}>
          <Stack.Screen name="Intro" component={Intro} />
          <Stack.Screen name="Home" component={MyTabs} />
          <Stack.Screen name="Category" component={Category} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Forgot" component={Forgot} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Cart" component={cartScreen} />
          <Stack.Screen name="Product" component={Product} />
          <Stack.Screen name="ChekOut" component={ChekOut} />
          <Stack.Screen name="HeaderProfile" component={Header} />
          <Stack.Screen name="Detail" component={DetailProduct} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
          <Stack.Screen name="Toko" component={OpenToko} />
          <Stack.Screen name="Market" component={Market} />
          <Stack.Screen name="EditProfile" component={Profile} />
          <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
//// get token from redux
const mapStateToProps = (state) => {
  return {
    userToken: state,
  };
};
// send token to redux
const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (access_token) =>
      dispatch({type: 'SET_USER', payload: access_token}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
