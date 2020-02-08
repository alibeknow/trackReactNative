import React, {  useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignUpScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
      headerText="sign up for Tracker"
      errorMessage={state.errorMessage}
      submitButtonText="sign up"
      onSubmit={signup}/>
      <NavLink
      routeName="Signin"
      text="Already have an account? SignIN"/>
    </View>
  );
};

SignUpScreen.navigationOptions = () => ({
  header: null,
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    marginBottom: 200,
  },
  link:{
    color:'blue'
  }
});
export default SignUpScreen;
