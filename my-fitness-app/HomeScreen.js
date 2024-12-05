import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [exercises, setExercises] = useState([
    { id: '1', name: 'Push Ups', completed: false },
    { id: '2', name: 'Squats', completed: false },
    { id: '3', name: 'Plank', completed: false },
    { id: '4', name: 'Lunges', completed: false },
  ]);
  const [dietPlan] = useState([
    'Breakfast: Oats & Fruit',
    'Lunch: Grilled Chicken Salad',
    'Dinner: Steamed Fish & Veggies',
    'Snacks: Nuts & Yogurt',
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleExerciseToggle = (id) => {
    setExercises(exercises.map(exercise =>
      exercise.id === id
        ? { ...exercise, completed: !exercise.completed }
        : exercise
    ));
  };

  return (
    <View style={styles.container}>
      {/* Clock Section */}
      <Text style={styles.clock}>{time}</Text>

      {/* Exercises List */}
      <Text style={styles.sectionHeader}>Today's Exercises</Text>
      <FlatList
        data={exercises}
        renderItem={({ item }) => (
          <View style={styles.exerciseItem}>
            <TouchableOpacity
              style={[styles.exerciseButton, item.completed && styles.completed]}
              onPress={() => handleExerciseToggle(item.id)}
            >
              <Text style={styles.exerciseText}>
                {item.completed ? '✔️ ' : '❌ '}
                {item.name}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />

      {/* Diet Plan */}
      <Text style={styles.sectionHeader}>Diet Plan</Text>
      <FlatList
        data={dietPlan}
        renderItem={({ item }) => (
          <Text style={styles.dietItem}>{item}</Text>
        )}
        keyExtractor={(index) => index.toString()}
      />

      {/* Button to Navigate to Progress Screen */}
      <TouchableOpacity
        style={styles.progressButton}
        onPress={() => navigation.navigate('Progress')}
      >
        <Text style={styles.progressButtonText}>Go to Progress</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  clock: {
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  exerciseItem: {
    marginBottom: 10,
  },
  exerciseButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  completed: {
    backgroundColor: '#28a745', // Green background when completed
  },
  exerciseText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  dietItem: {
    fontSize: 18,
    marginVertical: 5,
  },
  progressButton: {
    backgroundColor: '#6c757d',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  progressButtonText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
});
