import { useNavigation } from "@react-navigation/native"
import React from "react"
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"





export const InspoCard = ({title, description, imgUrl, level, txtImage, mainTxt, onPress }) => {


const navigation = useNavigation();

return(

   <TouchableOpacity
style={styles.container} onPress={onPress}>
<View style={styles.topView}>
    <Image
    source={{uri: imgUrl}}
            style={styles.cardImage}/>
            <View style={{position: 'absolute', top: 52, left: 5, right: 0, bottom: 0, color: "#FFFF", backgroundColor: "#DCD8D8", width: 80, height: 28, borderRadius: 8, justifyContent: "center", alignItems: "center", borderColor: '#AFA9A9', borderWidth: 2}}>
           <Text style={styles.subHeadline}>{level}</Text>
           </View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.descriptionTxt}>{description}</Text>
</View>


   </TouchableOpacity>
    
)
}

const styles = StyleSheet.create({

    container: {
        width: 210,
           borderRadius: 8,
           marginHorizontal: 10,
           marginVertical: 8,
          
   backgroundColor: '#FFFF',
   shadowColor: "#000",
   shadowOffset: {
       width: 0,
       height: 1,
       borderRadius: 0
   },
   shadowOpacity: 0.2,
   shadowRadius: 0,
   elevation: 4,
       },

    subHeadline: {
        borderRadius: 8,
        fontSize: 12,fontWeight: 'bold', color: "#FFFF"
    },
    title: {
        fontSize: 17,fontWeight: "bold",position: 'absolute', top: 8, left: 5, right: 0, bottom: 0, color: "#FFFF", textShadowColor: 'black', textShadowRadius: 8
    },
    descriptionTxt: {
 padding: 10,fontSize: 12
    }, 
    cardImage: {
        height: 200, width: 210, borderTopLeftRadius: 8, borderTopRightRadius: 8, opacity:0.8
    }
   
});