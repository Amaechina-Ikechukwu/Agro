import React from 'react'
import { Image, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import {lightTheme, darkTheme} from '../colors'
import { connect, useDispatch } from 'react-redux' 
import AsyncStorage from '@react-native-async-storage/async-storage';


  

const Weather = (props) => {
    const [theme, setTheme] = React.useState(null)
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

      React.useEffect(() => {
          getTheme()
      }, [getTheme])


    return (
        <View style={{ backgroundColor: `${theme === 'light' ?  lightTheme.backColor:  darkTheme.backColor }`, padding:10, alignItems: 'center'}}>
           
                        
                    <Text  style={[styles.Htext, {color: `${theme === 'light' ? lightTheme.cardText: darkTheme.textColor}`, fontSize: 16, marginVertical: 5, alignItems: 'center'}]}>at  <Text style={{   color:`${theme === 'light'? lightTheme.primColor : darkTheme.secColor}`, fontSize: 16}}>
                {props.place}
                      </Text>, {props.region}. </Text>
            <View style={[styles.Rview,{
 flexDirection: 'row-reverse',justifyContent: 'space-evenly',alignItems: 'center'}]}>


    
             

                 
      
         <View style={{ padding: 5, alignItems: 'center'}}>   
            



                            <Text style={{   color:`${theme === 'light'? lightTheme.secColor : darkTheme.secColor}`, fontSize: 16,padding: 5, }}>  <Text  style={[styles.Htext, {color: `${theme === 'light' ? lightTheme.cardText: darkTheme.textColor}`, fontSize: 16, marginVertical: 5}]}>seems </Text>
                       {props.des.toUpperCase()}
                            </Text>  
                            <Image  
                
                style={styles.Rimage} source={{uri: `https:${props.icon}` }}  />  


     <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: `100%`}}>
    
     <Text style={{   color:`${theme === 'light'? 'rgba(0,0,0,0.3)' : darkTheme.primColor}`, fontSize: 16}}>
                     Temperature
                            </Text>
    
                                <Text style={{   color:`${theme === 'light'? lightTheme.secColor : darkTheme.primColor}`, fontSize: 16}}>
                                 {props.temp}°C
                                </Text>
         </View>


         <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: `100%`}}>
    
    <Text style={{   color:`${theme === 'light'? 'rgba(0,0,0,0.3)' : darkTheme.primColor}`, fontSize: 16}}>
                    Wind Speed
                           </Text>
   
                               <Text style={{   color:`${theme === 'light'? lightTheme.secColor : darkTheme.primColor}`, fontSize: 16}}>
                                {props.speed}
                               </Text>
        </View>

        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: `100%`}}>
    
    <Text style={{   color:`${theme === 'light'? 'rgba(0,0,0,0.3)': darkTheme.primColor}`, fontSize: 16}}>  Humidity
                  
                           </Text>
   
                               <Text style={{   color:`${theme === 'light'? lightTheme.secColor : darkTheme.primColor}`, fontSize: 16}}>
                                  {props.humid} %
                               </Text>
        </View>
        </View> 
   
            </View>
            
        </View>
    )
}

const mapStateToProps = (store) => ({
    products: store.productState.products,
    theme: store.themeState.theme,
    user: store.userState.user,

})



export default connect(mapStateToProps, null)(Weather)

const styles = StyleSheet.create({

    view: {
       
        alignItems: 'center',
       padding: 30
       
    },
    Hview: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        
    },
    Htext: {
        fontSize: 28,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    Rview: {
        width: "100%",
        alignItems: 'center',
    

       
        borderRadius: 0,
      
       
    },
    Rimage: {
        width:50,
        height: 50,
        
    },
    Hrview: {
        height: '80%',
        alignItems: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
     
        borderRadius: 10,
   marginHorizontal: 20
        
       
    },
    Hrimage: {
        height: '50%',
        width: '100%'
    },
})
