import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbdbd',
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    color: '#FFFF',
    alignSelf: 'center',
    top: 20,
  },
  header: {
    // backgroundColor: '#6495ed',
    backgroundColor: '#ff1493',
    height: 280,
    //borderWidth: 1,
    marginBottom: 2,
  },
  settingClik: {
    //borderWidth: 1,
    right: 10,
    top: 22,
    width: 50,
    alignSelf: 'flex-end',
  },
  setting: {
    height: 30,
    width: 30,
  },
  exSign: {
    flexDirection: 'row',
    //borderWidth: 1,
    position: 'absolute',
    marginTop: 25,
    alignSelf: 'flex-end',
    right: 90,
  },
  sign: {
    borderBottomWidth: 1,
    borderBottomColor: '#bdbdbdbd',
    marginHorizontal: 13,
  },
  inHeader: {
    // borderWidth: 1,
    // marginVertical: 20,
    marginVertical: 10,
    height: 150,
    // height: 80,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  profil: {
    height: 60,
    width: 60,
    borderRadius: 15,
  },
  textProfile: {
    paddingLeft: 15,
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  component: {
    flexDirection: 'row',
    alignSelf: 'center',
    //borderWidth: 1,
  },
  component1: {
    marginHorizontal: 25,
    alignItems: 'center',
  },
  text: {
    fontSize: 17,
    color: '#FFFF',
    marginBottom: 5,
  },
  order: {
    height: 120,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    paddingHorizontal: 4,
    flexDirection: 'row',
    marginTop: 4,
  },
  cart: {
    alignItems: 'center',
    marginHorizontal: 24,
  },
  inCart: {
    height: 50,
    width: 50,
  },
  credit: {
    backgroundColor: '#FFFFFF',
    height: 130,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    // borderWidth: 1,
  },
  inCredit: {
    paddingHorizontal: 35,
    alignItems: 'center',
    backgroundColor: '#6495ed',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
    // borderWidth: 1,
  },
  text1: {
    bottom: 50,
    left: 10,
    fontWeight: 'bold',
    fontSize: 15,
    // borderWidth: 1,
    marginRight: 60,
  },

  text2: {
    fontSize: 17,
    color: '#FFFF',
  },
  text3: {
    color: '#bdbdbdbd',
    fontSize: 17,
  },
  login: {
    alignSelf: 'center',
    left: 15,
    backgroundColor: 'red',
    height: 50,
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textLogin: {
    fontSize: 15,
    color: '#FFFF',
  },
  textAtention: {
    left: 100,
  },
  office: {
    backgroundColor: '#FFFFFF',
    height: 250,
    marginTop: 7,
  },
  text4: {
    left: 10,
    top: 3,
    fontWeight: 'bold',
    fontSize: 15,
  },
  inOffice: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});

export {styles};
