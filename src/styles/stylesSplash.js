import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1493',
    // height: 800,
  },
  background: {},
  title: {
    fontSize: 30,
    position: 'absolute',
    left: 120,
    top: 70,
    color: '#FFFF',
  },
  logo: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 100,
    marginHorizontal: 15,
    height: 400,
    width: 400,
  },
  loading: {
    alignSelf: 'center',
  },
});

export {styles};
