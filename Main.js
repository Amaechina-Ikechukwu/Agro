import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import { connect, useDispatch } from 'react-redux' 
import {lightTheme, darkTheme} from './colors'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';


const Freshy = (props, {navigation}) => {

  
    return (
        <View key={props.key} style={[ {backgroundColor: `${props.theme === 'light' ?  lightTheme.backColor : darkTheme.backColor }`,width: '50%'}]}>

        
        <ImageBackground  imageStyle={{borderRadius: 5, }} source={{uri: props.item.img}} key={props.item.id} style={[ styles.Rview, {padding: 0, flexDirection: 'column-reverse' , justifyContent: 'flex-start',  
    }
         ]}>
 

        <View style={{ alignItems: 'center',     display: 'flex',
flexDirection: 'column', justifyContent: 'space-evenly',backgroundColor: `${props.theme === 'light' ?  lightTheme.backColor : darkTheme.backColor }`,width: '100%', height: '50%', borderBottomEndRadius: 5, borderBottomStartRadius: 5,shadowColor: "#000",
shadowOffset: {
    width: 0,
    height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 8.30,

elevation: 5,
}}>
       
    
    <View  style={{display: 'flex', flexDirection: 'column', padding: 10, width: '100%'  }}>
        <Text style={{   color:`${props.theme === 'light'? lightTheme.primColor : darkTheme.backColor}`, fontSize: 19,  fontFamily: 'Roboto',}}>
    {props.item.name}
        </Text>
        <Text style={{   color:`${props.theme === 'light'? lightTheme.cardText : darkTheme.backColor}`, fontSize: 15,  fontFamily: 'Roboto',}}>
    {props.item.Bname}
        </Text>
        <Text style={{   color:`${props.theme === 'light'? lightTheme.cardText : darkTheme.secColor}`, fontSize: 13,  fontFamily: 'Roboto',}}>
   Calories: {props.item.calories}
        </Text>
    </View>

    <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%', padding:10}}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Info')}>
            <Text style={{   color:`${props.theme === 'light'? lightTheme.secColor : darkTheme.backColor}`, fontSize: 15,  fontFamily: 'Roboto',}}>More Info</Text>
              </TouchableOpacity>
        

        <TouchableOpacity >


<Icon name='star-outline' size={20} color={ darkTheme.backColor}  />
</TouchableOpacity>
    </View>
        </View>
    
    </ImageBackground>
    </View>
    )
}

const mapStateToProps = (store) => ({
    products: store.productState.products,
    theme: store.themeState.theme,
    user: store.userState.user,

})
export default connect(mapStateToProps, null) (Freshy)

const styles = StyleSheet.create({
    Rview: {
       
        alignItems: 'center',
        
  
height: 200,
        padding: 10,
        
   marginVertical: 15,
   marginHorizontal: 2.5,
  
   
        
       
    },
    Rimage: {
        width: 100,
        height: 55,
        aspectRatio: 15/7
    },
})
