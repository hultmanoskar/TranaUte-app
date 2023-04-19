import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Pressable, Alert } from 'react-native'
import  MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import mapStyle from '../assets/styles/mapStyle.json'


TODO: // Create showsMyLocationButton in Android.

    let Region={
        // Coordinates for Stockholm
        latitude: 59.334591,
        longitude: 18.063240,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
    }

function Mappage() {

  const [location, setLocation] = useState([]);

  useEffect(() => {
    fetch('http://172.16.0.5:3000/location')
    .then(response => response.json())
    .then(data => {
      setLocation(data)
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
      
    <MapView 
    provider={PROVIDER_GOOGLE}
    region={Region}
    style={styles.map}
    customMapStyle={mapStyle}
    showsUserLocation={true}
    zoomEnabled={true}
    showsMyLocationButton={true}
     >

    {location.map(location => (
        <Marker
          key={location.id}
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title={location.title}
          onPress={() => Alert.alert(location.title)}
        />
      ))}
    
</MapView>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgray',    
      },
      topContainer: {
      backgroundColor: 'white',
        height: '100%',
        width: '100%',
        
        justifyContent: 'center',
        alignItems: 'center'  
     
      },
      map: {
        width: '100%',
    height: '100%',
      }
  });

export default Mappage