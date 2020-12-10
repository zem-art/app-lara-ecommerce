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
    height: '13%',
  },
  search: {
    backgroundColor: '#FFFFFF',
    height: 45,
    width: '70%',
    borderRadius: 20,
    paddingLeft: 50,
    left: '3%',
    marginTop: 8,
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
    top: -35,
    right: 60,
    // borderWidth: 1,
  },
  iconTroli: {
    height: 27,
    width: 27,
  },
  Mesengger: {
    // borderWidth: 1,
    alignSelf: 'flex-end',
    top: -60,
    right: 10,
    // borderWidth: 1,
  },
  iconMesengger: {
    height: 27,
    width: 27,
  },
  iklan: {
    backgroundColor: '#8a2be2',
    height: 200,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: '20%',
    marginBottom: 5,
  },
  category: {
    flexDirection: 'row',
  },
  inCategory: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 20,
    height: '75%',
    width: '14%',
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 5,
    justifyContent: 'center',
  },
  iconCategory: {
    height: '40%',
    width: '40%',
    marginBottom: 5,
  },
  titleIcon: {
    fontSize: 12,
  },
  nameItem: {
    // flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 5,
    // flex: 1,
    backgroundColor: 'yellow',
  },
  body: {
    backgroundColor: '#9f9393bf',
    height: 160,
    width: '80%',
    margin: 5,
    borderRadius: 5,
    padding: 7,
    justifyContent: 'center',
    borderWidth: 1,
  },
  product: {
    padding: 5,
    backgroundColor: '#FFFF',
    borderRadius: 5,
    height: '100%',
    justifyContent: 'center',
  },
  Image: {
    height: 50,
    width: '50%',
    borderWidth: 1,
    marginVertical: 3,
  },
  name: {
    // borderWidth: 1,
    width: '100%',
    marginVertical: 3,
    textAlign: 'center',
    fontSize: 11,
  },
  price: {
    // borderWidth: 1,
    fontSize: 11,
  },
  stock: {
    width: 155,
    marginVertical: 3,
    textAlign: 'left',
    fontSize: 12,
  },
  Rating: {
    flexDirection: 'row',
    height: 30,
    width: '40%',
    borderWidth: 1,
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  stars: {
    height: 20,
    width: 20,
    right: 5,
  },
});

export {styles};
