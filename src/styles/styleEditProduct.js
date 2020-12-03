import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ff1493',
    paddingVertical: 13,
    paddingHorizontal: 20,
  },
  back: {
    height: 30,
    width: 30,
  },
  title: {
    top: 3,
    color: '#FFFF',
    fontSize: 23,
    left: 50,
  },
  pactImage: {
    height: 180,
    backgroundColor: '#8a2be2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exImage: {
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    paddingLeft: 5,
    marginVertical: 5,
  },
  pacthClick: {
    flexDirection: 'row',
    alignSelf: 'center',
    // borderWidth: 1,
  },
  delete: {
    borderWidth: 1,
    height: 70,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#ff1493',
  },
  edit: {
    borderWidth: 1,
    height: 70,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    borderRadius: 10,
    marginTop: 15,
    backgroundColor: '#ff1493',
  },
  text: {
    fontSize: 18,
    color: '#ffffff',
  },
});

export {styles};
