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
});
export {styles};
