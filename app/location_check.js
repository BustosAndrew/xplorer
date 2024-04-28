import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const VisitDetails = ({ location, date, description, xp, mapImage, logoImage }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.pageTitle}>Xplore</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.locationTitle}>{location}</Text>
        <Text style={styles.visitDate}>Visited: {date}</Text>
        <Image source={mapImage} style={styles.mapImage} />
        <Text style={styles.description}>{description}</Text>
        <View style={styles.xpEarned}>
          <Text style={styles.xpText}>XP Earned:</Text>
          <Text style={styles.xpValue}>{xp}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Check In</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30,
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
  pageTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#333',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  locationTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  visitDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 15,
  },
  mapImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
    marginBottom: 20,
  },
  xpEarned: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  xpText: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  xpValue: {
    fontSize: 16,
    color: '#00C853',
  },
  buttonContainer: {
    backgroundColor: '#00C853',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default VisitDetails;
