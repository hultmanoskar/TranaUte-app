import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Locations from '../components/Locations';
import Inspo from '../components/Inspo';
import Headlines from '../components/Headlines';



// TODO: Not exactly sure on what the home page should contain at the moment - need to figure that out.


function Homepage() {
  return (
    
<View style={styles.container}>
<ScrollView   contentContainerStyle={{
        paddingHorizontal: 0,  
        marginVertical: 0  
    }}
    vertical
    showsVerticalScrollIndicator={false}>

{/* Top View -- Headlines +  InspoCard */}
   <Headlines text="Bli inspirerad" />
      <Inspo
/>

      {/* Top View -- Headlines +  Headlines */}
      <Headlines text="Högst rankade"/>
      <Locations />

<View style={{justifyContent: 'center', alignItems: 'center'}}>
<View style={{ width: 220,
           borderRadius: 8,
           padding: 8,
           marginHorizontal: 10,
           marginTop: 30,
           marginVertical: 8,
           backgroundColor: '#00CCBB',
           shadowColor: "#000",
           shadowOffset: {
               width: 0,
               height: 1,
               borderRadius: 0
           },
           shadowOpacity: 0.2,
           shadowRadius: 0,
           elevation: 4,}}>
  <Text style={{padding: 4, alignSelf: 'center', fontSize: 18, color: '#FFFF'}}>Träna Ute</Text>
  <Text style={{color: '#FFFF', alignSelf: 'center'}}>Vill underlätta för träning utomhus. Vi hoppas kunna få fler människor att röra på sig och sprida träningsglädje!</Text>
  <Text style={{color: '#FFFF', alignSelf: 'center', marginTop: 8}}>Detta är en första version av appen och uppdatteringar kommer att ske löpande.</Text>
</View>
</View>
      </ScrollView>
      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF8F7',
    
  }
 
 
});

export default Homepage;