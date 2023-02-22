import React from 'react'
import { Text, StyleSheet, View,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

function Likespage() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
    <Text>Likespage</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightgray',
    },
    topContainer: {
    alignItems: 'flex-start',
    height: '20%',
    backgroundColor: 'white'
   
    }

  });

export default Likespage