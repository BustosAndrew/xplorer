import {useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const HistoryPage = ({ navigation }) => {
	
  const historyData = [
    {
      id: 1,
      date: '04/25/2024',
      location: 'Arc Pavilion',
      xp: 50,
	  image: "../assets/map.png"
    },
    {
      id: 2,
      date: '04/20/2024',
      location: 'Galaxy Museum',
      xp: 75, 
	  image: "../assets/map.png"
    },
  ];

  const renderHistoryItem = ({ item }) => {
	const url = item.image;
	console.log(item.image)
	return (
    <View style={styles.historyItem}>
      {/*<Image source={{uri: url}} style={styles.historyItemImage}/>*/}
      <View style={styles.historyItemInfo}>
		<View style={styles.locationText}>
			<Text style={styles.historyItemLocation}>{item.location}</Text>
		</View>
		<View style = {styles.rowContainer}>
			<Text style={styles.flexStart}>{item.date}</Text>	
			<Text style={styles.flexEnd}>XP: {item.xp}</Text>
		</View>
      </View>
    </View>
  )};

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/planet.png')} style={styles.logoImage} />
        <Text style={styles.logoText}>Xplore</Text>
      </View>
      <View style={styles.topContainer}>
        <Image source={require('../assets/map.png')} style={styles.mapIcon}/>
        <Text style={styles.pageTitle}>History</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={historyData}
          renderItem={renderHistoryItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
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
  topContainer: {
	flexDirection: 'row',
	alignItems: 'center',
	marginTop: 200,
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
  },
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
	marginTop: 44,
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
	color: '#E55934',
  },
  historyItemXP: {

    fontSize: 14,
	color: '#E55934',
  },
  rowContainer: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginTop: 170, 
  },
  
  flexStart: {
	alignSelf: 'flex-start',
	fontSize: 24,
	color: '#E55934',
  },
  
  flexEnd: {
	alignSelf: 'flex-end',
	marginRight: 20,
	fontSize: 24,
	color: '#E55934',
  },
});

export default HistoryPage;
