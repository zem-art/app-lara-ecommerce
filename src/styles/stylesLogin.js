import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginTop: 15,
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
  forgot: {
    marginVertical: 10,
    alignSelf: 'flex-end',
    color: '#bdbdbdbd',
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
  connect: {
    //borderWidth: 1,
    height: 50,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  social: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
  },
  text1: {
    alignSelf: 'center',
    marginVertical: 15,
    color: '#bdbdbdbd',
  },
  text2: {
    alignSelf: 'center',
    color: '#ffff',
    marginTop: 10,
  },
  text3: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
export {styles};
