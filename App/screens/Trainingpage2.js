import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { Feather } from '@expo/vector-icons';

const Trainingpage2 = ({ route }) => {
    const { location } = route.params;
    
    const navigation = useNavigation();

  return (
   
        <View style={styles.container}>
              <ScrollView   contentContainerStyle={{
        paddingHorizontal: 0,
    }}
    vertical
    showsHorizontalScrollIndicator={false}
    >
        <View style={{ position: 'relative',
        overflow: 'hidden'}}>
        <Image
        source={{ uri: location.imgUrl }}
        style={styles.image}
            /> 

    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}
            >
    <Feather name="corner-up-left" size={26} color="white"
     />
    </TouchableOpacity>
            </View>
            <View style={styles.textView}>
    <Text style={styles.headline}>{location.title}</Text>
    </View>
    <View style={styles.infoView}>
    <View style={styles.pointsView}>
    <MapPinIcon size={22} color="gray" opacity={0.9} />
    <Text style={styles.streetTxt}>{location.street}</Text>
    </View>
    <View style={styles.pointsView}>
    <StarIcon size={24} color="green" opacity={0.5} />
    <Text style={styles.pointTxt}>{location.points}</Text>
    </View>
    <Text style={styles.aboutTxt}>Om anläggningen:</Text>
    <Text style={styles.aboutTxt}>{location.about}</Text>
    
    </View>
    {/* <TouchableOpacity
    onPress={( )=> navigation.goBack()}
    style={{backgroundColor: 'red', padding: 10, alignItems: 'baseline', justifyContent: 'center'}}
    >
    <Text>Go back</Text>
    </TouchableOpacity> */}
     </ScrollView>
    </View>
   
  )
}


const styles = StyleSheet.create({

    container: {
        flex: 1
    },
    image: {
        height: 350,
        borderWidth: 0,
        opacity: 0.8
    },
    headline: {
        fontSize: 32,
     color: 'white', fontWeight: 'bold', textShadowColor: 'black', textShadowRadius: 8
    },
    textView: {
        marginTop: 12,
        alignSelf: 'center', marginBottom: 8, position: 'absolute', top: 130,
    },
    infoView: {
        marginHorizontal: 10, marginVertical: 10
    },
    pointTxt: {
        fontSize: 18, marginLeft: 6,
color: 'green'
    },
    pointsView: {
        flexDirection: 'row', alignItems: 'center', marginVertical: 4
    },
    streetTxt: {
        fontSize: 18, marginLeft: 6
    },
    aboutTxt: {
        fontSize: 18, marginVertical: 10, fontWeight: 'bold'
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 18,
        padding: 10,
        backgroundColor: 'gray', opacity: 0.8, borderRadius: 20
        
    },

}) 

export default Trainingpage2