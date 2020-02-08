import React from 'react';
import { Text, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({ navigation }) => 
   <>
    <Text>TrackListScreen</Text>
    <Button title="go To track" onPress={() => navigation.navigate('TrackDetail')} />
  </>


const styles = StyleSheet.create({});
export default TrackListScreen;
