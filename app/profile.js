import { useState, useEffect } from 'react'
import { useFonts } from 'expo-font'
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	Image,
} from 'react-native'



export default function Profile() {
    const [fontsLoaded, fontError] = useFonts({
		'Jura-Regular': require('../assets/fonts/Jura-Regular.ttf'),
	})

	if (!fontsLoaded && !fontError) {
		return null
	}
  const leadRout = () => {
    console.log('Leaderboard pressed!');
  };
  const enabler = () => {
    console.log('Enabler pressed!');
  };
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require('../assets/profileAvatar.png')} style={styles.avatar} />
        <Text style={styles.name}>Marty McFly</Text>
        <View style={styles.wrapper}>
          <Text style={styles.location}>Hill Valley, California </Text>
          <Image source={require('../assets/pinIcon.png')} style={styles.pinIcon} />
        </View>
        <Text style={styles.levelText}>Level 5</Text>
      </View>
      <View style={styles.levelBackground}>
        <Text style={styles.level}></Text>
      </View>
      <View>
        <Text style={styles.achievementTitle}>Achievements</Text>
      </View>
      <View style={styles.listContainer}>
        <View>
          <View style={styles.wrapper}>
            <Image source={require('../assets/circle1.png')} style={styles.circles} />
            <Text style={styles.insideContainer}>This belongs in a museum!</Text>
          </View>
          <View style={styles.wrapper}>
            <Image source={require('../assets/circle2.png')} style={styles.circles} />
            <Text style={styles.insideContainer}>Mr Worldwide</Text>
          </View>
          <View style={styles.wrapper}>
            <Image source={require('../assets/circle3.png')} style={styles.circles} />
            <Text style={styles.insideContainer}>Around the World in 80 Days</Text>
          </View>
        </View>
      </View>
      <View>
        <Pressable style={styles.leaderButton} onPress={leadRout}>
          <Text style={styles.buttonText}>{"Leaderboards"}</Text>
        </Pressable>
      </View>
      <View>
        <Text style={styles.locSharing}>Location Sharing</Text>
      </View>
      <View>
        <Pressable style={styles.enablerButton} onPress={enabler}>
          <Text style={styles.buttonText}>{"Enable"}</Text>
        </Pressable>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5793E2',
	fontFamily: 'Jura-Regular',
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
    marginTop: 10,
	fontFamily: 'Jura-Regular',
  },
  location: {
    color: '#fff',
    fontSize: 24,
    marginTop: 5,
	fontFamily: 'Jura-Regular',
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
    marginRight: 270,
	fontFamily: 'Jura-Regular',
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
    fontSize: 32,
    color: '#fff',
    marginTop: 15,
    marginLeft: 20,
	fontFamily: 'Jura-Regular',
  },
  locSharing: {
    fontSize: 20,
    color: '#fff',
    marginTop: 15,
    marginLeft: 40,
	fontFamily: 'Jura-Regular',
  },
  leaderButton: {
    width: 328,
    height: 64,
    marginTop: 15,
    marginLeft: 35,
    backgroundColor: '#003459',
    color: '#FFFFFF', 
    borderRadius: 20, 
    justifyContent: 'center',
  },
  enablerButton: {
    backgroundColor: '#003459',
    color: '#FFFFFF',
    marginTop: 15,
    marginLeft: 35,
    width: 328,
    height: 64,
    borderRadius: 20, 
    justifyContent: 'center',
  },
  buttonText:{
    color: '#fff',
    fontSize: 32,
	marginBottom: 10,
    textAlign: 'center',
	fontFamily: 'Jura-Regular',
  },
  
});