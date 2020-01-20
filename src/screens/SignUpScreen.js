import React from 'react';
import {
  View, Button, Text, StyleSheet,
} from 'react-native';

const SignUpScreen = ({ navigation }) => (
  <>
    <Text>SignUpScreen</Text>
    <Button title="go to" onPress={() => { navigation.navigate('SignIn'); }} />
    <Button title="go to" onPress={() => { navigation.navigate('mainFlow'); }} />
  </>
);

const styles = StyleSheet.create({});
export default SignUpScreen;
