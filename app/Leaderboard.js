
import { useState, useEffect } from 'react'
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
import { useFonts } from 'expo-font'


export default function Leaderboard() {
	const [fontsLoaded, fontError] = useFonts({
		'Jura-Regular': require('../assets/fonts/Jura-Regular.ttf'),
	})

	if (!fontsLoaded && !fontError) {
		return null
	}
	const users = [
		{ rank: 1, name: 'Doc Brown', points: 19840 },
		{ rank: 2, name: 'Marty McFly', points: 18200 },
		{ rank: 3, name: 'Heisenberg', points: 17000 },
		{ rank: 4, name: 'Dr Luke', points: 16027 },
		{ rank: 5, name: 'Lucy MacLean', points: 15039 },
	  ];
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
			<Image source={require('../assets/earth.png')} style={styles.world} />
				<Text style={styles.title}>Leaderboard</Text>
			</View>
			<ScrollView style={styles.listContainer}>
			<View style = {styles.wrapper}>
				<Text style = {styles.categoryRank}>Rank</Text>
				<Text style = {styles.categoryPoints}>Points</Text>
			</View>
		<View>
			{users.map((user,index) => <View style={styles.wrapper}>
            <View key={index} style={styles.insideContainer}>
			 <Text style={styles.userText}>{user.rank}</Text>
			 <Text style={styles.userText}>{user.name}</Text>
			 <Text style={styles.userText}>{user.points}</Text>
			</View>
          </View>)}
        </View>
      </ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5793E2',
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
	  },
	  listContainer: {
		backgroundColor: '#C4C4C4',
		marginTop: 20,
		marginLeft: 20,
		marginRight: 20,
		borderRadius: 10,
	  },
	  insideContainer: {
		backgroundColor: '#E55934',
		width: '90%',
		height: 100,
		marginTop: 20,
		marginRight: 20,
		marginLeft: 20,
		paddingHorizontal: 20,
		alignItems: 'center',
		justifyContent: 'space-between',
		borderRadius: 10,
		display: 'flex',
		flexDirection: 'row',
		shadowColor: '#000',
		elevation: 10,
	  },
	  categoryRank:{	
		fontSize: 24,
		padding: 10,
		marginLeft: 15,
		fontFamily: 'Jura-Regular',

	  },
	  categoryPoints:{	
		fontSize: 24,
		padding: 10,
		marginLeft: '48%',
		fontFamily: 'Jura-Regular',


	  },
	  userText: {
		fontSize: 24,
		fontFamily: 'Jura-Regular',

	  },
	title: {
		paddingTop: 30,
		fontSize: 32,
		color: '#fff',
		textAlign: 'center',
		fontFamily: 'Jura-Regular',

	},
	world:{
		marginTop: 40,
		marginLeft: 55,
		marginRight: 15,
		height: 47,
		width: 47,
	},
})
