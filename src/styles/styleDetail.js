import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'blue',
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
  },
  textBuy: {
    fontSize: 17,
    color: 'blue',
  },
  cart: {
    height: 50,
    width: 220,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    //  borderWidth: 1,
  },
  textCart: {
    fontSize: 17,
    color: '#FFFFFF',
  },
});

export {styles};
