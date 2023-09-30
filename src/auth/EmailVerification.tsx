
// EmailVerification Component
import React from 'react';
import { View, Text } from 'react-native';

const EmailVerification = () => {
    const [isVerified, setIsVerified] = React.useState(false);
  
    const checkVerification = async () => {
      const user = auth().currentUser;
      await user.reload();
      setIsVerified(user.emailVerified);
    };
  
    React.useEffect(() => {
      checkVerification();
    }, []);
  return (
    <View>
      {isVerified ? (
        <Text>Email Verified</Text>
      ) : (
        <Text>Please verify your email.</Text>
      )}
      <Text>Email Verification</Text>
    </View>
  );
};

export default EmailVerification;