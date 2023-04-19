import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowSmallRightIcon } from 'react-native-heroicons/solid'



const ListCell = ({title, points, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{borderBottomWidth: 2, borderColor: "#ADADAD", borderBottomLeftRadius: 20, flexDirection: 'column'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 14, marginVertical: 15, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 14, fontWeight: 'bold', display: 'flex', width: 130}}>{title}</Text>
      <Text style={{fontSize: 14, display: 'flex', marginLeft: 8}}>{points}</Text>
      {/* <Text style={{color: "red", fontSize: 14}}>avstånd</Text> */}
      <ArrowSmallRightIcon size={25} color="#00CCBB" />
      </View>
    </View>
    </TouchableOpacity>
  )
}

export default ListCell