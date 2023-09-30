
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, TextInput, Button } from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      const user = auth().currentUser;
      if (user && !user.emailVerified) {
        alert('Please verify your email before signing in.');
        return;
      }
      alert('Signed in successfully.');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title='Sign In' onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;