
import React from 'react';
import firebase from '@react-native-firebase/app';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './src/auth/SignUp';
import SignIn from './src/auth/SignIn';
import ForgotPassword from './src/auth/ForgotPassword';
import EmailVerification from './src/auth/EmailVerification';

const App: React.FC = () => {
  const AuthStack = createStackNavigator();

  if (firebase.apps.length === 0) {
    firebase.initializeApp({
        apiKey: "AIzaSyBYzLUNmOGPiUlnX8BkqawjYii70OtBQaA",
        authDomain: "goalapp-cec7c.firebaseapp.com",
        databaseURL: "https://goalapp-cec7c-default-rtdb.firebaseio.com",
        projectId: "goalapp-cec7c",
        storageBucket: "goalapp-cec7c.appspot.com",
        messagingSenderId: "10863860298",
        appId: "1:10863860298:android:3950e1078a6c42e91e24b3"
    });
  }

  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName='SignIn'>
        <AuthStack.Screen name='SignUp' component={SignUp} />
        <AuthStack.Screen name='SignIn' component={SignIn} />
        <AuthStack.Screen name='ForgotPassword' component={ForgotPassword} />
        <AuthStack.Screen name='EmailVerification' component={EmailVerification} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;