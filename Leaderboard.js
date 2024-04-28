import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require('./assets/profileAvatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Marty McFly</Text>
        <Text style={styles.location}>Hill Valley, California</Text>
      </View>
      <View>
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
});
