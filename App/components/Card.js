import React from "react"
import { View, Text, StyleSheet } from "react-native"




export const Card = () => {
return(

    <View style={styles.container}>
        <Text style={styles.headline}>Headline</Text>
        <Text style={styles.subHeadline}>Subheadline</Text>
        <Text style={{justifyContent: "center", alignItems: "center", marginTop: 40}}>CardView</Text>
    </View>
)
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        
height: '70%',
width: '40%',

backgroundColor: '#FFFF',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
    },
    headline: {
    fontSize: 15,padding: 5
    },
    subHeadline: {
        fontSize: 10
    }
})