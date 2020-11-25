import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ff1493',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  back: {
    height: 30,
    width: 30,
    // borderWidth: 1,
  },
  titleDashboard: {
    fontSize: 25,
    color: '#FFFFFF',
    right: 140,
  },
  Profile: {
    height: 100,
    backgroundColor: '#ff1493',
    flexDirection: 'row',
    paddingLeft: 30,
    alignItems: 'center',
  },
  photo: {
    height: 70,
    width: 70,
    borderWidth: 1,
    marginRight: 5,
  },
  titleStore: {
    height: 50,
    width: 250,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  all: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginVertical: 10,
  },
  allIcon: {
    backgroundColor: '#ff1493',
    height: 185,
    width: 185,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 120,
    width: 120,
  },
});

export {styles};
