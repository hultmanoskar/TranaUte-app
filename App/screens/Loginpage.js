import * as React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert} from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';


//TODO: // Create the auth process and Firebase for the project.

//TODO: Firebase project set up 
//TODO: Auth flow for login



const Loginpage = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  
  /* const [fontsLoaded] = useFonts({
  Inter_900Black
  });
  
  if (!fontsLoaded) {
    return null;
  } */
  
  const passwordAlert = () => 
  Alert.alert(
    "Alert Title",
    "New Alert",
    [
      {
        text: "Close",
        onPress: () => console.log("Alert dissmissed")
      }
    ]
  )

    return (

<View style={styles.container}>
      <View style={styles.topView}>
       <Text style={styles.logoText}>Träna Ute</Text>
      <Ionicons name="barbell-outline" size={40}></Ionicons>
      </View>
      <View style={styles.signupView}>
      <Text style={styles.txtSignup}>Login</Text>
      </View>

          {/* Input fields -- Email, password  */}

      <View style={styles.inputView}>
        <View style={styles.icon}>
        <MaterialIcons name="email" size={20} color="#003f5c" />
      </View>
        <TextInput
        style={styles.TextInput}
        placeholder='Email'
        placeholderTextColor='#003f5c'
        onchangeText={(email) => setEmail(email)}/>
        </View>
        <View style={styles.inputView}>
        <View style={styles.icon}>
        <Entypo name="lock" size={20} color="#003f5c" />
        </View>
         <TextInput
         secureTextEntry={true}
        style={styles.TextInput}
        placeholder='Password'
        placeholderTextColor='#003f5c'
        onchangeText={(password) => setPassword(password)} 
        />
        </View>
        <View style={styles.customBtnView}> 
       
        {/* Button Linear Gradient */}
        <LinearGradient
        colors={['#5AF3AC', '#0CE07E', '#51EFA6']}
        style={styles.button}>
          <TouchableOpacity style={styles.customBtn}>
          <Text style={styles.customBtnTxt}>LOGIN</Text>
          </TouchableOpacity>
          </LinearGradient>
          </View>
          <View style={styles.touchableForgot}> 
          <TouchableOpacity
           onPress={passwordAlert}>
          <Text style={styles.txtbottom1}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
            navigation.navigate('Signup')}>
          <Text style={styles.txtbottom}
          >Sign up</Text>
        </TouchableOpacity>
        </View>
      
      </View> 


     
    );
  };

  const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoText: {
      fontSize: 32,
      margin: 5
      
    },
        inputView: {
          borderRadius: 20,
          width: '65%',
          height: 50,
          marginTop: 10,
          marginBottom: 10,
         borderWidth: 2,
         flexDirection: 'row'
        
        }, 
        TextInput: {
          height: 40,
          padding: 0,
        alignSelf: 'center',
          justifyContent: 'center',
          marginLeft: 5
         
        },
        touchableForgot: {
          flexDirection: 'row',
          marginTop: 10
        },
        topView: {
          marginBottom: 50,
          alignItems: 'center'
        },
        loginBtnView: {
          width: '65%',
          marginTop: 10,
        },
        txtSignup: {
          fontSize: 18,
          alignSelf: "flex-start",
        marginBottom: 4,
          marginLeft: 8,
      },
      signupView: { 
          width: '65%',
          
      },
      txtbottom: {
        color: '#43D791',
        marginHorizontal: 10
      }, 
      txtbottom1: {
        marginHorizontal: 10
      },
      icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
      },
      customBtnView: {
        width: '65%', marginTop: 10
      }, 
      customBtn: {
       /*  backgroundColor: '#43D791', */
        borderRadius: 30, height: 50,
        borderWidth: 2, alignItems: 'center', justifyContent: 'center', borderColor: '#0DE47F'
        
      },
      customBtnTxt: {
        fontWeight: 'bold',
        color: '#FFFF',
      },
      button: {
        borderRadius: 30
      },
      })

      export default Loginpage;