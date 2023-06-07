import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, Alert, Image, TouchableOpacity, Linking, Button} from 'react-native'
import  MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker, Callout } from 'react-native-maps';
import mapStyle from '../assets/styles/mapStyle.json';
import { PermissionsAndroid } from 'react-native';

async function requestLocationPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Appen behöver tillgång till din position',
        message: 'Acceptera för att appen ska kunna visa din position på kartan.',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Location permission granted.');
    } else {
      console.log('Location permission denied.');
    }
  } catch (err) {
    console.warn(err);
  }
}


//TODO: // Create showsMyLocationButton in Android.

    let Region={
        // Coordinates for Stockholm
        latitude: 59.334591,
        longitude: 18.063240,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
    }

function Mappage() {
 /*  useEffect(() => {
    requestLocationPermission();
  }, []); */
  const [location, setLocation] = useState([]);

  useEffect(() => {
    //fetch('http://192.168.1.246:3000/location')
    //fetch('http://192.168.1.246:3000/location')
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
          
          
        >
          <Callout style={{ width: 170, height: 190}}
            onPress={() => {
              Alert.alert('Vägbeskrivning', 'Öppna i Google Maps?', [
                {
                  text: 'Stäng',
                  onPress: () => console.log('Stäng btn pressed'),
                  style: 'destructive',
                },
                {
                  text: 'Öppna',
                  onPress: () => {
                    console.log('Ja btn Pressed');
                    const url = `https://www.google.com/maps/search/?api=1&query=${location.title}`;
                    Linking.openURL(url);
                  },
                  style: 'default'
                },
              ]);
            }}
          >
      <View>
        <Image source={{ uri: location.imgUrl }} style={{height: 140}} />
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{location.title}</Text>
        <View style={{backgroundColor: 'green', opacity: 0.5, padding: 4, borderRadius: 2, alignItems: 'center'}}>
        <Text style={{fontSize: 14, color: '#FFFF'}}>Hitta hit</Text>
        </View>
       {/*   <Button
         style={{fontSize: 20}}
          title="Hitta hit"
          onPress={() => {
            console.log('Button pressed');
            const url = `https://www.google.com/maps/search/?api=1&query=${location.title}`;
            Linking.openURL(url);
          }}
        />  */}
      </View>
    </Callout>
          </Marker>
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