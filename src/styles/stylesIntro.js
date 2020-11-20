import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1493',
    // backgroundColor: '#4169e1',
  },
  background: {},
  sizeIcon: {
    alignSelf: 'center',
    marginVertical: 70,
  },
  icon: {
    height: 300,
    width: 350,
    //borderRadius: 10,
  },
  title: {
    alignSelf: 'center',
    color: '#FFFF',
    fontSize: 20,
  },
  title1: {
    marginTop: 15,
    alignSelf: 'center',
    fontSize: 15,
    color: '#FFFF',
  },
  start: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 50,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  start1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export {styles};
