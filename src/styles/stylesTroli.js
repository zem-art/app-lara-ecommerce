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
    justifyContent: 'space-between',
  },
  iconMenu: {
    height: 40,
    width: 20,
  },
  exMenu: {
    // borderWidth: 1,
    right: 10,
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
    // height: 573,
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    height: 150,
    borderRadius: 10,
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
    height: 90,
    width: 90,
    marginHorizontal: 15,
    marginTop: 9,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 90,
    width: 90,
    borderRadius: 10,
  },
  textItems: {
    fontSize: 15,
    position: 'absolute',
    left: 190,
    top: 40,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttom: {
    top: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // borderWidth: 1,
    height: 50,
    width: 240,
    alignItems: 'center',
  },
  rating: {
    // borderWidth: 1,
    height: 50,
    width: 50,
  },
  price: {
    // borderWidth: 1,
    height: 50,
    width: 50,
  },
  amount: {
    // borderWidth: 1,
    height: 50,
    width: 50,
  },
  exTrash: {
    // borderWidth: 1,
    height: 50,
    width: 50,
    top: 100,
  },
  trash: {
    height: 40,
    width: 30,
  },
  pactChekout: {
    backgroundColor: '#ff1493',
    height: 65,
  },
  exChekOut: {},
  chekOut: {
    backgroundColor: '#9400d3',
    alignSelf: 'flex-end',
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  textChekOut: {
    fontSize: 15,
    color: '#FFFF',
  },
  textcheckOut: {
    textAlign: 'center',
  },
});

export {styles};
