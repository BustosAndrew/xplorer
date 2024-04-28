import { useEffect, useState, useContext } from 'react'
import {
	View,
	Text,
	StyleSheet,
	FlatList,
	Image,
	Pressable,
} from 'react-native'
import { AuthContext } from '../../firebase/AuthProvider'
import { FirebaseContext } from '../../firebase/FirebaseProvider'
import { doc, getDoc } from 'firebase/firestore'
import { Location } from '../../comps/Location'

const HistoryPage = () => {
	const [historyData, setHistoryData] = useState([])
	const [showLocation, setShowLocation] = useState(false)
	const [info, setInfo] = useState({})
	const { user } = useContext(AuthContext)
	const { myFS } = useContext(FirebaseContext)

	useEffect(() => {
		const fetchInfo = async () => {
			const userDocRef = doc(myFS, 'users', user.uid)
			const userDocSnap = await getDoc(userDocRef)
			const userData = userDocSnap.data()
			const userLocations = userData.locations
			const userXp = userData.xp
			const history = userLocations.map((location) => {
				return {
					name: location.locationName,
					date: location.time,
					xp: userXp,
					description: location.message,
					anim: location.animation,
					location: location.location || 'Unknown',
					id: location.id,
				}
			})
			setHistoryData(history)
		}
		if (user) {
			fetchInfo()
		}
	}, [user])

	const renderHistoryItem = ({ item }) => {
		return (
			<View style={styles.historyItem}>
				<View style={styles.historyItemInfo}>
					<View style={styles.locationText}>
						<Text style={styles.historyItemLocation}>{item.location}</Text>
					</View>
					<View style={styles.rowContainer}>
						<Text style={styles.flexStart}>{item.date?.toString()}</Text>
						<Text style={styles.flexEnd}>XP: {item.xp}</Text>
					</View>
					<Pressable
						onPress={() => {
							setInfo(item)
							setShowLocation(true)
						}}
					>
						<Text>View Location</Text>
					</Pressable>
				</View>
			</View>
		)
	}

	return !showLocation ? (
		<View style={styles.container}>
			<View marginTop={33} style={styles.logo}>
				<Image
					source={require('../../assets/planet.png')}
					style={styles.logoImage}
				/>
				<Text style={styles.logoText}>Xplore</Text>
			</View>
			<View style={styles.topContainer}>
				<Image
					source={require('../../assets/map.png')}
					style={styles.mapIcon}
				/>
				<Text style={styles.pageTitle}>History</Text>
			</View>
			<View style={styles.bottomContainer}>
				<FlatList
					data={historyData}
					renderItem={renderHistoryItem}
					keyExtractor={(item) => item?.id}
				/>
			</View>
		</View>
	) : (
		<Location
			name={info.name}
			location={info.location}
			description={info.description}
			xp={info.xp}
			anim={info.anim}
			setShowLocation={setShowLocation}
		/>
	)
}

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
	topContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 46,
		backgroundColor: '#5793EC',
		paddingHorizontal: 13,
	},
	bottomContainer: {
		height: 1000,
		backgroundColor: '#003459',
		borderRadius: 30,
		alignItems: 'center',
	},
	pageIcon: {
		marginTop: 33,
	},
	mapIcon: {
		width: 56,
		height: 56,
		marginTop: 20,
		marginLeft: 10,
	},
	pageTitle: {
		fontSize: 40,
		fontWeight: 'bold',
		marginTop: 46,
		color: '#FFFFFF',
		marginBottom: 19,
		marginLeft: 13,
	},
	historyItem: {
		marginTop: 36,
		width: 392,
		height: 275,
		backgroundColor: '#FFFFFF',
		borderBottomWidth: 2,
		borderBottomColor: '#000000',
		borderTopColor: '#000000',
		borderRadius: 30,
		paddingTop: 20,
		paddingLeft: 20,
	},
	imageContainer: {
		alignItems: 'center',
		marginTop: 30,
	},
	historyItemImage: {
		width: 100,
		height: 100,
		marginRight: 15,
	},
	historyItemInfo: {
		flex: 1,
	},
	historyItemDate: {
		fontSize: 18,
		color: '#E55934',
	},
	historyItemLocation: {
		fontSize: 24,
		marginBottom: 5,
		borderBottomColor: '#000000',
		color: '#E55934',
	},
	historyItemXP: {
		fontSize: 14,
		color: '#E55934',
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 40,
	},

	flexStart: {
		alignSelf: 'flex-start',
		fontSize: 24,
		color: '#E55934',
	},
	flexEnd: {
		marginRight: 20,
		fontSize: 24,
		color: '#E55934',
	},
})

export default HistoryPage
