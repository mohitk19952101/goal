
// ForgotPassword Component
import React from 'react';
import { View, Text } from 'react-native';

const ForgotPassword = () => {
    const [email, setEmail] = React.useState('');
  
    const handleForgotPassword = async () => {
      try {
        await auth().sendPasswordResetEmail(email);
        alert('Password reset email sent.');
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
      <Button title='Reset Password' onPress={handleForgotPassword} />
      <Text>Forgot Password</Text>
    </View>
  );
};

export default ForgotPassword;