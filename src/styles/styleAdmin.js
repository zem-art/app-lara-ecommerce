import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#ff1493',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  titleDashboard: {
    fontSize: 25,
    color: '#FFFFFF',
  },
  all: {
    flexDirection: 'row',
    marginHorizontal: 6,
    marginVertical: 10,
  },
  allIcon: {
    backgroundColor: '#ff1493',
    height: 190,
    width: 190,
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 5,
    alignItems: 'center',
  },
  icon: {
    height: 120,
    width: 120,
  },
});

export {styles};
