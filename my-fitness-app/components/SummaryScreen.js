import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SummaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Summary</Text>
      <Text style={styles.text}>Congratulations! You completed your workout today! 🎉</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Navigate to the Home screen
      >
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4e1f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6a4c9c',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#4a4e69',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#6a4c9c',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
