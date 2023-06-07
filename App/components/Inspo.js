import { View, Text, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { InspoCard } from './InspoCard'
import { useNavigation } from '@react-navigation/native'



//TODO: Inspo - One card gonna have "7 grymma övningar för utegymmet" with pictures and instructions on how to train with certain machines.
//TODO: Need more inspo card CONTENT - at least 3-4 Cards.
//TODO: //https://www.friskissvettis.se/jonkoping/inspiration/7-grymma-ovningar-for-utegymmet
//


const Inspo = () => {

  const navigation = useNavigation();

   const handlePress = (challenges) => {
    navigation.navigate('Inspopage', { challenges });  // Navigates to Gympage
  } 

  const [challenge, setChallenge] = useState([]);

  useEffect(() => {
    //fetch('http://192.168.1.246:3000/topLocation')
   fetch('http://172.16.0.5:3000/tips')
    .then(response => response.json())
    .then(data => {
      setChallenge(data)
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
      {challenge.map((challenges) => (
        

        <InspoCard
        key={challenges.id}
        title={challenges.title}
        level={challenges.level}
        description={challenges.description}
        imgUrl={challenges.imgUrl}
        txtImage={challenges.txtImage}
       mainTxt={challenges.mainTxt}
       onPress={() => handlePress(challenges)}
          />
      ))}
      {/*  <InspoCard title="7 grymma övningar för utegymmet" description="Text to describe the challengeaddwadwadawdwd"      level="Get started"               expire={2}                        imgUrl={require('../assets/images/yoga.webp')}/>
       <InspoCard title="Kom igång med löpträningen"      description="Text to describe the challenge slslslslsls"       level="Easy"                expire={3}                   imgUrl={require('../assets/images/running.jpeg')}/>
       <InspoCard title="Challenge 3"                     description="Text to describe the challenge akakakka"        level="Medium"               expire={4}/>
       <InspoCard title="Challenge 4"                     description="Text to describe the challenge akakakaka"        level="Level"               expire={5}    imgUrl={require('../assets/images/yoga.webp')}/> */}
      
       
        </ScrollView>
    </View>
  )
}

export default Inspo