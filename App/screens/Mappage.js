import React, { useState } from 'react'
import { Text, StyleSheet, View, Pressable, Alert } from 'react-native'
import  MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import mapStyle from '../assets/styles/mapStyle.json'




    let Region={
        // Coordinates for Stockholm
        latitude: 59.334591,
        longitude: 18.063240,
        latitudeDelta: 0.4,
        longitudeDelta: 0.4,
    }

function Mappage() {
  return (
    <View style={styles.container}>
    <View style={styles.topContainer}>
    <MapView 
    provider={PROVIDER_GOOGLE}
    region={Region}
    style={styles.map}
    customMapStyle={mapStyle}
     >

      
     {/*  <Pressable>
      </Pressable> */}
      <Marker
      coordinate={{latitude: 59.343264248291355, longitude:17.93947952313308}}
      title={""}
      onPress={() => Alert.alert("Home!")}
    />
    
</MapView>

{/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
</Modal> */}

    {/* <Text>Maps</Text> */}
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