import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require('./assets/profileAvatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Marty McFly</Text>
        <View style={styles.locationWrapper}>
          <Text style={styles.location}>Hill Valley, California</Text>
          <Image source={require('./assets/pinIcon.png')} style={styles.pinIcon} />
        </View>
        <Text style={styles.levelText}>Level 5</Text>
      </View>
      <View style={styles.levelBackground}>
        <Text style={styles.level}></Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listContainer}>This belongs in a museum!</Text>
        <Text style={styles.listContainer}>Mr Worldwide</Text>
        <Text style={styles.listContainer}>Around the World in 80 Days</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitle}>Leaderboard</Text>
        <Text style={styles.listTitle}>Location Sharing</Text>
        <View style={styles.toggleContainer}>
          <Text style={styles.toggleText}>Enable</Text>
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
  locationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinIcon: {
    width: 22,
    height: 23,
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
    padding: 20,
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  toggleText: {
    fontSize: 16,
    color: '#ffc107',
  },
});
