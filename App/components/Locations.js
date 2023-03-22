import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { LocationsCard } from './LocationsCard'

const Locations = () => {
  return (
    <View>
    <ScrollView   contentContainerStyle={{
        paddingHorizontal: 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
       <LocationsCard standing={1} title="Akalla Gårds utegym"     points={4.2}  location="Imatragatan 230" expire={2} imgUrl={require('../assets/images/utegym.jpeg')}/>
       <LocationsCard standing={2} title="Name of gym"             points={4.2}  location="Adress"          expire={3} imgUrl={require('../assets/images/yoga.webp')}/>
       <LocationsCard standing={3} title="Name of gym"             points={4.2}  location="Adress"          expire={4} imgUrl={require('../assets/images/yoga.webp')}/>
       <LocationsCard standing={4} title="Name of gym"             points={4.2}  location="Adress"          expire={5} imgUrl={require('../assets/images/yoga.webp')}/>
       <LocationsCard standing={5} title="Name of gym loooooooong" points={4.2}  location="Adress"          expire={5} imgUrl={require('../assets/images/yoga.webp')}/>
      
       
        </ScrollView>
    </View>
  )
}

export default Locations