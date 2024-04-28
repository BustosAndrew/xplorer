import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
} from 'react-native'
import { useState } from 'react'
import { useFonts } from 'expo-font'

const VisitDetails = ({ landmark, location, date, description, xp, mapImage, logoImage }) => {

    const checkIn = () => {
		console.log('Check in pressed!')
	}

  return (
	<ScrollView contentContainerStyle = {styles.container}>
		<View marginTop = {33} style={styles.logo}>
			<Image source={require('../assets/planet.png')} style={styles.logoImage} />
			<Text style={styles.logoText}>Xplore</Text>
		</View>
		<View style={styles.content}>
			<Text style={styles.visitDate}>Visiting</Text>
			<View style = {styles.locationContainer}>
				<View style = {styles.location}>
					<Image source = {require('../assets/locationPin.png')} style = {styles.pin}/>
					<Text style={styles.landmark}>{landmark}</Text>
					<Text style={styles.location}>{location}</Text>
				</View>       
				<Image source={mapImage} style={styles.mapImage}/>
				<Text style={styles.description}>{description}</Text>
				<View style={styles.xpEarned}>
					<Text style={styles.xpText}>Landmark XP</Text>
					<Text style={styles.xpValue}>+{xp}</Text>
				</View>
			</View>
			<View>
				<Pressable style={styles.checkInButton} onPress={checkIn}>
					<Text style={styles.buttonText}>{'Check In'}</Text>
					<Image source = {require('../assets/pinRed.png')}style = {styles.pinRed}/>
				</Pressable>
			</View>
		</View>
	</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5793EC',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoImage: {
    width: 75,
    height: 75,
    top: 7,
    left: '30%',
    marginLeft: 20,
  },
  logoText: {
    fontSize: 64,
    color: '#fff',
    zIndex: 2,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  locationContainer: {
	backgroundColor: '#003459',
	borderRadius: 30,
  },
  landmark: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  location: {
    fontSize: 20,
    fontWeight: 'bold',
	marginTop: 29,
    color: '#FFFFFF',
  },
  pin: {
	marginTop: 34,
	marginLeft: 87,
  },
  visitDate: {
    fontSize: 32,
	fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
	marginLeft: 18,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#FFFFFF',
	fontWeight: 'bold',
    lineHeight: 22,
    marginBottom: 10,
  },
  xpEarned: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  xpText: {
    fontSize: 32,
    color: '#FFFFFF',
    marginRight: 10,
  },
  xpValue: {
    fontSize: 32,
    color: '#FFFFFF',
	marginBottom: 34,
  },
  checkInButton: {
	flexDirection: 'row',
    backgroundColor: '#003459',
    borderRadius: 20,
	width: 328,
	height: 64,
    paddingVertical: 7,
	marginLeft: 20,
	marginTop: 29,
	marginBottom: 40,
	justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 32,
    textAlign: 'center',
  },
  pinRed: {
	width: 30,
	height: 30,
	marginTop: 8,
	marginLeft: 8,
  },
});

export default VisitDetails;
