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
    height: 20,
    marginTop: 70,
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
  text1: {
    alignSelf: 'center',
    // top: -30,
    color: '#a9a9a9',
  },
  content: {
    backgroundColor: '#ffff',
    height: 300,
    width: 350,
    marginTop: 100,
    alignSelf: 'center',
    borderRadius: 15,
    padding: 15,
    justifyContent: 'center',
  },
  textdata1: {
    // backgroundColor: '#4169e1',
    backgroundColor: '#ff1493',
    marginBottom: 5,
    fontSize: 20,
    marginTop: 15,
    alignSelf: 'center',
    color: '#ffff',
    width: 250,
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 100,
    paddingVertical: 10,
    top: -30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbdbd',
    width: 320,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
  },
});
export {styles};
