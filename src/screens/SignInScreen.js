import React,{useContext} from 'react';
import { View,  StyleSheet } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';
import {NavigationEvents} from 'react-navigation'

const SignInScreen = ({navigation}) =>{
    const {state, signin,clearErrorMessage} =useContext(Context);
    return  (
            <View style={styles.container}>
            <NavigationEvents
            onWillBlur={()=>{clearErrorMessage()}}
            />
             <AuthForm
             headerText="signin in your account"
             errorMessage={state.errorMessage}
             onSubmit={signin}
             submitButtonText="Sign In"
             ></AuthForm>
             <NavLink
             text="dont have some bo"
             routeName="SignUp"
             ></NavLink>
         </View>
     )
    }

SignInScreen.navigationOptions = () =>{
    header:null
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    marginBottom:250
}

});
export default SignInScreen;
