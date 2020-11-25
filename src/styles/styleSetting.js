import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: 'yellow',
    paddingTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  back: {
    height: 30,
    width: 30,
  },
  text: {
    fontSize: 20,
    marginLeft: 30,
  },
  body: {
    backgroundColor: '#a9a9a9',
    flex: 1,
    // paddingHorizontal: 20,
  },
  titleAccount: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text1: {
    fontSize: 20,
    opacity: 0.5,
  },
  account: {
    height: 240,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  account1: {
    height: 160,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
  },
  allPact: {
    height: 60,
    // backgroundColor: '#7fff00',
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  text2: {
    fontSize: 19,
  },
  arrow: {
    height: 40,
    width: 40,
  },
  logOuth: {
    backgroundColor: 'yellow',
    height: 70,
    width: 150,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 10,
  },
  textend: {
    fontSize: 20,
  },
});

export {styles};
