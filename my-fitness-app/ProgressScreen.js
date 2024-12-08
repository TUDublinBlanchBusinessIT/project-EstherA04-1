import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Slider from '@react-native-community/slider'; // Correct Slider import

export default function ProgressScreen({ navigation }) {
  const [calories, setCalories] = useState(50); // Default slider value
  const [activityDuration, setActivityDuration] = useState('30'); // Default duration in minutes

  const progressData = {
    weight: '70 kg',
    workoutsCompleted: 25,
    dietDaysCompleted: 20,
  };

  // Function to calculate calories burned
  const calculateCalories = () => {
    const duration = Number(activityDuration) || 0; // Ensure duration is numeric
    const MET = 8; // Example MET value for vigorous exercise (adjustable)
    const weightInKg = 70; // Example fixed weight; this could be dynamic
    const caloriesBurned = (MET * weightInKg * duration) / 60; // Standard calorie burn formula
    return Math.round(caloriesBurned);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Progress</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Weight: {progressData.weight}</Text>
        <Text style={styles.progressText}>Workouts Completed: {progressData.workoutsCompleted}</Text>
        <Text style={styles.progressText}>Diet Days Completed: {progressData.dietDaysCompleted}</Text>
      </View>

      <View style={styles.calculatorContainer}>
        <Text style={styles.calculatorTitle}>Calorie Burn Calculator</Text>
        <TextInput
          style={styles.caloriesInput}
          placeholder="Enter activity duration (minutes)"
          keyboardType="numeric"
          value={activityDuration}
          onChangeText={(text) => setActivityDuration(text)}
        />
        <Text style={styles.caloriesResult}>Calories Burned: {calculateCalories()} kcal</Text>

        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={120}
          step={1}
          value={calories}
          onValueChange={(value) => setCalories(value)}
        />
        <Text style={styles.sliderValue}>Activity Intensity: {calories} (scale)</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Workout')}>
        <Text style={styles.buttonText}>Go to Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4e1f5', // Light purple background for the container
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6a4c9c', // Deep light purple title
    marginBottom: 20,
  },
  progressContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#b2a2d2', // Light purple shadow color
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
    color: '#6a4c9c', // Light purple text
  },
  calculatorContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#b2a2d2', // Light purple shadow color
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
    marginBottom: 30,
  },
  calculatorTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#6a4c9c', // Light purple title
    marginBottom: 10,
  },
  caloriesInput: {
    height: 40,
    borderColor: '#6a4c9c',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 15,
  },
  caloriesResult: {
    fontSize: 18,
    color: '#6a4c9c', // Light purple text for result
    marginBottom: 15,
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 15,
  },
  sliderValue: {
    fontSize: 18,
    color: '#6a4c9c', // Light purple slider value text
  },
  button: {
    backgroundColor: '#6a4c9c', // Light purple background for button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', // White text on the button
    fontSize: 18,
    fontWeight: 'bold',
  },
});
