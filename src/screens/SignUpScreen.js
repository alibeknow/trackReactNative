import React, {  useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {NavigationEvents} from 'react-navigation'

const SignUpScreen = ({ navigation }) => {
  const { state, signup,clearErrorMessage} = useContext(AuthContext);

  return (
    <View style={styles.container}>
    <NavigationEvents
     onWillBlur={()=>{clearErrorMessage()}}
     />
      <AuthForm
      headerText="sign up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="sign up"
      onSubmit={signup}/>
      <NavLink
      routeName="SignIn"
      text="Already have an account? SignIn"/>
    </View>
  );
};

SignUpScreen.navigationOptions = () => ({
  header: null,
});
const styles = StyleSheet.create({
  container: {
    padding:30,
    flex: 1,
    justifyContent: 'center', 
    marginBottom: 250,
  },
  link:{
    color:'blue'
  }
});
export default SignUpScreen;
