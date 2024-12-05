import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProgressScreen({ navigation }) {
  const progressData = {
    weight: '70 kg',
    workoutsCompleted: 25,
    dietDaysCompleted: 20,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Weight: {progressData.weight}</Text>
        <Text style={styles.progressText}>
          Workouts Completed: {progressData.workoutsCompleted}
        </Text>
        <Text style={styles.progressText}>
          Diet Days Completed: {progressData.dietDaysCompleted}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Workout')} // Navigation to Workout screen
      >
        <Text style={styles.buttonText}>Go to Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  progressContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 30,
    width: '90%',
  },
  progressText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#6c5ce7',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
