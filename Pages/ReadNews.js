import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet,  TouchableOpacity, View, Dimensions, FlatList, StatusBar,Text, ActivityIndicator, ImageBackground, Image, ScrollView } from 'react-native'
import { darkTheme, lightTheme } from '../colors'
import { WebView } from 'react-native-webview';
import AsyncStorage from '@react-native-async-storage/async-storage';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ReadNews = (props) => {

    
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
 const   {title, content,author,date,source, url} = props.route.params
    return (
        <View  style={{width: '100%', height: windowHeight, marginTop: StatusBar.currentHeight}}>
          <ScrollView  style={{width: '100%', height: windowHeight}}>
     <WebView
     style={{width: windowWidth, height: windowHeight   }}
      
      originWhitelist={['*']}
      source={{ uri: url}}
      renderLoading={ () =>  <ActivityIndicator size='large' color={theme === 'light' ?   lightTheme.primColor : darkTheme.secColor }  />}
      javaScriptEnabled={true}
       domStorageEnabled={true}
    />
           </ScrollView>
        </View>
    )
}

export default ReadNews

const styles = StyleSheet.create({})
