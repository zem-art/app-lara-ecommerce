import {StyleSheet} from 'react-native';

import {
  responsiveHeight,
  responsiveWidht,
  responsiveText,
} from 'react-native-responsive-dimension';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginVertical: 10,
    // borderWidth: 1,
  },
  header: {
    height: 50,
    backgroundColor: 'red',
  },
  iklan: {
    // height: 900,
    alignSelf: 'center',
    borderWidth: 1,
  },
  scroll: {},
  slider: {
    height: '70%',
    width: 300,
    margin: 10,
  },
});

export {styles};
