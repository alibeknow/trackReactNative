import React from 'react';
import {  StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map=()=>{
    let points=[];
    
    for (let i=0;i<20;i++)
    {
        if (i % 2 === 0)
    {
        points.push({
            latitude:43.222015+i*0.001,
            longitude:76.851250+i*0.001,
        });
    }
    else {
        points.push({
            latitude:43.222015-i*0.002,
            longitude:76.851250+i*0.001,
    });
    }
}
    return <MapView
    style={styles.map}
    initialRegion={{
        latitude:43.222015,
        longitude: 76.851250,
        latitudeDelta:0.001,
        longitudeDelta:0.001
    }}
   >
   <Polyline coordinates={points}/>
   </MapView>
    

}

const styles = StyleSheet.create({
    map:{
        height:300
    }
})

export default Map;