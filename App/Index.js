import { NavigationContainer } from '@react-navigation/native'; 
import { MyTabs } from './navigation/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {UserIcon} from "react-native-heroicons/outline";
import Loginpage from './screens/Loginpage'
import Signuppage from './screens/Signuppage'
import Trainingpage from './screens/Trainingpage'
import Trainingpage2 from './screens/Trainingpage2'




const LoginStack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
      >
        
        <LoginStack.Screen
        name='Login'
        component={Loginpage}
        options={{headerShown: false, headerLeft: null,
          gestureEnabled: false, }}/>
        <LoginStack.Screen
        name='Signup'
        component={Signuppage}
        options={{headerShown: false, headerLeft: null,
          gestureEnabled: false, }}/>
           <LoginStack.Screen
        name='Trainingpage'
        options={{headerShown: false}}
        component={Trainingpage}
          />
             <LoginStack.Screen
        name='Trainingpage2'
        options={{headerShown: false}}
        component={Trainingpage2}
        />
           


        <LoginStack.Screen
        name='Home'
        component={MyTabs}
        options={{
          headerShown: true,
          headerLeft: null,
          headerBackVisible: false,
          headerTitle: props => (
            <View style={{ flexDirection: "row", justifyContent: 'space-between',flex: 1, marginRight: 40, paddingBottom: 10, alignItems: 'center' }}>
               <Text style={styles.headline}>Träna Ute</Text>
               <TouchableOpacity>
              <UserIcon size={25} color='#00CCBB' />
              </TouchableOpacity>
            </View>
          ),
        }} 
        />
       

      </LoginStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF8F7',
  },
    headline: {
      color: 'black',
      fontSize: 24,
      fontWeight: 'bold',
    }
  });