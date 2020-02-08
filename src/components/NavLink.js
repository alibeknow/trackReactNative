import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';


const NavLink = ({navigation,text,routeName}) => {
return (
    <TouchableOpacity onPress={()=>{navigation.navigate({routeName})}}>
    <Spacer/>
      <Text style={styles.link}>
          {text}
      </Text>
    </TouchableOpacity>
);
};


const styles = StyleSheet.create({
  link:{
    color:"red" 
  }
});

export default withNavigation(NavLink);
