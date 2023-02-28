import { NavigationContainer } from '@react-navigation/native'; 
import { MyTabs } from './navigation/BottomTabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginpage from './screens/Loginpage';
import Homepage from './screens/Homepage';
import Signuppage from './screens/Signuppage'


const LoginStack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <LoginStack.Navigator
      screenOptions={{headerShown: false}}>
        <LoginStack.Screen
        name='Login'
        component={Loginpage}/>
        <LoginStack.Screen
        name='Signup'
        component={Signuppage}/> 
        <LoginStack.Screen
        name='Home'
        component={MyTabs}
        />
      </LoginStack.Navigator>
      
    </NavigationContainer>
  );
}