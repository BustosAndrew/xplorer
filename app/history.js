import { useState, useEffect } from 'react'
import {
	View,
	Text,
	TextInput,
	Button,
	StyleSheet,
	Pressable,
	Image,
} from 'react-native'

export const LoginPage = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fontsLoaded, setFontsLoaded] = useState(false)

	const handleSignIn = () => {
		console.log('Sign In pressed!')
		// Implement your sign in logic here
	}

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.title}>Xplore</Text>
				<Text style={styles.subTitle}>History</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text style={styles.infoText}>Visited: 04/27/2024</Text>
				<Text style={styles.infoText}>XP: 100</Text>
			</View>
			<View style={styles.imageContainer}>
				{/* <Image
					source={require('../assets/arc_pavilion.png')}
					style={styles.image}
				/> */}
			</View>
			{fontsLoaded && ( // Conditionally render elements that use Jura font (if applicable)
				<View style={styles.inputContainer}>
					<Text style={styles.inputText}>Email</Text>
					<TextInput
						style={styles.inputField}
						value={email}
						onChangeText={setEmail}
						placeholder='Email'
						autoCapitalize='none'
					/>
					<Text style={styles.inputText}>Password</Text>
					<TextInput
						style={styles.inputField}
						value={password}
						onChangeText={setPassword}
						placeholder='Password'
						secureTextEntry={true}
					/>
				</View>
			)}
			<View style={styles.buttonContainer}>
				<Pressable style={styles.signInButton} onPress={handleSignIn}>
					<Text style={styles.buttonText}>Sign In</Text>
				</Pressable>
				<Pressable style={styles.signUpButton} onPress={handleSignIn}>
					<Text style={styles.buttonText}>Sign Up</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5793E2',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	headerContainer: {
		marginBottom: 20,
	},
	title: {
		fontSize: 64,
		color: '#FFFFFF',
		// Use Jura font if you've integrated it (refer to font loading section)
	},
	subTitle: {
		fontSize: 32,
		color: '#FFFFFF',
		// Use Jura font if you've integrated it (refer to font loading section)
	},
	infoContainer: {
		marginBottom: 20,
	},
	infoText: {
		fontSize: 16,
		color: '#FFFFFF',
		marginBottom: 5,
	},
	imageContainer: {
		marginBottom: 20,
	},
	image: {
		width: 200,
		height: 200,
		borderRadius: 10,
	},
	inputContainer: {
		marginBottom: 40,
	},
	inputText: {
		fontSize: 20,
		color: '#FFFFFF',
		marginBottom: 10,
	},
})
