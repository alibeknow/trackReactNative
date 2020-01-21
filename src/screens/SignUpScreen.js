import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import Spacer from '../components/Spacer'

const SignUpScreen = ({ navigation }) => (
  <View style={StyleSheet.container}>
  <Spacer>
    <Text h3>Sign Up for Tracker</Text>
    </Spacer>
    <Spacer>
    <Input style={} label="Email" />
    </Spacer>
    <Spacer/>
    <Input label="Password" />
    <Spacer/>
    <Button ещеду="Sign Up" />
    </View>
);

SignUpScreen.navigationOptions=()=>{
  return {
    header:null
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    marginBottom:200
  }
});
export default SignUpScreen;
