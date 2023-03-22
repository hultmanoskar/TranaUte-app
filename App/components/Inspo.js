import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { InspoCard } from './InspoCard'


//TODO: Inspo - One card gonna have "7 grymma övningar för utegymmet" with pictures and instructions on how to train with certain machines.
//TODO: Need more inspo card CONTENT - at least 3-4 Cards.


const Inspo = () => {
  return (
    <View>
    <ScrollView   contentContainerStyle={{
        paddingHorizontal: 15,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
       <InspoCard title="7 grymma övningar för utegymmet" description="Text to describe the challengeaddwadwadawdwd"      level="Get started"               expire={2}                        imgUrl={require('../assets/images/yoga.webp')}/>
       <InspoCard title="Kom igång med löpträningen"      description="Text to describe the challenge slslslslsls"       level="Level"                expire={3}                   imgUrl={require('../assets/images/running.jpeg')}/>
       <InspoCard title="Challenge 3"                     description="Text to describe the challenge akakakka"        level="Level"               expire={4}/>
       <InspoCard title="Challenge 4"                     description="Text to describe the challenge akakakaka"        level="Level"               expire={5}    imgUrl={require('../assets/images/yoga.webp')}/>
      
       
        </ScrollView>
    </View>
  )
}

export default Inspo