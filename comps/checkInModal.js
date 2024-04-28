import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';

const CheckInModal = ({ image, onClose }) => {
  return (
    <View style={styles.modalContainer}>
      <Image source={{ uri: image }} style={styles.capturedImage} />
      <Pressable style={styles.closeButton} onPress={onClose}>
        <Text style={styles.closeButtonText}>Close</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  capturedImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#003459',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});

export default CheckInModal;
