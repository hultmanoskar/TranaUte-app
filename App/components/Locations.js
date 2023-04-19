import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocationsCard } from './LocationsCard'
import { useNavigation } from '@react-navigation/native'
import Trainingpage from '../screens/Trainingpage'

const Locations = () => {

const [gym, setGym] = useState([]);

useEffect(() => {
  fetch('http://172.16.0.5:3000/topLocation')
  .then(response => response.json())
  .then(data => {
    setGym(data)
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
}, []);

gym.sort((a, b) => b.points - a.points);

const navigation = useNavigation();

  const handlePress = (gyms) => {
    navigation.navigate('Trainingpage', { title: gyms.title, street: gyms.street });
  }



  return (
    <View>
    <ScrollView   contentContainerStyle={{
        paddingHorizontal: 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
      {gym.map((gyms, index) => (
        

        <LocationsCard 
        key={gyms.id}
        title={gyms.title}
        points={gyms.points}
        street={gyms.street}
        standing={index + 1}
        imgUrl={gyms.imgUrl}
        onPress={() => handlePress(gyms)}
          />
      ))}
      
     
        </ScrollView>
    </View>
  )
}

export default Locations