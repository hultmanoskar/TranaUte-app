import { View, Text, ScrollView, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListCell from '../components/ListCell';
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';




const Listpage = () => {

    const navigation = useNavigation();

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
  

    // Sort list alphabetical
    location.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });

    const filteredLocation = location.filter(location =>
        location.title.toLowerCase().includes(searchQuery.toLowerCase())    // To filter serach
      );
    const handlePress = (location) => {
    navigation.navigate('Gympage', { location });  // Navigates to Gympage
  }

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
placeholder='Hitta ditt utegym'
keyboardType='default'
keyboardAppearance='default'
onChangeText={searchQuery => setSearchQuery(searchQuery)} // set searchQuery state variable based on input value
>

</TextInput>
        </View>
        </View>

        {filteredLocation.map((location) => (
            
            
        <ListCell
          key={location.id}
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title={location.title}
          points={location.points}
          street={location.street}
          about={location.about}
          onPress={() => handlePress(location)}
        />
      ))}
    </ScrollView>
</View>
    
  )
}

export default Listpage