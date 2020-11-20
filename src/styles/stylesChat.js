import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ff1493',
    height: 65,
    flexDirection: 'row',
    paddingHorizontal: 10,
    //borderWidth: 1,
    alignItems: 'center',
  },
  titleCart: {
    //borderWidth: 1,
    fontSize: 25,
    color: '#FFFF',
    left: 10,
  },
  exback: {
    //borderWidth: 1,
    margin: 9,
  },
  back: {
    height: 30,
    width: 30,
  },
  pactItem: {
    backgroundColor: '#6495ed',
    height: 637,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    height: 130,
    borderRadius: 5,
  },
  titleStore: {
    fontSize: 20,
    backgroundColor: '#c5babab8',
    textAlign: 'center',
    height: 30,
  },
  Row: {
    flexDirection: 'row',
  },
  inItem: {
    backgroundColor: '#a9a9a9',
    height: 80,
    width: 95,
    marginHorizontal: 15,
    marginTop: 9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItems: {
    fontSize: 20,
    marginTop: 15,
  },
  pactChekout: {
    backgroundColor: '#ff1493',
    height: 65,
  },
  exChekOut: {},
  chekOut: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textChekOut: {
    fontSize: 15,
  },
});

export {styles};
