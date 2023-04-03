import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LocationsCard } from './LocationsCard'

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
        />
        
        
      ))}
      
       {/* <LocationsCard standing={1} title="Akalla Gårds utegym"     points={4.2}  location="Imatragatan 230" expire={2} imgUrl={require('../assets/images/utegym.jpeg')}/>
       <LocationsCard standing={2} title="Name of gym"             points={4.2}  location="Adress"          expire={3} imgUrl={require('../assets/images/yoga.webp')}/>
       <LocationsCard standing={3} title="Name of gym"             points={4.2}  location="Adress"          expire={4} imgUrl={require('../assets/images/yoga.webp')}/>
       <LocationsCard standing={4} title="Name of gym"             points={4.2}  location="Adress"          expire={5} imgUrl={require('../assets/images/yoga.webp')}/>
       <LocationsCard standing={5} title="Name of gym loooooooong" points={4.2}  location="Adress"          expire={5} imgUrl={require('../assets/images/yoga.webp')}/> */}
      
     
        </ScrollView>
    </View>
  )
}

export default Locations