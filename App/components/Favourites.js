import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { FavouritesCard } from './FavouritesCard'




const Favourites = () => {
  return (
    <View>
    <ScrollView   contentContainerStyle={{
        paddingHorizontal: 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
       <FavouritesCard title="Challenge 1" description="Text to describe the challenge" expire={2}imgUrl={require('../assets/images/yoga.webp')}/>
       <FavouritesCard title="Kom igång med löpträningen" description="Text to describe the challenge" expire={3}imgUrl={require('../assets/images/running.jpeg')}/>
       <FavouritesCard title="Challenge 3" description="Text to describe the challenge" expire={4}/>
       <FavouritesCard title="Challenge 4" description="Text to describe the challenge" expire={5} imgUrl={require('../assets/images/yoga.webp')}/>
      
       
        </ScrollView>
    </View>
  )
}

export default Favourites