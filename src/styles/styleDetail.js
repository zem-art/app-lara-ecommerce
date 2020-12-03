import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#ff1493',
    height: 55,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },

  exHeader: {
    alignSelf: 'flex-start',
  },
  iconHeader: {
    height: 25,
    width: 25,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    height: 300,
    //borderWidth: 1,
    marginBottom: 10,
  },
  items: {
    paddingHorizontal: 10,
  },
  name: {
    alignSelf: 'flex-start',
    height: 50,
    //borderWidth: 1,
    fontSize: 30,
  },
  combine1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    height: 50,
    //borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  category: {
    fontSize: 15,
  },
  price: {
    fontSize: 20,
  },
  combine: {
    alignItems: 'center',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    height: 50,
    //borderWidth: 1,
  },
  stock: {
    fontSize: 15,
  },
  discount: {
    fontSize: 15,
  },
  total: {
    fontSize: 15,
  },
  rating: {
    //borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    marginBottom: 10,
  },
  description: {
    //borderWidth: 1,
    height: 50,
    justifyContent: 'center',
  },
  buy: {
    backgroundColor: '#FFFF',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  chat: {
    height: 37,
    width: 37,
  },
  Buy: {
    height: 50,
    width: 80,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9400d3',
  },
  textBuy: {
    fontSize: 17,
    color: '#9400d3',
  },
  cart: {
    height: 50,
    width: 220,
    backgroundColor: '#ff1493',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    //  borderWidth: 1,
  },
  textCart: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  back: {
    backgroundColor: 'black',
    // borderWidth: 1,
    height: 500,
    opacity: 0.0,
  },
  pactModal: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  inModal: {
    backgroundColor: '#9400d3',
    height: 150,
    width: 400,
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    // justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'row',
    marginBottom: 10,
  },
  imageModal: {
    borderWidth: 1,
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  imageModal1: {
    borderWidth: 1,
    height: 80,
    width: 80,
    alignSelf: 'center',
    borderRadius: 10,
  },
  item: {
    left: 20,
  },
  addChart: {
    height: 50,
    width: 380,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  MinMax: {
    flexDirection: 'row',
    marginTop: 7,
  },
  MiM: {
    borderWidth: 1,
    marginLeft: 4,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFFFFF',
    borderRadius: 10,
  },
  text: {
    color: '#FFFF',
    fontSize: 20,
    // margin: 10,
  },
  text1: {
    // left: 30,
    color: '#FFFF',
    fontSize: 20,
  },
  text2: {
    // left: 40,
    color: '#FFFF',
    fontSize: 20,
  },
  text3: {
    color: '#FFFF',
    fontSize: 20,
    marginHorizontal: 18,
  },
  textBuyModal: {
    fontSize: 15,
  },
  input: {
    marginRight: 10,
    marginLeft: 10,
    paddingTop: 10,
    backgroundColor: '#FFFF',
    height: 45,
    width: 45,
    borderRadius: 5,
  },
});

export {styles};
