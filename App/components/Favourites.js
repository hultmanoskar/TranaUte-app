import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FavouritesCard } from './FavouritesCard'





const Favourites = () => {

const [gyms, setGyms] = useState([]);

useEffect(() => {
  fetch('http://172.16.0.5:3000/topLocation')
  .then(response => response.json())
  .then(data => {
    setGyms(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error(error);
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
      {gyms.map(gym => (
          <FavouritesCard
            key={gym.id}
            title={gym.title}
            points={gym.points}
            street={gym.street}
            
          />
        ))}
      {/*  <FavouritesCard title="Challenge 1" description="Text to describe the challenge" expire={2}imgUrl={require('../assets/images/yoga.webp')}/>
       <FavouritesCard title="Kom igång med löpträningen" description="Text to describe the challenge" expire={3}imgUrl={require('../assets/images/running.jpeg')}/>
       <FavouritesCard title="Challenge 3" description="Text to describe the challenge" expire={4}/>
       <FavouritesCard title="Challenge 4" description="Text to describe the challenge" expire={5} imgUrl={require('../assets/images/yoga.webp')}/> */}
      
       
        </ScrollView>
    </View>
  )
}

export default Favourites