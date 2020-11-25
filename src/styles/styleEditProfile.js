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
  title: {
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
  inImage: {
    height: 90,
    width: 90,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 90,
    width: 90,
    borderRadius: 20,
  },
  containt: {
    // backgroundColor: '#a9a9a9',
    height: '80%',
    paddingVertical: 10,
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    borderBottomWidth: 1,
    margin: 5,
    borderBottomColor: '#a9a9a9',
  },
  allpact: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  edit: {
    borderWidth: 1,
    borderColor: '#ff1493',
    height: 50,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginHorizontal: 10,
  },
  textEdit: {
    fontSize: 18,
  },
});

export {styles};
