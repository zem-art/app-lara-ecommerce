import React, {Component} from 'react';
import Splash from './src/screen/Splash';
import Navigation from './src/routes/navigation';
import Slider from './src/components/Slider';
//import {Provider} from 'react-redux';

export class App extends Component {
  render() {
    return (
      <>
        {/* <Navigation /> */}
        <Splash />
        {/* <Slider /> */}
      </>
    );
  }
}

export default App;
