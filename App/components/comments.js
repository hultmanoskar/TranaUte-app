 {/*  <View style={{ backgroundColor: 'lightblue', height: 160,
    justifyContent: 'center' }}> */}
      {/*   <Svg
          height="55%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
          <Path
            fill="lightblue"
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg> */}
        {/* <View style={styles.blueContainer}> */}
        {/* <Text style={styles.subHeadline}>{datum}</Text> */}





        {/* <Text style={styles.headline}>Träna Ute</Text>
        <TouchableOpacity>
        <Ionicons style={styles.icon} name='settings-outline' size={25} color='#00CCBB' />
        </TouchableOpacity>
        </View> */}
        {/* </View> */}

         /*  <SafeAreaView style={styles.container}>
    <View style={styles.topContainer}>
    <Text style={styles.headline}>Träna Ute</Text>
    </View>
    <View style={styles.topContainer}>
    <Text style={styles.headline}>Träna Ute</Text>
    </View>
    
    </SafeAreaView> */

      {/*    <View style={styles.categoryView}>
        <Text style={styles.categoryTxt}>Högst rankade</Text>
        <ArrowSmallRightIcon size={25} color="#00CCBB" />
        </View> */}


         {/*  <LoginStack.Screen
        name='Login'
        component={Loginpage}/>
        <LoginStack.Screen
        name='Signup'
        component={Signuppage}/>  */}


        function LogoTitle() {
            return (
              <View style={styles.blueContainer}>
                 <Text style={styles.headline}>Träna Ute</Text>
                  <TouchableOpacity>
                  <Ionicons style={styles.icon} name='settings-outline' size={25} color='#00CCBB' />
                  </TouchableOpacity>
                  </View>
            );
          }

          /*         options={{ headerTitle: (props) => <LogoTitle {...props} />  ,headerTitleAlign: 'left', justifyContent: 'space-between'}} */




           {/*   <Button
        title="SIGN UP"
        buttonStyle={{backgroundColor: 'rgba(45, 44, 44, 0.88)', borderRadius: 30, height: 50, padding: 10, borderColor: "black",
        borderWidth: 2}}
        titleStyle={{color: "white"}}
        /> */}

         /*  const [fontsLoaded] = useFonts({
  Inter_900Black
  }); */

  if (!fontsLoaded) {
    return null;
  }
