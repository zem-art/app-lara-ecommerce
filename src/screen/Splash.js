import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Navigation from '../routes/navigation';
import Spinner from 'react-native-spinkit';
import {styles} from '../styles/stylesSplash';
import {Provider} from 'react-redux';
import store from '../store/Store';

export class Splash extends Component {
  constructor() {
    super();
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        role: false,
      });
    }, 5000);
  };

  state = {
    role: true,
  };

  splashScreen = () => {
    return (
      <View style={styles.container}>
        {/* <View style={styles.background}> */}
        <Image style={styles.logo} source={require('../asset/icon/Logo.png')} />
        <Spinner
          style={styles.loading}
          color={'white'}
          size={50}
          type="FadingCircleAlt"
        />
        {/* </View> */}
      </View>
    );
  };

  render() {
    if (this.state.role) {
      return <>{this.splashScreen()}</>;
    } else {
      return (
        <Provider store={store}>
          <Navigation />
        </Provider>
      );
      //return <Navigation />;
    }
  }
}

export default Splash;
