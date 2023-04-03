import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ArrowSmallRightIcon } from 'react-native-heroicons/solid'


const Headlines = ({text}) => {

  return (
    <View style={styles.categoryView}>
    <Text style={styles.categoryTxt}>{text}</Text>
    <ArrowSmallRightIcon size={25} color="#00CCBB" />
  </View>
  )
}
const styles = StyleSheet.create({

categoryView: {
    paddingHorizontal: 25,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
   },
   categoryTxt: {
     fontSize: 15, fontWeight: "bold", opacity: 0.5
   },
})

export default Headlines;