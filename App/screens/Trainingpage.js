import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { InspoCard } from '../components/InspoCard';

const Trainingpage = ({ route }) => {
    const { title, description, imgUrl, level } = route.params.location;
    const { location } = route.params;

  return (
    <SafeAreaView>
        
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text>{title}</Text>
    </View>
    </SafeAreaView>
  )
}

export default Trainingpage