import React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Svg, { Path } from 'react-native-svg';
import { Card } from '../components/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';


const mydate = new Date();
const datum = mydate.toDateString();




function Homepage() {
  return (
<View style={styles.container}>
      <View style={{ backgroundColor: 'lightblue', height: 160,
    justifyContent: 'center' }}>
        <Svg
          height="55%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
          <Path
            fill="lightblue"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
        <View style={styles.blueContainer}>
        {/* <Text style={styles.subHeadline}>{datum}</Text> */}
        <Text style={styles.headline}>Träna Ute</Text>
        <TouchableOpacity>
        <Ionicons style={styles.icon} name='settings-outline' size={20} color='black' />
        </TouchableOpacity>
        </View>
        </View>
       <View style={styles.txtChallenge}>
        <Text>Redo för en utmaning?</Text>
        </View>
        <View style={styles.secondContainer}>
           <Card />
           <Card /> 
      </View>
      <View style={styles.txtChallenge}>
        <Text>Second challenge</Text>
      </View>

      </View>

   /*  <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
    <Text style={styles.headline}>Träna Ute</Text>
    </View>
    <View style={styles.topContainer}>
    <Text style={styles.headline}>Träna Ute</Text>
    </View>
    </SafeAreaView> */
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    
  },
  blueContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
paddingHorizontal: 20,
textAlign: 'center',

  },
  headline: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  
    
  }, 
  icon: {
        },
        topContainer: {
    backgroundColor: '#3d06d6',
    height: hp('20%'),
    padding: 10,
    borderBottomLeftRadius:90,
    borderBottomRightRadius: 90,
  }, 
  secondContainer: {
   justifyContent: 'space-evenly',
    flexDirection: 'row',
    height: '40%'
  },
  subHeadline: {
    fontSize: 14,
    color: 'black',
    
  },
  txtChallenge: {
    marginTop: 50,
    marginBottom: 10,
    marginHorizontal: 24
  }
});

export default Homepage;