import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#ff1493',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  back: {
    height: 30,
    width: 30,
  },
  title: {
    fontSize: 25,
    color: '#FFF',
    // borderWidth: 1,
  },
  troli: {
    height: 30,
    width: 35,
    // marginLeft: 70,
  },
  nameItem: {
    flexDirection: 'row',
    //padding: 0,
  },
  body: {
    backgroundColor: '#9f9393bf',
    height: 270,
    width: 190,
    margin: 8,
    borderRadius: 5,
    padding: 7,
  },
  product: {
    padding: 7,
    backgroundColor: '#FFFF',
    height: 255,
    borderRadius: 5,
  },
  Image: {
    height: 110,
    width: 155,
    //borderWidth: 1,
    marginVertical: 3,
    borderRadius: 5,
  },
  name: {
    // borderWidth: 1,
    width: 155,
    marginVertical: 3,
    textAlign: 'center',
    fontSize: 12,
  },
  price: {
    // borderWidth: 1,
    width: 155,
    marginVertical: 3,
    textAlign: 'left',
    fontSize: 12,
  },
  stock: {
    width: 155,
    marginVertical: 3,
    textAlign: 'left',
    fontSize: 12,
  },
  Rating: {
    // borderWidth: 1,
    width: 155,
    marginVertical: 3,
    textAlign: 'right',
    fontSize: 12,
  },
});

export {styles};
