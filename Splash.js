
// import React, {useEffect, useState, useRef} from 'react'
// import { ScrollView, StyleSheet, Text, View,Dimensions, SafeAreaView, Image, TouchableOpacity, Animated } from 'react-native'
// import {lightTheme, darkTheme} from './colors'

// import Onboarding from 'react-native-onboarding-swiper';
// import Icon from 'react-native-vector-icons/Ionicons';
// import * as Animatable from 'react-native-animatable';
// // const AnimatedText = Animatable.createAnimatableComponent(Text);
// // const AnimateView = Animatable.createAnimatableComponent(View);



// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// // const myButton = (
// //   <Icon
// //     name="facebook"
// //     backgroundColor="000000"
    
// //   >
// //     Login with Facebook
// //   </Icon.Button>
// // );

// // const customTextButton = (
// //   <Icon.Button name="facebook" backgroundColor="#3b5998">
// //     <Text style={{ fontFamily: 'Arial', fontSize: 15 }}>
// //       Login with Facebook
// //     </Text>
// //   </Icon.Button>
// // );






// const Dots = ({selected}) => {
//   let  backgroundC ;
//   backgroundC = selected ? '#59981A' : '#ffffff'
  
  
//   return (
//     <View style={{
//       width: 15, height: 5, marginHorizontal: 10,backgroundColor: backgroundC, borderRadius: 10
//     }} />
    
  
//   )
// }


// const Skip = ({...props }) => {

//   return (
//   <TouchableOpacity {...props} >
//    <Text style={{color:`grey`, fontSize: 16, marginHorizontal: 10}}> Skip </Text>
//   </TouchableOpacity>
    
  
//   )
// }

// const Next = ({...props}) => {

//   return (
//   <TouchableOpacity {...props} style={{marginHorizontal: 10}}>
//    <Icon name="arrow-forward-outline" color='grey' backgroundColor='transparent' size={25} >
//   </Icon>
//   </TouchableOpacity>
    
  
//   )
// }

// const Done = ({...props}) => {

//   return (
//   <TouchableOpacity {...props} style={{marginHorizontal: 10}}>
//    <Icon name="checkmark-outline" color='#59981A' backgroundColor='transparent' size={25}  >
//   </Icon>
//   </TouchableOpacity>
    
  
//   )
// }





// const Splash = ({navigation}) => {
//   // const [fade ,setFade] = useState(false)
//   // const fadeAnim = useRef(new Animated.Value(0)).current;
//   // // const fadeIn = () => {
  
//   // //   // Will change fadeAnim value to 1 in 5 seconds
//   // //   Animated.timing(fadeAnim, {
//   // //     toValue: 1,
//   // //     duration: 100,
//   // //     useNativeDriver: true
//   // //   }).start(); 
//   // //    setFade(false)
//   // // };

//   // const fadeOut = () => {
    
//   //   // Will change fadeAnim value to 0 in 3 seconds
//   //   Animated.timing(fadeAnim, {
//   //     toValue: 0,
//   //     duration: 100,
//   //     useNativeDriver: true
//   //   }).start();
//   //   setFade(true)
//   // };

//   // const fadeIn = {
//   //   from: {
//   //     opacity: 0,
      
//   //   },
//   //   to: {
//   //     opacity: 1,
//   //   },
//   // };





//   return (
//     // <View>
//     //   <Text>Trying something out</Text>
//     // </View>
//     <Onboarding onDone={ () => navigation.navigate("Sign up")} onSkip={ () => navigation.navigate("Sign up")} transitionAnimationDuration={1500} titleStyles={{fontSize: 34}} DotComponent={Dots}
// SkipButtonComponent={Skip} NextButtonComponent={Next} DoneButtonComponent={Done}  bottomBarColor='rgba(236, 248, 127, 0.8)'


//     pages={[
//       {
//         title: 'Onboarding',
//        image:<TouchableOpacity 
       
//       //  onPress={() => fadeIn()}
//         style={[styles.view,
      
//       // {opacity: fadeAnim}
    
//     ]} 
        
//         >
//         <Text style={styles.sText}>
//           Hey there, wanna eat?
//         </Text>
       
       

//         <Animated.View animation=''fadeIn iterationCount='infinite' duration={1} direction="alternate" style={[styles.sView, styles.scroll, 
          
//           // {opacity: fadeAnim}
          
//           ]}>
//         <Animated.Text style={[styles.sText, {fontSize: 80}]} animation="slideInDown" iterationDelay={0} iterationCount='infinite' direction="alternate">🥜🥐</Animated.Text>
//         <Text style={[styles.sText, {fontSize: 80}]} > 🌽🥒</Text>
//         </Animated.View>

   
      
//         </TouchableOpacity>,
        
//         subtitle: 'Done with React Native Onboarding Swiper',
//       },
//       {
//         image:<View style={styles.view} >
//          <Text style={styles.sText}>
//            Learn things on the go....
//          </Text>
//          <Image style={{width: '100%', height: '80%',  position: 'relative',
//  bottom: '-40%'}} resizeMode='contain' source={require('./icons/info.png')} />
//          </View>,
//          title: 'Onboarding',
//          subtitle: 'Done with React Native Onboarding Swiper',
//        },
//        {
//         image:<View style={styles.view} >
//          <Text style={{ color: '#81B622',
//   fontSize: 32,
//   fontFamily:'Roboto',
//   fontWeight: 'bold', marginLeft: 30}}>
//            You can also make purchases....
//          </Text>
//          <Image style={{width: '100%', height: '80%',  position: 'relative',
//  bottom: '-30%'}} resizeMode='contain' source={require('./icons/pay.png')} />
//          </View>,
//          title: 'Onboarding',
//          subtitle: 'Done with React Native Onboarding Swiper',
//        },
//     ]}
//   />
//   )
// }

// export default Splash

// const styles = StyleSheet.create({
//   view:{
//     alignItems: 'center',
//   justifyContent: 'center',
//   paddingTop: 40,
//   width: windowWidth,
  
// },
// Estyle: {
//   fontSize: 100,
// },
// scroll: {
//   position: 'relative',
//  bottom: '-40%'
// },
// sView: {
//   height: '70%',
//   width: '90%',
//   backgroundColor: '#59981A',
//   alignItems: 'center',
//   justifyContent: 'center',
//   margin: 10,
//   borderRadius: 10,
//   padding: 20
// },
// sText: {
//   color: '#81B622',
//   fontSize: 32,
//   fontFamily:'Roboto',
//   fontWeight: 'bold'
  
// }

// })
