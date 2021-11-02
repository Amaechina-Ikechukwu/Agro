
import React, { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar, ImageBackground, Alert, ToastAndroid } from 'react-native'
import { Popover, Button, Box, Center, NativeBaseProvider } from "native-base"
import { connect, useDispatch } from 'react-redux' 
import { setDark } from '../redux/actions'
import {fetchProducts, fetchIsUser} from '../redux/actions/index'
import { setLight } from '../redux/actions'
import { MaterialIcons,  Ionicons  } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {lightTheme, darkTheme} from '../colors'
import food from './list'
import { bindActionCreators } from 'redux'
import firebase from 'firebase'
import Freshy from '../Main'
import * as Location from 'expo-location';
import Weather from './Weather'
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {QAPI} from "@env"


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const FrontPage = (props, {navigation}) => {
const [theme , setTheme] = useState(null)
const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [apiData, setApiData] = useState({});
const [icon, seticon] = useState(null);
const [des, setdes] = useState('');
const [place, setplace] = useState('');
const [temp, settemp] = useState('');
const [speed, setspeed] = useState('');
const [humid, sethummid] = useState('');
const [load, setLoad] = useState(false)
const [region, setRegion] = useState('')
let long 
let lat
const qapi= `36e66204cd0f4b7facb141330210308`
const api = `d11a7bb12225324bbaa2c5b9f5e0afd5`
// const OW = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api}`

const wapi = `https://api.weatherapi.com/v1/current.json?key=${qapi}&q=${lat},${long}`

const storeTheme = async (val) => {
    try {
      await AsyncStorage.setItem('Theme', val)
      .then(
       
      )
    }
  catch (e) {
       
    }
  }

  
const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('Theme').then(
        
    )
      if(value !== null) {
        setTheme(value);
       
      }
    } catch(e) {
        
    }
  }
  
  


const pung = `8Erurz1u3pORgo5TYJk3BxKq5vpOs3UFa5UvLtp0`
    const  dispatch = useDispatch()
    const light = () => {
      dispatch(setLight())
         storeTheme('light');
     getTheme()
     }
    const dark = () => {
     dispatch(setDark())
     storeTheme('dark');
    getTheme()
    }
        
    

   
    

   useEffect(() => {
       dispatch(fetchProducts());
       (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location)
        setLoad(true);
        long = location.coords.longitude;
        lat = location.coords.latitude;

    getWeather() 
    
      })();
     
      getTheme();

         
             
       
   
   },[])




const getWeather = async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${QAPI}&q=${lat},${long}`);
    const data = await response.json()

    
    setdes(data.current.condition.text)
    setplace(data.location.name)
    seticon(data.current.condition.icon)
    sethummid(data.current.humidity)
    settemp(data.current.temp_c)
    setspeed(`${data.current.wind_mph}mph`)
    setRegion(`${data.location.region} State`)
 
   
}
 
    return (
        // <View style={[styles.view, {backgroundColor: `${theme === 'light' ?  lightTheme.cardText : darkTheme.backColor }`, marginTop: StatusBar.currentHeight-10}]}>
            <SafeAreaView style={[styles.view, {
                marginTop: StatusBar.currentHeight,
            backgroundColor: `${
                theme === 'light' ?  '#E0E0E0' : darkTheme.backColor }`, height: windowHeight-StatusBar.currentHeight,   }]}>

{
                    theme === 'dark' ?       <StatusBar barStyle = "dark-content" hidden = {false} translucent = {true} backgroundColor='white'/> :  <StatusBar barStyle = 'light -content' hidden = {false} translucent = {true}  backgroundColor='black'/> 

                  }

            <View style={[styles.Hview, {backgroundColor: `${theme === 'light' ?   '#E0E0E0' : darkTheme.backColor }`,  } ]}>
                <View style={{alignItems:'center' ,display: 'flex', flexDirection: 'row'}}>
                <Text  style={[styles.Htext, {color: `${theme === 'light' ? lightTheme.primColor : darkTheme.secColor}`, marginRight: 5, fontSize: 16}]} >
                Hey there,
               
                </Text>
                {/* <TouchableOpacity onPress={() => props.navigation.navigate('Info')}> */}
    {/* <Icon name='person-outline' size={20} color={theme === 'light' ?   '#000' : `${darkTheme.primColor}` }  /> */}
    {
        firebase.auth().currentUser !== null ?  <Image style={{height: 20, width: 20}} source={{uri: `https://ui-avatars.com/api/?name=${firebase.auth().currentUser.email}&background=${theme === 'light' ?    'E0E0E0' : '121212'}&color=${theme === 'light' ?   '121212' : 'ffffff'}&font-size=0.8&opacity=8`}}/> : null
    }
   
{/* </TouchableOpacity> */}
</View>

                <View style={[ {  justifyContent:'space-around',
        flexDirection: 'row', width: '25%'}]}>
<NativeBaseProvider>
<TouchableOpacity  onPress={() => props.navigation.navigate('News')  }  >
< Ionicons  name='newspaper-outline' size={20}  color={theme !== 'light' ?   lightTheme.backColor : darkTheme.backColor } style={{opacity: 0.8}} />
</TouchableOpacity> 
</NativeBaseProvider>

            
            <NativeBaseProvider>
      <Popover
        trigger={(triggerProps) => {
          return (
         des !== '' ? 
            <TouchableOpacity {...triggerProps}>
            < Ionicons  name='cloud-circle-outline' size={22} color={theme === 'light' ?   lightTheme.primColor : darkTheme.secColor }  />
        </TouchableOpacity>  : null 
            
          )
        }}
      >
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow />
         
          <Popover.Header>Todays Weather</Popover.Header>
          <Popover.Body>
          <Weather  place={place} des={des} speed={speed} icon={icon} temp={temp} humid={humid}  region={region} /> 
          </Popover.Body>
        
        </Popover.Content>
      </Popover>
    
    </NativeBaseProvider>
                  {/* <TouchableOpacity onPress={() => props.navigation.navigate('Info')}>
    <Icon name='bookmark-outline' size={20} color={theme === 'light' ?   lightTheme.primColor : darkTheme.secColor }  />
</TouchableOpacity>   */}


{
    theme === 'light' ? 
    <TouchableOpacity onPress={dark}>


    < Ionicons  name='moon-outline' size={20} color={ darkTheme.backColor} style={{opacity: 0.8}}  />
</TouchableOpacity>   :    <TouchableOpacity onPress={light}>
    < Ionicons  name='sunny-outline'  size={20} color={ lightTheme.backColor} style={{opacity: 0.8}}  />
</TouchableOpacity>   
}
                </View>

            </View>



        
              
            {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
            {
 props.user === false ? <Text style={{color:'rgba(255, 0, 0, 0.5)', fontSize: 20, marginTop: 10}}>Please create profile</Text> : null
}



           

         {/* {
             load !== false ? 
             <Animatable.View animation='bounceIn' iterationCount={1} direction="alternate" style={{marginVertical: 2, width: '100%'}}> 
                  <Weather  place={place} des={des} speed={speed} icon={icon} temp={temp} humid={humid}  /> 
                  </Animatable.View>
           

:
 <View></View>

         }           */}
                 
  
              

                   
                
                 {/* <SafeAreaView style={{width: '100%', padding: 10, backgroundColor: `${theme === 'light' ?  lightTheme.backColor : darkTheme.backColor }`, }}> */}
                    <Text  style={[styles.Htext, {color: `${theme === 'light' ? lightTheme.cardText : darkTheme.primColor}`, fontSize: 16, paddingHorizontal: 15}]}>Available Produce</Text>

                    <FlatList showsVerticalScrollIndicator={false}   style={{width: '100%', padding: 10, }}
                     keyExtractor={(item, index) =>{ item.name 
                     }}
                     
                     data={props.products}
                     renderItem={({item}) => (


<SafeAreaView key={item.name} style={[ {backgroundColor: `${theme === 'light' ?   '#E0E0E0' : darkTheme.backColor }`,width: '100%',  }]}>

        
<ImageBackground  imageStyle={{borderRadius: 5, }} source={{uri: item.img}} key={item.name} style={[ styles.Rview, {padding: 0, flexDirection: 'column-reverse' , justifyContent: 'flex-start',height: windowHeight*0.60  
}
 ]}>


<View style={{ alignItems: 'center',     
flexDirection: 'column', justifyContent: 'space-evenly',backgroundColor: `${theme === 'light' ?  lightTheme.backColor : '#0f0f0f' }`,width: '100%',paddingVertical:20, paddingHorizontal: 10,height: '50%', 
borderBottomEndRadius: 5, borderBottomStartRadius: 5,
// shadowColor: `${theme === 'light' ?  'rgba(18,18,18,0.6)' : '#ffffff' }`,
// shadowOffset: {
// width: 0,
// height: 6,
// },
// shadowOpacity: 0.39,
// shadowRadius: 4.30,

// elevation: 5,
}}>


<View  style={{display: 'flex', flexDirection: 'column',  width: '100%',  }}>
<Text style={{   color:`${theme === 'light'? lightTheme.primColor : darkTheme.secColor}`, fontSize: 22,  fontFamily: 'Roboto',}}>
{item.name}
</Text>
{
  item.name === 'Egg' ? null: 
  <Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 19,  fontFamily: 'Roboto',}}>
  {item.Bname}</Text>
}

<Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 17,  fontFamily: 'Roboto', opacity: 0.8}}>
Avaliable as: {item.as}
</Text>
<Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 15,  fontFamily: 'Roboto',opacity: 0.7}}>
Benefits: {item.benefits}
</Text>
</View>

<View style={{ alignItems: 'flex-end', width: '100%', padding:10, backgroundColor: 'transparent', justifyContent: 'center'}}>
<TouchableOpacity onPress={() => props.navigation.navigate('Info', {name: item.name, Bname:item.Bname, as:item.as, theme: theme, uri: item.img})} 
style={{shadowColor: `${theme === 'light' ?  'rgba(18,18,18,0.6)' : '#ffffff' }`,
  borderRadius: 500, alignItems: 'center', justifyContent: 'center', width: 50  , height: 50   
} } 
>
< Ionicons  name='caret-forward-circle-outline' size={40} color={darkTheme.secColor }  />
</TouchableOpacity>
</View>
</View>

</ImageBackground>
</SafeAreaView>
                 
  )} />

                   
                </SafeAreaView>
                // </SafeAreaView>
        // </View>

        
    )
}



const mapStateToProps = (store) => ({
    products: store.productState.products,
    theme: store.themeState.theme,
    user: store.userState.user,

})



export default connect(mapStateToProps, null)(FrontPage)

const styles = StyleSheet.create({
    view: {
        flex: 1,
    
      
     
       
    },
    Hview: {
    
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 15,
        
    },
    Htext: {
        fontSize: 28,
        fontFamily: 'Roboto',
       
    },
    Rview: {
           alignItems: 'center',
        
  
height: windowHeight*0.50,
        padding: 10,
        
   marginVertical: 15,
   marginHorizontal: 2.5,
  
       
    },
    Rimage: {
        width: 180,
        height: 120,
        aspectRatio: 3/4
    },
    Hrview: {
        height: '80%',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
     
        borderRadius: 10,
 
        
       
    },
    Hrimage: {
        height: '50%',
        width: '100%'
    },


})


