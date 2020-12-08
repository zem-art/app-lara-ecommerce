import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff1493',

    // backgroundColor: '#4169e1',
  },
  sizeIcon: {
    marginVertical: '15%',
  },
  background: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    alignSelf: 'center',
    width: '80%',
  },
  icon: {
    height: '100%',
    width: '90%',
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
