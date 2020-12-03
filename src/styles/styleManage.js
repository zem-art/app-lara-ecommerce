import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: '#ff1493',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    // borderBottomWidth: 1,
    // borderBottomColor: '#a9a9a9',
  },
  back: {
    height: 35,
    width: 35,
  },
  titleDashboard: {
    fontSize: 23,
    color: '#FFFF',
    left: 90,
  },
  image: {
    backgroundColor: '#9400d3',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#9400d3',
    flex: 1,
    paddingLeft: 5,
    paddingVertical: 10,
  },
  pactItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  product: {
    backgroundColor: '#FFFF',
    height: 250,
    width: '47%',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 5,
  },
  inProduct: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    alignItems: 'center',
    marginBottom: 2,
    borderRadius: 10,
  },
  item: {
    height: 140,
    width: 150,
  },
  name: {
    textAlign: 'center',
  },
  stars: {
    height: 20,
    width: 20,
  },
  price: {
    fontSize: 14,
    top: 5,
  },
  stock: {
    fontSize: 14,
    top: 5,
  },
  pactRating: {
    top: 5,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    right: 10,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
export {styles};
