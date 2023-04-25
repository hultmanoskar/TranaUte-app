import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../screens/Homepage";
import Mappage from "../screens/Mappage";
import Likespage from "../screens/Likespage";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Listpage from "../screens/Listpage";




const Tab = createBottomTabNavigator();

 export function MyTabs() {
  return (
    
      <Tab.Navigator
         screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Homepage') {
              iconName = focused
                ? 'home-sharp'
                : 'home-outline';
            } else if (route.name === 'Like') {
              iconName = focused
               ? 'heart-sharp' 
               : 'heart-outline';
            } else if (route.name === 'List') {
              iconName = focused
               ? 'map-sharp' 
               : 'map-outline';
            } else {
              iconName = focused 
              ? 'location-sharp' 
              : 'location-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName}size={size} color={color} />
          },
          tabBarActiveTintColor: '#00CCBB',
          tabBarInactiveTintColor: 'black',
          
        })}
      >
      <Tab.Screen name="Homepage" component={Homepage} headerShown={true} />
      <Tab.Screen name="Map" component={Mappage}  />
      <Tab.Screen name="Like" component={Likespage} />
      <Tab.Screen name="List" component={Listpage} headerShown={false} />
      
      
    </Tab.Navigator>
    

    );
    }

   