import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  header: {
    height: 50,
    backgroundColor: '#ff1493',
    paddingHorizontal: 10,
  },
  inHeader: {
    flexDirection: 'row',
    marginVertical: 13,
    //justifyContent: 'space-between',
  },
  title: {
    alignSelf: 'center',
    alignItems: 'center',
    left: 30,
    fontSize: 19,
    color: '#FFFF',
  },
  back: {
    height: 25,
    width: 25,
  },
  dataAdd: {
    backgroundColor: '#6495ed',
    width: 370,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
  },
  pactImage: {
    height: 200,
    //borderWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: 150,
    width: 150,
    borderRadius: 10,
  },
  pactItem: {
    //height: 900,
    //borderWidth: 1,
    alignSelf: 'center',
  },
  input: {
    //backgroundColor: '#a9a9a9',
    backgroundColor: '#FFFF',
    height: 50,
    paddingLeft: 20,
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
    //borderBottomWidth: 1.5,
  },
  input1: {
    height: 50,
    width: 310,
  },
  description: {
    backgroundColor: '#FFFF',
    paddingLeft: 20,
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
  },
  lowPart: {
    backgroundColor: 'blue',
    height: 60,
    justifyContent: 'center',
  },
  addItem: {
    backgroundColor: '#FFFFFF',
    width: 200,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 17,
  },
});

export {styles};
