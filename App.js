
import React, {Component} from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, ToastAndroid, View,  } from 'react-native';
import firebase from 'firebase'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'
import firebaseConfig from './xxxx'
import Splash from './Splash';
import SignUp from './Auth/SignUp';
import { Main } from './Main';
import FrontPage from './Pages/front';
import Login from './Auth/Login';
import InfoPage from './Pages/InfoPage';
import { bindActionCreators } from 'redux'
import {fetchProducts} from './redux/actions/index'
import { connect, useDispatch } from 'react-redux' 
import Freshy from './Main'
import FrontMain from './Main/FrontMain';
import {lightTheme, darkTheme} from './colors'
import News from './Pages/News';
import ReadNews from './Pages/ReadNews';
import Onboardinng from './Onbording';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(rootReducer, 
 applyMiddleware(thunk
  ))
const Stack = createStackNavigator();

if (firebase.apps.length === 0 ) {
  firebase.initializeApp(firebaseConfig)
}


export class App extends Component {
      constructor(props){
        super(props);
        this.state= ({
          theme: 'light',
          loaded: true,
          loggedIn: false,
          OB: false
        })
      }

  componentDidMount(){ 

        firebase.auth().onAuthStateChanged(user => {
          if (!user) {
            this.setState({loggedIn: false, loaded: false})
           
          }
            else {
              
              this.setState({loggedIn: true, loaded: false})
             
            }
      }
     

        )
       
          this.getOB();
      }

      
//  storeTheme = async (val) => {
//   try {
//     await AsyncStorage.setItem('loggedIn', val)
//     .then(
      
//     )
//   }
// catch (e) {
      
//   }
// }

 getOB = async () => {
  try {
    const value = await AsyncStorage.getItem('OB').then(
    
  )
    if(value !== null) {
    
      this.setState({OB: true})
    }
 
  } catch(e) {
   
  }
}


    

  render() {

    const { loaded, loggedIn, theme,OB } = this.state

    if (loaded ) {
      return (
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
   <ActivityIndicator size='large' color={   lightTheme.primColor  }  />
</View>
     
      )
    }
// if (OB === false) {
//   <Provider store={store}>
//     <NavigationContainer>
//       <Stack.Navigator>
//       <Stack.Screen name='Welcome' animationEnabled component={Onboardinng} navigation={this.props.navigation} options={{headerShown: false, headerTransparent: true, }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </Provider>
// }

   if (loggedIn === false  ) {
      return(
       
        <Provider  store={store}>

     
        <NavigationContainer  >
     
      
            <Stack.Navigator >
            <Stack.Screen name='Welcome' animationEnabled component={Onboardinng} navigation={this.props.navigation} options={{headerShown: false, headerTransparent: true, }} />
              <Stack.Screen name='Sign Up' component={SignUp} navigation={this.props.navigation} options={{headerShown: false}} />
              <Stack.Screen name='Login' component={Login} navigation={this.props.navigation} options={{headerShown: false}} />
            
     
              </Stack.Navigator> 
          </NavigationContainer>
             </Provider>
       
      )
    }
   
   return (
      <Provider  store={store}>

     
   <NavigationContainer  >

 
       <Stack.Navigator >
         
    
  
        
         <Stack.Screen name='Home' component={FrontPage} navigation={this.props.navigation} options={{headerShown: false}} /> 
         <Stack.Screen name='Info' animationEnabled component={InfoPage} navigation={this.props.navigation} options={{headerShown: false, headerTransparent: true, }} />
         <Stack.Screen name='Products' component={Freshy} navigation={this.props.navigation}  options={{headerShown: false}} />
         <Stack.Screen name='News' component={News} navigation={this.props.navigation}  options={{headerShown: false}} />
        

         </Stack.Navigator> 
     </NavigationContainer>
        </Provider>
    
     
    )}

    
  }
  



 

export default  ( App)





// const App = () => {

  
// const ViewWrap = styled.View`
// background: ${(props) => props.theme.primColor},
// align-items: center,
// justify-content: center,
// flex: 1
// `
// const [theme, setTheme] = useState('light')

//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <ViewWrap>
// <Image style={{width: '100%', height: '100%'}} resizeMode='contain' source={require('./icons/FAG.png')} />
//     </ViewWrap>
//     </ThemeProvider>
//   )
// }

// export default App

// const styles = StyleSheet.create({})


 