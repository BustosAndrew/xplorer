import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require('./assets/profileAvatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Marty McFly</Text>
        <View style={styles.wrapper}>
          <Text style={styles.location}>Hill Valley, California</Text>
          <Image source={require('./assets/pinIcon.png')} style={styles.pinIcon} />
        </View>
        <Text style={styles.levelText}>Level 5</Text>
      </View>
      <View style={styles.levelBackground}>
        <Text style={styles.level}></Text>
      </View>
      <View>
        <Text>Achievements!</Text>
      </View>
      <View style={styles.listContainer}>
        <View>
          <View style={styles.wrapper}>
            <Image source={require('./assets/circle1.png')} style={styles.circles} />
            <Text style={styles.insideContainer}>This belongs in a museum!</Text>
          </View>
          <View style={styles.wrapper}>
            <Image source={require('./assets/circle2.png')} style={styles.circles} />
            <Text style={styles.insideContainer}>Mr Worldwide</Text>
          </View>
          <View style={styles.wrapper}>
            <Image source={require('./assets/circle3.png')} style={styles.circles} />
            <Text style={styles.insideContainer}>Around the World in 80 Days</Text>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5793E2',
  },
  profile: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIcon: {
    width: 22,
    height: 23,
  },
  circles: {
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
    width: 47,
    height: 47,
  },
  name: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    color: '#fff',
    fontSize: 24,
    marginTop: 5,
  },
  level: {
    backgroundColor: '#E55934',
    borderRadius: 10,
    marginRight: 100,
    height: 20,
  },
  levelBackground: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 20,
  },
  levelText: {
    color: '#E55934',
    fontSize: 24,
    marginTop: 15,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  listContainer: {
    backgroundColor: '#fff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  insideContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
  },
  achievementTitle: {

  }
});
