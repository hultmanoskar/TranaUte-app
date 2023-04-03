import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { HeartIcon } from "react-native-heroicons/solid";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from "./Modal";





export const FavouritesCard = ({title, description, imgUrl, key, name, location, points, street}) => {

    const [active, setActive] = useState(false);
    const handleClick = () => {
      setActive(!active);
    };

return(

    <TouchableOpacity style={styles.container}>
        <View>
            <Image 
            source={imgUrl}
            style={{height: 170, width: 190, borderTopLeftRadius: 10, borderTopRightRadius: 10, opacity:0.8}}
            />
        <Text style={styles.headline}>{title}</Text>
        <Text style={styles.subHeadline}>{street}</Text>
        <Text style={styles.subHeadline}>{points}</Text>
        <Text style={styles.subHeadline}>{title}</Text>
        <Ionicons name='heart-outline' size={32} style={{position: 'absolute', top: 153, left: 148, right: 0, bottom: 0, color: "black"}} />
        <Ionicons name="heart-sharp" size={28} onPress={handleClick} style={{ position: 'absolute', top: 155, left: 150, right: 0, bottom: 0, color: active ? "#F94F4F" : "#F1EEED"}}/>
       {/* <HeartIcon size={28} onPress={handleClick} style={{ position: 'absolute', top: 155, left: 150, right: 0, bottom: 0, color: active ? "red" : "white"}}/> */}
        </View>
        </TouchableOpacity>
    
)
}

const styles = StyleSheet.create({

    container: {
        borderRadius: 10,
       marginVertical: 8,
       marginHorizontal: 10,
backgroundColor: '#FFFF',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
    borderRadius: 0
},
shadowOpacity: 0.2,
shadowRadius: 2,
elevation: 4,
    },
    headline: {
    fontSize: 18,fontWeight: "bold",position: 'absolute', top: 10, left: 4, right: 0, bottom: 0, color: "black"
    },
    subHeadline: {
        fontSize: 12,
        marginVertical: 0, paddingHorizontal: 10, paddingVertical: 10
    },
    icon: {
        fontSize: 18,fontWeight: "bold",position: 'absolute', top: 55, left: 150, right: 0, bottom: 0, color: "black", size: 50
        },
})