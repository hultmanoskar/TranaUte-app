import React from 'react'
import { Text, StyleSheet, View, TouchableHighlight, Pressable} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Favourites from '../components/Favourites';
import Headlines from '../components/Headlines';





function Likespage() {

  return (
    <SafeAreaView style={styles.container}>
   <Headlines text="Mina favoriter" />
    <Favourites />
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCF8F7',
    },
    topContainer: {
   
   
    }, btnPress: {
      color: "black"
    }, 
    btnNormal: {
      color: "red"
    }

  });

export default Likespage;