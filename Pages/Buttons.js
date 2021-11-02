import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { darkTheme, lightTheme } from '../colors'


export const Buttons = ({buttons, doSomethingNau}) => {

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

    const handleClick = (item,id) => {
        setClicked(id)
        doSomethingNau(item)
    }
    const [clicked, setClicked] = React.useState(0)

    return (
        <View>
            {
                buttons.map((buttonLab, index) => {
                    <TouchableOpacity key={index} onPress={(item) => handleClick(item,index)}  >
                <Text style={ index === clicked ? { color:  `${theme === 'light' ?  lightTheme.primColor : darkTheme.secColor }` } : {color:  `${theme === 'light' ?  lightTheme.cardText : darkTheme.primColor }` } }>{buttonLab}</Text>
                </TouchableOpacity> 
                }
                
                )
            }
        </View>
    )
} 



const styles = StyleSheet.create({})
