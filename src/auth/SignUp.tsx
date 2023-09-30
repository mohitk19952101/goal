
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { View, Text, TextInput, Button } from 'react-native';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async () => {
    try {
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
      const userCredential = await auth().createUserWithEmailAndPassword(email, password);
      const user = userCredential.user;
      if (user) {
        await user.sendEmailVerification();
        alert('Please check your email for verification.');
      }
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
      <TextInput
        placeholder='Confirm Password'
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <Button title='Sign Up' onPress={handleSignUp} />
    </View>
  );
};

export default SignUp;