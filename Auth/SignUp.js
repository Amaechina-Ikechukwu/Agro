import React, {useState, useEffect} from 'react'
import {lightTheme, darkTheme} from '../colors'
import { ScrollView, StyleSheet, Text, View,Dimensions, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ToastAndroid, StatusBar, ActivityIndicator } from 'react-native'
import Login from './Login'
import firebase from "firebase";
import "firebase/auth";
import {icon} from '../img.js'
import { Box, Center, NativeBaseProvider, Popover } from 'native-base';



export const Log = () => {
  return (
    < View style={[{display: 'flex', flexDirection: 'row',  alignItems:"center", }]}>
        <Text style={[ {color: lightTheme.backColor, fontSize: 18}]} >Please Wait</Text>
        <ActivityIndicator size='small' color={lightTheme.secColor} />
     </View>
  )
}

const SignUp = (props, {navigation}) => {

    

    const [open, setOpen] = useState(false)
    const [ email, setEmail ] = useState('')
    const [ pword, setPword ] = useState('')
    const [ cPword, setCpword ] = useState('')
    const [log, setLog] = useState(false)

   

let err

let Result

    const verify = () => {
        firebase.auth().currentUser.sendEmailVerification()
        .then((result) => {
         
        })
        .catch( error => {
            showToast(error.message) 
           
          })
       }


    const handlePress = () => {
       
             
              firebase.auth().createUserWithEmailAndPassword(email, pword)
              .then( result => {
              
                firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid).set({})
              
      } )
      .catch( error => {
        showToast(error.message) 
        setLog(false)      
      })

      setLog(!log)
  
   }


   const showToast = (result) => {
    ToastAndroid.show(result, ToastAndroid.LONG);
  };

    return (
        <SafeAreaView style={styles.view}>
       
<View>
<Image resizeMode='contain' source={{uri: icon}} style={styles.sImg} />
 </View>
        
          
           
                 <TextInput onChangeText={(email) => setEmail(email)} style={styles.lText} placeholder='Email'/>  
                 <TextInput secureTextEntry onChangeText={(pword) => setPword(pword)} style={styles.lText} placeholder='Password'/>
                 <TextInput secureTextEntry onChangeText={(cpword) => setCpword(cpword)} style={styles.lText} placeholder='Confirm Password'/>  

   {
  pword ===cPword && cPword !== '' && pword.split('').length > 6 && cPword.split('').length > 6 ?     <TouchableOpacity style={styles.sButton} onPress={() => handlePress()}>
     {
       log ? <Log /> : 
      
       <Text style={{color:`${lightTheme.backColor}`, fontSize: 18}}>Sign Up</Text>
       
     }
      
</TouchableOpacity> :    <TouchableOpacity style={[styles.sButton, {backgroundColor: `rgba(0,0,0, 0.5)`}]} >
                   <Text style={{color:`${lightTheme.backColor}`, fontSize: 18}}>Sign Up</Text>
               </TouchableOpacity>
}  
            
               

  {
  pword !==cPword && cPword !== '' && pword.split('').length > 6 && cPword.split('').length > 6 ?  <Text style={{color:'rgba(255, 0, 0, 0.5)', fontSize: 14, marginTop: 10}}>Passwords Do Not Match</Text> : null
}
      
 
            <KeyboardAvoidingView style={{display: 'flex', flexDirection: 'row', marginVertical: 10}}>
                        <Text style={{color:`${lightTheme.cardText}`, fontSize: 18}}>
                Already have an account?  
            </Text> 
            <TouchableOpacity> 
                <Text style={{color:`${lightTheme.primColor}`, fontSize: 18}} onPress={() => setOpen(true)} > Login In</Text>
                 </TouchableOpacity>
                    </KeyboardAvoidingView>
        <Login open={open} back={() => setOpen(false)} />
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `${lightTheme.backColor}`,
        padding: 20,
        marginTop: StatusBar.currentHeight
    },
    lView: {
        backgroundColor: '#ffffff',
        width: '100%',
       
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    lText: {
        width: '100%',
        height: '6.5%',
        borderBottomColor: `${lightTheme.primColor}`,
        borderBottomWidth: 1,
      fontSize: 18,
      paddingHorizontal: 20,
      color: `${lightTheme.cardText}`,
      marginVertical: 15
    },
    sButton: {
        backgroundColor: `${lightTheme.primColor}`,
        padding: 20,
        width: `90%`,
        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    sImg: {
      aspectRatio: 4/3,
      width: 100,
      height: 100
    }

})
