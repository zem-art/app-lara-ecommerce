import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#181f3d',
  },
  background: {
    // backgroundColor: '#4169e1',
    backgroundColor: '#ff1493',
    height: 900,
  },
  header: {
    height: 50,
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#ffff',
  },
  text: {
    alignSelf: 'center',
    color: '#ffff',
  },
  content: {
    backgroundColor: '#ffff',
    height: 450,
    width: 350,
    marginTop: 80,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 15,
  },
  textdata1: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbdbd',
    width: 320,
    marginBottom: 10,
  },
  login: {
    backgroundColor: 'white',
    height: 50,
    width: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    height: 50,
    width: 200,
    alignSelf: 'center',
    //borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: '#ff1493',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  text1: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
  text2: {
    alignSelf: 'center',
    color: '#ffff',
    marginTop: 10,
  },
});
export {styles};
