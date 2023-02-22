import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';

const Signup = ({navigation}) => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [username, setUsername] = useState('');
  
  const [fontsLoaded] = useFonts({
  Inter_900Black
  });
  
  if (!fontsLoaded) {
    return null;
  }

return (
<View style={styles.container}>
<View style={styles.topView}>
       <Text style={styles.logoText1}>Träna Ute</Text>
       <Ionicons name="barbell-outline" size={42}></Ionicons>
      </View>
      <View style={styles.signupView}>
      <Text style={styles.txtSignup}>Create Account</Text>
      </View>
      <View style={styles.inputView}>
      <View style={styles.icon}>
      <MaterialIcons name="person" size={24} color="#003f5c" />
      </View>
        <TextInput
        style={styles.textInput}
        placeholder='Username'
        placeholderTextColor='#003f5c'
        onchangeText={(username) => setUsername(username)} 
        />
        </View>
        <View style={styles.inputView}>
        <View style={styles.icon}>
        <MaterialIcons name="email" size={24} color="#003f5c" />
      </View>
        <TextInput
        style={styles.textInput}
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
        style={styles.textInput}
        placeholder='Password'
        placeholderTextColor='#003f5c'
        onchangeText={(password) => setPassword(password)} 
        />
        </View>
        <View style={styles.customBtnView}> 
        <LinearGradient
        // Button Linear Gradient
        colors={['#5AF3AC', '#0CE07E', '#51EFA6',]}
        style={styles.button}>
          <TouchableOpacity style={styles.customBtn}>
<Text style={styles.customBtnTxt}>SIGN UP</Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
        <View style={styles.loginBtnView}>
      {/*   <Button
        title="SIGN UP"
        buttonStyle={{backgroundColor: 'rgba(45, 44, 44, 0.88)', borderRadius: 30, height: 50, padding: 10, borderColor: "black",
        borderWidth: 2}}
        titleStyle={{color: "white"}}
        /> */}
        <View style={styles.bottomView}>
        <Text onPress={() => navigation.navigate("Home")}
        >Already have a account?</Text>
        <Text style={styles.txtbottom}
        onPress={() => navigation.navigate("Login")}
        >Sign in</Text>
        </View>
        </View>
        </View>

);

};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    topView: {
        marginBottom: 50,
        marginTop: 50,
       alignItems: "center"
        
    },
    logoText1: {
fontSize: 42,
fontWeight: '200',
fontStyle: "italic",
alignSelf: 'center',
margin: 5

    },
    logoText: {
        fontSize: 20,
        fontFamily: 'Inter_900Black',
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
    loginBtnView: {
        width: '65%',
        marginBottom: 10,
        marginTop: 10
    },
    textInput: {
        height: 40,
      alignSelf: 'center',
        justifyContent: 'center',
        marginLeft: 5
        
    }, 
    txtSignup: {
        fontSize: 18,
        alignSelf: "flex-start",
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 4
    },
    signupView: { 
        width: '65%'
    },
    bottomView: {
        flexDirection: "row",
       marginTop: 5
    },
    txtbottom: {
        marginHorizontal: 10,
        color: '#43D791'
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
         color: '#FFFF'
       },
       button: {
         borderRadius: 30
       },
       icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
       }

})
export default Signup;