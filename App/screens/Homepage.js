import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native';
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