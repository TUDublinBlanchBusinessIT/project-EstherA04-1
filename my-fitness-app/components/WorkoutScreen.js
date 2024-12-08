import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function WorkoutScreen({ navigation }) {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);

  const workoutPlan = [
    { id: 1, exercise: 'Push-ups', sets: 3, reps: 15 },
    { id: 2, exercise: 'Squats', sets: 3, reps: 20 },
    { id: 3, exercise: 'Plank', duration: '1 minute' },
    { id: 4, exercise: 'Lunges', sets: 3, reps: 12 },
    { id: 5, exercise: 'Burpees', sets: 3, reps: 10 },
  ];

  const handleComplete = (id) => {
    if (completedWorkouts.includes(id)) {
      setCompletedWorkouts(completedWorkouts.filter((workoutId) => workoutId !== id));
    } else {
      setCompletedWorkouts([...completedWorkouts, id]);
    }
  };

  const handleFinishWorkout = () => {
    navigation.navigate('Summary'); // Navigate to the SummaryScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout Plan</Text>

      <ScrollView style={styles.workoutList}>
        {workoutPlan.map((workout) => (
          <View
            key={workout.id}
            style={[
              styles.workoutItem,
              completedWorkouts.includes(workout.id) && styles.completedWorkoutItem,
            ]}
          >
            <Text style={styles.workoutText}>
              {workout.exercise}
              {workout.sets && ` - ${workout.sets} sets x ${workout.reps} reps`}
              {workout.duration && ` - ${workout.duration}`}
            </Text>
            <TouchableOpacity
              style={[
                styles.completeButton,
                completedWorkouts.includes(workout.id) && styles.completedButton,
              ]}
              onPress={() => handleComplete(workout.id)}
            >
              <Text style={styles.buttonText}>
                {completedWorkouts.includes(workout.id) ? 'Undo' : 'Complete'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.finishButton} onPress={handleFinishWorkout}>
        <Text style={styles.finishButtonText}>Finish Workout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4e1f5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6a4c9c',
    textAlign: 'center',
    marginBottom: 20,
  },
  workoutList: {
    width: '100%',
  },
  workoutItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    shadowColor: '#b2a2d2',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  completedWorkoutItem: {
    backgroundColor: '#e8d8e1',
  },
  workoutText: {
    fontSize: 18,
    color: '#4a4e69',
    flex: 1,
  },
  completeButton: {
    backgroundColor: '#6a4c9c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  completedButton: {
    backgroundColor: '#a29bfe',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  finishButton: {
    backgroundColor: '#6a4c9c',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
