import * as React from 'react';

import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert, TextComponent } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter'
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { LinearGradient } from 'expo-linear-gradient';



const HomeScreen1 = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  
  const [fontsLoaded] = useFonts({
  Inter_900Black
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
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
       <Text style={styles.logoText1}>Träna Ute</Text>
      <Ionicons name="barbell-outline" size={42}></Ionicons>
      </View>
      <View style={styles.signupView}>
      <Text style={styles.txtSignup}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <View style={styles.icon}>
        <MaterialIcons name="email" size={24} color="#003f5c" />
      </View>
        <TextInput
        style={styles.TextInput}
        placeholder='Email'
        placeholderTextColor='#003f5c'
        onchangeText={(email) => setEmail(email)} 
        />
        </View>

      
        <View style={styles.inputView}>
        <View style={styles.icon}>
        <Entypo name="lock" size={24} color="#003f5c" />
        </View>
         <TextInput
        style={styles.TextInput}
        placeholder='Password'
        placeholderTextColor='#003f5c'
        onchangeText={(password) => setPassword(password)} 
        />
        </View>
       {/*  <View style={styles.loginBtnView}>
        <Button
        title="LOGIN"
        buttonStyle={{backgroundColor: '#43D791',
        borderRadius: 30, height: 50, padding: 10, borderColor: "#47CC8D",
        borderWidth: 2}}
        titleStyle={{color: "white", fontSize: 14, fontWeight: 'bold'}}
        /> 
        </View> */}
        <View style={styles.customBtnView}> 
        <LinearGradient
        // Button Linear Gradient
        colors={['#5AF3AC', '#0CE07E', '#51EFA6']}
        style={styles.button}>
          <TouchableOpacity style={styles.customBtn}>
<Text style={styles.customBtnTxt}>LOGIN</Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
<View style={styles.touchableForgot}> 
        <TouchableOpacity style={styles.touchableString}
        onPress={passwordAlert}
        >
          <Text style={styles.txtbottom1}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.txtbottom}
           onPress={() =>
            navigation.navigate('Signup')
          }
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
      fontSize: 20,
      fontFamily: 'Inter_900Black',
      
    },
    logoText1: {
  fontSize: 42,
  fontWeight: '200',
  fontStyle: "italic",
  margin: 5
    },
    logoText2: {
      fontSize: 20,
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
          fontSize: 20,
          alignSelf: "flex-start",
          fontWeight: 'bold',
        marginBottom: 4,
          marginLeft: 8
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
      }
      })

      export default HomeScreen1;