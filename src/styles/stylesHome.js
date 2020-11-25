import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#ff1493',
    height: 60,
  },
  search: {
    backgroundColor: '#FFFFFF',
    height: 45,
    width: 285,
    borderRadius: 20,
    paddingLeft: 50,
    //alignSelf: 'center',
    left: 20,
    marginTop: 8,
    // borderWidth: 1,
  },
  iconSearch: {
    height: 20,
    width: 20,
    position: 'absolute',
    alignSelf: 'flex-start',
    left: 35,
    top: 22,
  },
  Troli: {
    // borderWidth: 1,
    alignSelf: 'flex-end',
    top: -38,
    right: 60,
    // borderWidth: 1,
  },
  iconTroli: {
    height: 30,
    width: 30,
  },
  Mesengger: {
    // borderWidth: 1,
    alignSelf: 'flex-end',
    top: -68,
    right: 10,
    // borderWidth: 1,
  },
  iconMesengger: {
    height: 30,
    width: 30,
  },
  iklan: {
    backgroundColor: '#8a2be2',
    height: 200,
    marginBottom: 5,
  },
  titleCategory: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    //borderWidth: 1,
    backgroundColor: '#d3d3d3',
  },
  Menu: {
    // backgroundColor: '#8a2be2',
    //borderWidth: 1,
    backgroundColor: '#ff1493',
    height: 180,
    marginBottom: 5,
    //paddingLeft: 10,
  },
  category: {
    flexDirection: 'row',
  },
  inCategory: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 20,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 5,
  },
  iconCategory: {
    height: 60,
    width: 60,
    marginBottom: 2,
  },
  titleIcon: {
    fontSize: 12,
  },
  flet: {
    borderWidth: 1,
    height: 290,
  },
  nameItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //flex: 1,
  },
  body: {
    backgroundColor: '#9f9393bf',
    height: 270,
    width: 189.7,
    margin: 8,
    borderRadius: 5,
    padding: 7,
  },
  product: {
    padding: 5,
    backgroundColor: '#FFFF',
    height: 255,
    borderRadius: 5,
  },
  Image: {
    height: 110,
    width: 155,
    borderWidth: 1,
    marginVertical: 3,
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
    alignSelf: 'flex-end',
    marginVertical: 3,
    textAlign: 'right',
    fontSize: 12,
  },
});

export {styles};
