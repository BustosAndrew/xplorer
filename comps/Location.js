import { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Pressable,
	Image,
	ScrollView,
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import CheckInModal from './checkInModal'
import { lottieViews } from './LottieViews'

export const Location = ({
	name,
	location,
	description,
	xp,
	setShowLocation,
}) => {
	const [modalVisible, setModalVisible] = useState(false)
	const [image, setImage] = useState(null)

	const checkIn = async () => {
		try {
			const { status } = await ImagePicker.requestCameraPermissionsAsync()
			if (status !== 'granted') {
				alert('Camera permission denied')
				return
			}

			const result = await ImagePicker.launchCameraAsync({
				allowsEditing: true,
				aspect: [1, 1],
				quality: 1,
			})

			if (!result.canceled) {
				console.log(result)
				setImage(result.assets[0].uri)

				setModalVisible(true)
			}
		} catch (error) {
			console.error('Error capturing image:', error)
			alert('Error capturing image. Please try again.')
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.logo}>
				<Image
					source={require('../assets/planet.png')}
					style={styles.logoImage}
				/>
				<Text style={styles.logoText}>Xplore</Text>
			</View>
			<View style={styles.content}>
				<Text style={styles.visitDate}>Visiting</Text>
				<View style={styles.locationContainer}>
					<View style={styles.location}>
						<Image
							source={require('../assets/locationPin.png')}
							style={styles.pin}
						/>
						<Text style={styles.landmark}>{name}</Text>
						<Text style={styles.locationText}>{location}</Text>
					</View>
					{lottieViews[anim]}
					<Text style={styles.description}>{description}</Text>
					<View style={styles.xpEarned}>
						<Text style={styles.xpText}>Landmark XP</Text>
						<Text style={styles.xpValue}>+{xp}</Text>
					</View>
				</View>
				<View>
					<Pressable style={styles.checkInButton} onPress={checkIn}>
						<Text style={styles.buttonText}>Check In</Text>
					</Pressable>
				</View>
				<View>
					<Pressable
						style={styles.checkInButton}
						onPress={() => setShowLocation(false)}
					>
						<Text style={styles.buttonText}>Go Back</Text>
					</Pressable>
				</View>
			</View>
			{modalVisible && (
				<CheckInModal image={image} onClose={() => setModalVisible(false)} />
			)}
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#5793EC',
	},
	logo: {
		flexDirection: 'row',
		alignItems: 'center',
		position: 'relative',
		justifyContent: 'left',
	},
	logoImage: {
		width: 75,
		height: 75,
		top: 10,
		left: '72%',
	},
	logoText: {
		fontSize: 64,
		color: '#fff',
		fontFamily: 'Jura-Regular',
	},
	content: {
		paddingHorizontal: 20,
		marginTop: 30,
		marginBottom: 20,
	},
	locationContainer: {
		backgroundColor: '#003459',
		borderRadius: 30,
		padding: 20,
		marginBottom: 20,
	},
	location: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	pin: {
		width: 20,
		height: 20,
		marginRight: 10,
	},
	landmark: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FFFFFF',
	},
	locationText: {
		fontSize: 18,
		color: '#FFFFFF',
	},
	visitDate: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#FFFFFF',
		marginBottom: 16,
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
		flexDirection: 'row',
		alignItems: 'center',
	},
	xpText: {
		fontSize: 24,
		color: '#FFFFFF',
		marginRight: 10,
	},
	xpValue: {
		fontSize: 24,
		color: '#FFFFFF',
	},
	checkInButton: {
		backgroundColor: '#003459',
		borderRadius: 20,
		width: '100%',
		height: 60,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: '#FFFFFF',
		fontSize: 24,
		fontWeight: 'bold',
	},
	modalContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	capturedImage: {
		width: 150,
		height: 150,
		marginBottom: 20,
	},
	closeButton: {
		backgroundColor: '#003459',
		borderRadius: 20,
		paddingVertical: 20,
		paddingHorizontal: 20,
	},
	closeButtonText: {
		color: '#FFFFFF',
		fontSize: 16,
	},
})
