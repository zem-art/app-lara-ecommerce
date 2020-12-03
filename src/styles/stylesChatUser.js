import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hiader: {
    height: 60,
    backgroundColor: '#ff1493',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  back: {
    height: 30,
    width: 30,
  },
  menu: {
    height: 30,
    width: 30,
  },
  personalIdentity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  man: {
    height: 35,
    width: 35,
    right: 10,
  },
  body: {
    flex: 1,
    backgroundColor: '#9400d3',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  From: {
    height: 40,
    width: 120,
    backgroundColor: '#FFFF',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Accept: {
    height: 40,
    width: 120,
    backgroundColor: '#FFFF',
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  pactInput: {
    paddingHorizontal: 10,
    backgroundColor: '#1e90ff',
  },
  inputan: {
    flexDirection: 'row',
    // borderWidth: 1,
    marginVertical: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '85%',
    borderRadius: 10,
    paddingLeft: 10,
  },
  sendData: {
    // borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: 50,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  send: {
    height: 40,
    width: 40,
  },
});

export {styles};
