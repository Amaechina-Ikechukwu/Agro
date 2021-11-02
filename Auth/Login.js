import React, {useState} from 'react'
import { Modal, ScrollView, StyleSheet, Text, View,Dimensions, SafeAreaView, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, ToastAndroid, ActivityIndicator } from 'react-native'
import {lightTheme, darkTheme} from '../colors'
import firebase from 'firebase'
import "firebase/auth";
import {icon } from '../img'

const Log = () => {
  return (
   
     < TouchableOpacity style={[styles.sButton,{display: 'flex', flexDirection: 'row',  alignItems:"center", }]}>
        <Text style={[ {color: lightTheme.primColor, fontSize: 18}]} >Checking In</Text>
        <ActivityIndicator size='small' color={lightTheme.cardText} />
     </TouchableOpacity>
   
  )
}

const Login = (props, {navigation}) => {
    const [ email, setEmail ] = useState('')
    const [ pword, setPword ] = useState('')
    const [log, setLog] = useState(false)
    const handlePress = () => {
       
             
              firebase.auth().signInWithEmailAndPassword(email, pword)
              .then( result => {
            
              
      } )
      .catch( error => {
        showToast(error.message)   
        setLog(false)    
      })
    setLog(true)
   }
  

   const showToast = (result) => {
    ToastAndroid.show(result, ToastAndroid.LONG);
  };

    return (
       <Modal  visible={props.open} animationType='fade' style={{width: '70%'}} >
        
   <View style={styles.view}>
  
<View style={{flexDirection: 'row',justifyContent: 'space-between', marginBottom: 20, alignItems: 'center'}}>
<Image resizeMode='contain' source={{uri: icon}} style={styles.sImg} />
<Text style={{color:`${lightTheme.primColor}`, fontSize: 20}}>is happy to have you back.</Text>
 </View>
 
<View style={styles.lView}>
   
    
 

    

     <TextInput onChangeText={(email) => setEmail(email)} style={styles.lText} placeholder='Email'/>  
     <TextInput onChangeText={(pword) => setPword(pword)} style={styles.lText} placeholder='Password' secureTextEntry/> 
     
   
   
     {
       log ? <Log /> : 
        <TouchableOpacity style={styles.sButton} onPress={handlePress}>
       <Text style={{color:`${lightTheme.primColor}`, fontSize: 18}}>Login In</Text>
       </TouchableOpacity>
     }
      
   
   <TouchableOpacity onPress={props.back} style={[styles.sButton,{borderColor: '#ffffff', borderWidth: 1, backgroundColor: 'transparent', marginTop: 10}]}> 
          <Text style={{color:`${lightTheme.backColor}`, fontSize: 18}}> Close </Text>
  </TouchableOpacity>

</View>



</View>

       </Modal>
    )
}

export default Login

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: `rgba(236, 248, 127,0.6)`,
        padding: 20,
        backgroundColor:`${lightTheme.backColor}`
    },
    lView: {
        backgroundColor: `${lightTheme.primColor}`,
        width: '100%',
       
      borderRadius: 10,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    lText: {
        width: '100%',
        height: '15%',
        borderBottomColor: `${lightTheme.backColor}`,
        borderBottomWidth: 1,
      fontSize: 18,
      paddingHorizontal: 20,
      color: `${lightTheme.backColor}`,
      marginVertical: 15
    },
    sButton: {
        backgroundColor: `${lightTheme.backColor}`,
        padding: 10,
        width: `90%`,
      
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
     sImg: {
     
      width: 70,
      height: 70
    }
})
