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
  },
  back: {
    height: 30,
    width: 30,
  },
  title: {
    left: 80,
    fontSize: 23,
    color: '#FFFF',
  },
  body: {
    flex: 1,
    backgroundColor: '#9400d3',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  ItemPact: {
    backgroundColor: '#FFFF',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  pactItem: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  Eximage: {
    backgroundColor: '#8fbc8f',
    height: 80,
    width: 80,
    borderRadius: 10,
  },
  titleItem: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#a9a9a9a9',
  },
  ceterangan: {
    width: 270,
    // borderWidth: 1,
    flexWrap: 'wrap',
    left: 20,
  },
  text: {
    fontSize: 17,
    marginBottom: 5,
  },
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {height: 80, width: 80},
  textChekOut: {
    fontSize: 15,
    color: '#FFFF',
  },
  chekOut: {
    backgroundColor: '#00bfff',
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
});

export {styles};
