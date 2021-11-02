
import React from 'react'
import { connect, useDispatch } from 'react-redux' 
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, StatusBar, Linking, ToastAndroid, Alert } from 'react-native'
import { darkTheme, lightTheme } from '../colors'
import { MaterialIcons,  Ionicons  } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import * as Animatable from 'react-native-animatable';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const InfoPage = (props) => {
const [info, setinfo] = React.useState('')
const contact = `https://wa.me/+2348063274275?text=I'm%20interested%20in%20purchasing%20${props.route.params.name}%20displayed%20on%20Agro%20app,%20are%20they%20available?`
const theme = props.route.params.theme
let Bname = String
Bname = props.route.params.Bname




 const purchase = () => {
    Linking.openURL(contact)
    .then(data => {
      console.log("WhatsApp Opened successfully " + data);
      ToastAndroid.show("Opening Whatsapp..", ToastAndroid.SHORT)  //<---Success
    })
    .catch(() => {
      ToastAndroid.show("Couldn't open Whatsapp", ToastAndroid.SHORT)  //<---Error
    });
  }

  const Consent = () =>
  Alert.alert(
    "Contact Sale Agent",
    "This action will open agents contact on Whatsapp",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => purchase() }
    ]
  );

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
function LoadingIndicatorView() {
    return <ActivityIndicator color={lightTheme.primColor} size='large' />
  }

    return (
        <View style={[styles.view, {backgroundColor: `${theme === 'light' ?  lightTheme.backColor : lightTheme.backColor }`, height:   windowHeight}]}>
           <View style={[styles.sView, {height: 0.2*windowHeight}]}>
               <View style={[styles.sHead]}>
            <Animatable.Image animation='fadeInLeftBig' iterationCount={1}   resizeMode='contain' style={styles.sImage} source={{uri: props.route.params.uri}} />
               </View>
               <View style={styles.sHead}>

                   {
                       props.route.params.name === 'Egg' ?  <Text style={{   color:`${theme === 'light'? lightTheme.primColor : darkTheme.primColor}`, fontSize: 25, marginVertical: 3, fontFamily: 'Roboto'}}>Egg as food</Text> :  <Text style={{   color:`${theme === 'light'? lightTheme.primColor : darkTheme.primColor}`, fontSize: 25, marginVertical: 3, fontFamily: 'Roboto'}}>{props.route.params.name}</Text>
                   }
                   

                  
                    {
                       props.route.params.name !== 'Egg' &&  Bname.length >= 19  ?    <Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.textColor}`,fontSize: 16,marginVertical: 2, fontFamily: 'Roboto', opacity: 0.8}}>{props.route.params.Bname}</Text> :
                        <Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.textColor}`,fontSize: 19,marginVertical: 2, fontFamily: 'Roboto', opacity: 0.8}}>{props.route.params.Bname}</Text>
                      }

                    <Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.textColor}`,fontSize: 19,marginVertical: 2, fontFamily: 'Roboto', opacity:0.7}}>Available as: {props.route.params.as}</Text>
                    
               </View>
           </View>


           <View style={[styles.sView ]}>
     <ScrollView  style={{width: '100%', height: 0.65*windowHeight}}>
     <WebView
     style={{width: windowWidth/1.05, height: 0.65 *windowHeight   }}
      
      originWhitelist={['*']}
      source={{ uri: `https://en.wikipedia.org/wiki/${props.route.params.name === 'Egg' ? 'Egg_as_food' : props.route.params.name }` }}
      renderLoading={() => LoadingIndicatorView()}
      javaScriptEnabled={true}
       domStorageEnabled={true}
    />
           </ScrollView>
        
           </View>
   <View style={[styles.sView, {justifyContent: 'center', alignItems: 'flex-end', backgroundColor: 'transparent',marginTop: 0}]}>
     <TouchableOpacity style={[styles.sButton, {backgroundColor: `${ darkTheme.secColor  }`, width: '70%'}]} onPress={Consent}>
                   <Text style={{color:`${lightTheme.backColor }`, fontSize: 18}}>Contact Farm</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.sButton, { width: '20%', backgroundColor:`${theme === 'light' ?  'rgba(0,0,0,0.3)' : darkTheme.primColor }`, borderRadius:20 }]}>
               <Ionicons name='bookmark-outline' color={  lightTheme.backColor  } size={20}/>
               </TouchableOpacity>
</View>
          
      
        </View>
    )
}

const mapStateToProps = (store) => ({
 
    theme: store.themeState.theme

})
export default connect(mapStateToProps, null)(InfoPage)

const styles = StyleSheet.create({
    view: {

        flex: 1,
        alignItems: 'center',
       paddingHorizontal: 5,
       paddingVertical:5,
       width: '100%',
       marginTop: StatusBar.currentHeight,
       display: 'flex',
       
       
    },
    sView: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        
       
    },
    sImage: {
        width: 100,
      height: 100,
     aspectRatio: 4/3
    },
    sHead: {
       
     marginBottom:10,
    
       
    },
    sButton: {
        
        padding: 20,
        width: `100%`,
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 2
    }
})
