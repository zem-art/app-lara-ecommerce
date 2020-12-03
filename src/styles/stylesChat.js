import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textcheckOut: {
    textAlign: 'center',
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
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
    paddingLeft: 15,
  },
  inItem: {
    backgroundColor: '#a9a9a9',
    height: 60,
    width: 50,
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItems: {
    fontSize: 20,
    marginTop: 15,
    paddingLeft: 10,
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
  Inimage: {
    height: 80,
    width: 80,
    borderRadius: 10,
  },
});

export {styles};
