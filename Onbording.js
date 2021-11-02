import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View,Button, TouchableOpacity } from 'react-native'
import { lightTheme } from './colors'
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const storeOB = async (val) => {
    try {
      await AsyncStorage.setItem('OB', val)
      .then(
        
      )
    }
  catch (e) {
        
    }
  }
 const getOB = async () => {
    try {
      const value = await AsyncStorage.getItem('OB').then(
      
    )
      if(value === 'true') {
     
       
      }
      else if (value === 'false') {
       
      }
    } catch(e) {
     
    }
  }

const Images = () => {
    return(
    <View style={[{display:'flex', flexDirection: 'row',paddingHorizontal:20, width: windowWidth, justifyContent: 'space-evenly',}]}>
         <Image style={[styles.sImage, {width: windowWidth*0.7,position: 'relative' , top: -50}]} resizeMode='contain' source={require('./icons/Unews.png')} />
         <Image  style={[styles.sImage, {width: windowWidth*0.7, position: 'relative' , top: 50}]} resizeMode='contain' source={require('./icons/Uweather.png')} />
    </View>)
}

const Next = ({  ...props }) => (
  <TouchableOpacity style={{padding:10}} {...props} >
      <Text style={{color: lightTheme.primColor, fontSize: 15}}>Next </Text>
  </TouchableOpacity>
  );

  const Skip = ({  ...props }) => (
    <TouchableOpacity style={{padding:10}} {...props} >
    <Text style={{color: lightTheme.cardText, fontSize: 15}}>Skip </Text>
</TouchableOpacity>
  );

  const Dots = ({selected}) => {
      let backgroundColor;
      backgroundColor = selected ? lightTheme.secColor : lightTheme.cardText;
      return (
          <View style={{
              width: 10,
              height: 7,
              marginHorizontal: 5,
              borderRadius: 3,
              backgroundColor
          }} />
      )
  }

const Onbordinng = ({navigation}) => {
    return (
      <Onboarding 
      onSkip={() => navigation.replace('Sign Up')}
      onDone={() =>navigation.navigate('Sign Up')}
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DotComponent={Dots}
      pages={[
          {
              backgroundColor: '#fff',
              image: <Image style={styles.sImage} source={require('./icons/Ulist.png')} />,
              title: 'Connect To A Farm',
              subtitle:'See listings of products in a farm',
              subTitleStyles:{
                color: lightTheme.cardText
            },
            titleStyles: {
                color: lightTheme.primColor, fontFamily:'Roboto'
            }
          },
          {
            backgroundColor: lightTheme.backColor,
            image: <Image style={styles.sImage}  source={require('./icons/Ucontact.png')} />,
            title: 'Connect Through Whatsapp',
            subtitle:'Negotiate with a sales agent through whatsapp from the app with message tailored from the product of your choice',
            subTitleStyles:{
                color: lightTheme.cardText
            },
            titleStyles: {
                color: lightTheme.primColor, fontFamily:'Roboto'
            }
        },
        {
            backgroundColor: lightTheme.backColor,
            image: <Image style={styles.sImage}  source={require('./icons/Uknow.png')} />,
            title: 'Get More Knowledgable',
            subtitle:'Read more about the product of your choice from Wikipedia directly from your app',
            subTitleStyles:{
                color: lightTheme.cardText
            },
            titleStyles: {
                color: lightTheme.primColor, fontFamily:'Roboto'
            }
        },
        {
            backgroundColor: lightTheme.backColor,
            image:  <Images />,
            title: 'Stay Updated',
            subtitle:'Provides hourly conditions and gets you the latest news',
            subTitleStyles:{
                color: lightTheme.cardText
            },
            titleStyles: {
                color: lightTheme.primColor, fontFamily:'Roboto'
            }
        },

      ]}
      
      
      />
    )
}

export default Onbordinng

const styles = StyleSheet.create({
    sImage: {
        width: windowWidth ,
        height: windowHeight*0.50
    }
})
