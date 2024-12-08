import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { auth, firestore } from './FirebaseConfig'; // Import Firebase instances

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Email and Password must be filled');
      return;
    }

    try {
      // Sign in the user with Firebase Authentication
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;

      console.log('User signed in:', user.uid);

      // Save user data in Firestore
      const userRef = firestore.collection('users').doc(user.uid);
      const userDoc = await userRef.get();

      if (!userDoc.exists) {
        // Add user data to Firestore if it doesn't exist
        await userRef.set({
          email: email,
          password: password, // Plain text passwords are NOT recommended in production
        });
        console.log('User data saved to Firestore.');
      } else {
        console.log('User already exists in Firestore.');
      }

      Alert.alert('Success', 'Login successful!');
      navigation.navigate('Home'); // Navigate to HomeScreen
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to log in. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Ensuring this text is inside <Text> */}
      <Text style={styles.title}>Welcome Back to Gymify!</Text>

      {/* Ensure email input is working */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      {/* Ensure password input is working */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Ensuring button is wrapped inside <Text> */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#eae6f8', // Light purple background
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6a4c9c', // Deep purple for the title
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f5f5f5', // Light background for inputs
    borderColor: '#d0c4f2', // Soft purple border
    borderWidth: 1,
    marginBottom: 15,
    fontSize: 16,
    color: '#6a4c9c', // Purple text inside inputs
  },
  button: {
    backgroundColor: '#9575cd', // Light purple button background
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff', // White text on buttons
    fontWeight: 'bold',
  },
});
