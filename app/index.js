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
import { useFonts } from 'expo-font'

const App = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [fontsLoaded, fontError] = useFonts({
		'Jura-Regular': require('../assets/fonts/Jura-Regular.ttf'),
	})

	if (!fontsLoaded && !fontError) {
		return null
	}

	const handleSignIn = () => {
		console.log('Sign In pressed!')
	}

	return (
		<View style={styles.container}>
			<View style={styles.titleContainer}>
				<Image src={'../assets/planet.png'} style={styles.planet} />
				<Text style={styles.title}>Xplore</Text>
			</View>
			<Text style={styles.subTitle}>Blaze your trail!</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Email</Text>
				<TextInput
					style={styles.input}
					value={email}
					onChangeText={setEmail}
					placeholder='Email'
					autoCapitalize='none'
				/>
				<Text style={styles.forgotUserText}>Forgot user?</Text>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputTitle}>Password</Text>
				<TextInput
					style={styles.input}
					value={password}
					onChangeText={setPassword}
					placeholder='Password'
					secureTextEntry={true}
				/>
				<Text style={styles.forgotPasswordText}>Forgot password?</Text>
			</View>
			<View>
				<Pressable style={styles.signInButton} onPress={handleSignIn}>
					<Text style={styles.buttonText}>{'Sign In'}</Text>
				</Pressable>
			</View>
			<View>
				<Pressable style={styles.signUpButton} onPress={handleSignIn}>
					<Text style={styles.buttonText}>{'Sign Up'}</Text>
				</Pressable>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#5793E2',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	title: {
		fontSize: 64,
		paddingTop: 90,
		color: '#FFFFFF',
		fontWeight: 'medium',
	},
	planet: {
		width: 50,
		height: 50,
	},
	subTitle: {
		fontSize: 32,
		paddingTop: 68,
		color: '#FFFFFF',
		fontWeight: 'medium',
		marginBottom: 38,
	},
	inputTitle: {
		fontSize: 24,
		color: '#FFFFFF',
		fontWeight: 'medium',
		marginBottom: 8,
	},
	input: {
		height: 64,
		width: 328,
		marginBottom: 12,
		borderRadius: 20,
		backgroundColor: '#FFFFFF',
		borderWidth: 2,
		shadowRadius: 10,
		shadowColor: '#000000',
		borderWidth: 1,
		paddingLeft: 20,
	},
	forgotPasswordText: {
		fontSize: 12,
		textAlign: 'left',
		color: '#FFFFFF',
	},
	forgotUserText: {
		fontSize: 12,
		textAlign: 'left',
		color: '#FFFFFF',
		marginBottom: 22,
	},
	signInButton: {
		width: 328,
		height: 64,
		backgroundColor: '#003459',
		color: '#FFFFFF',
		justifyContent: 'center',
		marginTop: 74,
		borderRadius: 20,
		marginBottom: 30,
		borderColor: '#000000',
	},
	signUpButton: {
		backgroundColor: '#003459',
		color: '#FFFFFF',
		width: 328,
		height: 64,
		justifyContent: 'center',
		borderRadius: 20,
		marginBottom: 30,
	},
	buttonText: {
		textAlign: 'center',
		fontFamily: 'Jura-Regular',
		fontSize: 32,
		color: '#FFFFFF',
	},
})

export default App
