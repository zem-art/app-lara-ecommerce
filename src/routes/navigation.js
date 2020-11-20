import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

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
import Conguratulation from '../components/Congratulations';
import {AddProduct} from '../components/addProduct';

const Stack = createStackNavigator();

export class Navigation extends Component {
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
          <Stack.Screen name="Welcome" component={Conguratulation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Navigation;
