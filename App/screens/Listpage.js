import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListCell from '../components/ListCell';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";

const Listpage = () => {

    const [searchQuery, setSearchQuery] = useState('');  // searchBar var to filter list

    const [location, setLocation] = useState([]);

    useEffect(() => {
      fetch('http://172.16.0.5:3000/location')
      .then(response => response.json())
      .then(data => {
        setLocation(data)
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    }, []);
  
    const filteredLocation = location.filter(location =>
        location.title.toLowerCase().includes(searchQuery.toLowerCase())    // To filter serach
      );

  return (
    

<View style={{backgroundColor: "white", flex: 1}}>
    <ScrollView contentContainerStyle={{
        paddingHorizontal: 0,  
        marginVertical: 0  
    }}
    vertical
    showsVerticalScrollIndicator={false}>
        <View>
        <Text style={{fontSize: 20, justifyContent: 'center', alignSelf: 'center', marginTop: 10}}>Hitta gym
        </Text>
        </View>
        <View style={{borderBottomWidth: 2, borderBottomColor: "black", borderBottomEndRadius: 20, borderBottomStartRadius: 20}}>
      
      <View style={{backgroundColor: "#E7E5E5", flexDirection: 'row', padding: 12, margin: 10, borderRadius: 10, marginHorizontal: 12}}>
<MagnifyingGlassIcon size={20} color={"#898989"} style={{marginHorizontal: 4}} />
<TextInput placeholderTextColor={"#898989"}
placeholder='Utegym'
keyboardType='default'
keyboardAppearance='default'
onChangeText={searchQuery => setSearchQuery(searchQuery)} // set searchQuery state variable based on input value
>

</TextInput>
        </View>
        </View>

        {filteredLocation.map(location => (
        <ListCell
          key={location.id}
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title={location.title}
          points={location.points}
          street={location.street}
        />
      ))}


        {/* <ListCell title="Test 1" points={2} />
        <ListCell title="Test 2" points={2} />
        <ListCell title="Test 3" points={2}/>
        <ListCell title="Test 4" points={2}/> */}

    </ScrollView>

</View>

    
  /*   <View>
        <Text>Listpage</Text>
        {location.map(location => (
      
      <Text>{location.title}</Text>
      
      ))}
    </View> */
    
  )
}

export default Listpage