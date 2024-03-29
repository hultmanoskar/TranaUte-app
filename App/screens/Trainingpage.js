import { View, Text, SafeAreaView,Button, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";
import { Feather } from '@expo/vector-icons';

const Trainingpage = ({ route }) => {
    const { gyms } = route.params;
    
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
        source={{ uri: gyms.imgUrl }}
        style={styles.image}
            /> 

    <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}
            >
    <Feather name="corner-up-left" size={26} color="white"
     />
    </TouchableOpacity>
            </View>
            <View style={styles.textView}>
    <Text style={styles.headline}>{gyms.title}</Text>
    </View>
    <View style={styles.infoView}>
    <View style={styles.pointsView}>
    <MapPinIcon size={22} color="gray" opacity={0.8} />
    <Text style={styles.streetTxt}>{gyms.street}</Text>
    </View>
    <View style={styles.pointsView}>
    <StarIcon size={24} color="green" opacity={0.5} />
    <Text style={styles.pointTxt}>{gyms.points}</Text>
    </View>
    <Text style={styles.aboutHeadline}>Om anläggningen:</Text>
    <Text style={styles.aboutTxt}>{gyms.about}</Text>
    
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
        flex: 1, marginBottom: 20
    },
    image: {
        height: 350,
        borderWidth: 0,
        opacity: 0.9
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
        fontSize: 16, marginVertical: 2, marginHorizontal: 6
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 18,
        padding: 10,
        backgroundColor: 'gray', opacity: 0.8, borderRadius: 20
    },
    aboutHeadline: {
        fontSize: 16, fontWeight: 'bold', marginVertical: 10, marginHorizontal: 6
    }
}) 

export default Trainingpage