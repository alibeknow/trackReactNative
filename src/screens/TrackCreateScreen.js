import '../_mockLocation';
import React,{useEffect,useState} from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements'
import {SafeAreaView} from 'react-navigation';
import Map from '../components/map';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';

const TrackCreateScreen= ()=>{
const [err,setErr]=useState(null);
const startWatching=async ()=>{
    try {
        await requestPermissionsAsync();
        await watchPositionAsync({accuracy:Accuracy.BestForNavigation,
        timeInterval:1000,
        distanceInterval:10
        },
        (location)=>{
            console.log(location);
        });
    } catch (error) {
        setErr(error);
        
    }
}
useEffect(()=>{
    startWatching();
},[]);
    return (
    <SafeAreaView forceInset={{top:'always'}}>
    <Text h2>Create Track map</Text>   
    <Map/>
    {err ? <Text>please enable locations</Text> : null}
    </SafeAreaView>
        )
}

const styles=StyleSheet.create({});
export default TrackCreateScreen;