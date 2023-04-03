import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { StarIcon } from "react-native-heroicons/solid";
import { MapPinIcon } from "react-native-heroicons/outline";




export const LocationsCard = ({imgUrl, street, standing, title, points}) => {

return(

    <TouchableOpacity style={styles.container}>
        <View>
         <Image 
            source={{ uri: imgUrl }}
            style={{height: 190, width: 230, borderTopLeftRadius: 8, borderTopRightRadius: 8, opacity:0.8}}
            /> 
            <Text numberOfLines={1} style={styles.subHeadline}>{title}</Text>
            <View style={{flexDirection: 'row', padding: 4, alignItems: 'center'}}>
            <StarIcon size={22} color="green" opacity={0.5} />
      <Text style={{color: "gray", fontSize: 12, marginHorizontal: 4}}>
      <Text style={{marginHorizontal: 4, color: "green", fontSize: 12}}>{points} </Text> 
      </Text>
      </View>
      <View style={{flexDirection: 'row', padding: 4, paddingBottom: 6, alignItems: 'center'}}>
<MapPinIcon size={22} color="gray" opacity={0.8} />
<Text style={{marginHorizontal: 4, color:"gray", fontSize: 12}}>{street}</Text>
      </View>
        {/* <Text style={styles.title}>{title}</Text> */}
        <Text style={styles.standing}>{standing}</Text>
        </View>
        </TouchableOpacity>
    
)
}

const styles = StyleSheet.create({

    container: {
     width: 230,
        borderRadius: 8,
       marginVertical: 8,
       marginHorizontal: 15,
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
    title: {
    fontSize: 18,fontWeight: "bold",position: 'absolute', top: 10, left: 4, right: 0, bottom: 0, color: "#FFFF"
    },
    standing: {
        fontSize: 45,fontWeight: "bold",position: 'absolute', top: 0, left: 10, right: 0, bottom: 0, color: "#FFFF"
        },
    subHeadline: {
        fontSize: 14,
        padding: 4,
        marginHorizontal: 2, fontWeight: "bold",
    }
})