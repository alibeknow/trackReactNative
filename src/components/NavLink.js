import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';


const NavLink = ({navigation,text,routeName}) => {
return (
    <Spacer/>
    <TouchableOpacity onPress={()=>{navigation.navigate({routeName})}}>
    <Spacer/>
      <Text style={style.link}>
          {text}
      </Text>
    </TouchableOpacity>
)
};


const styles = StyleSheet.create({});

export default withNavigation(NavLink);
