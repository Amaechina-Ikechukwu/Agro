import React, {useState, useEffect} from 'react'
import { SafeAreaView, StyleSheet,  TouchableOpacity, View, Dimensions, FlatList, StatusBar,Text, ActivityIndicator, ImageBackground, Image } from 'react-native'
import { darkTheme, lightTheme } from '../colors'
import Icon from 'react-native-vector-icons/Ionicons';
import {N} from "@env"
import { MaterialIcons,  Ionicons  } from '@expo/vector-icons';


import moment from 'moment';
import {   Container,
    Header,
    Content,
    Card,
    CardItem,
  NativeBaseProvider,
  
    Body, } from "native-base"
import { connect, useDispatch } from 'react-redux' 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buttons } from './Buttons';

const n = '28a184cb80544d9d9a451ef5972831a5'
const gnews = '7d9fe408165bad343997094c0557eb84'
const ny = 'mfI9nUcX46h4YV8c9AACRHGROVgGOpAR'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const time = moment().format("YYYY-MM-DD")
 

const News = (props,{navigation}) => {


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

   
    const [load, setLoad] = useState(true)
    const [a, setA] = useState('')
    const [b, setB] = useState(null)
    const [c, setC] = useState(null)
    const [keywords, setKeywords] = useState('all')
    const [dataa , setDataa] = useState([])


    const getAction = async () => {
      try {
        const value = await AsyncStorage.getItem('action').then(
         
      )
        if(value !== null) {
          setA(value);
         
        }
      } catch(e) {
         
      }
    }

    const setAction = async (val) => {
      try {
        await AsyncStorage.setItem('action', val)
        .then(
       
         () => getAction()
       )
      }
    catch (e) {
      console.log(e)
      }
    }

    const nysearch = `https://newsapi.org/v2/everything?q=${keywords}&apiKey=${N}`
    const getNews = async () => {
       try { const response = await fetch(nysearch);
        const data = await response.json()
        setDataa(data.articles)
       if (data !== undefined || null)    {
           setLoad(false)
       }   else(
           setLoad(true)
       )}
       catch(e){
        <View>
            <Image  source={require('../assets/agro.png')} resizeMode='contain' style={{width: 100, height: 100}} />
            <Text style={{fontSize: 24, color: `${theme === 'light' ? lightTheme.cardText : darkTheme.primColor}`}}>
    Sorry, couldnt load news
</Text>

        </View>
       }
      
        
    }

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

const word = (val) => {
  setKeywords(val)
}
 

    const PressAll = (val) => {
        word(val);
       getNews()
        console.log(keywords)
    }

    
    // const PressAgric = (val) => {
    //     setKeywords(val)
    //     console.log(keywords)
    //     setB(true)
    //     setA(false)
    //     setC(false)
        
        
    //     getNews()
        
    // }

    // const PressEco = (val) => {
    //     setKeywords(val)
    //     console.log(keywords)
    //     setC(true)
    //     setA(false)
    //     setB(false)
        
        
    //     getNews()
    // }


    useEffect(() => {
        getNews()
        getTheme()
        console.log(time)
      getAction()
    }, [])


    return (
     <SafeAreaView style={[styles.view, {backgroundColor:`${theme === 'light' ?  lightTheme.backColor : '#0f0f0f' }`, }]}>
         <View style={styles.viewHead} >
         <Text style={{fontSize: 24, color: `${theme === 'light' ? lightTheme.cardText : darkTheme.primColor}`}}>
    News
</Text>
         </View>


<View style={[styles.NewsCat, {
//     shadowColor: `${theme === 'light' ?  'rgba(255,255,255,0.8)' : '#ffffff' }`,
// shadowOffset: {
// width: 0,
// height: 6,
// },
// shadowOpacity: 0.39,
// shadowRadius: 4.30,

// elevation: 8,
 backgroundColor:`${theme === 'light' ?  lightTheme.backColor : 'transparent'}`, borderColor:  `${theme === 'light' ?  lightTheme.primColor : darkTheme.primColor  }`,}]}> 




<TouchableOpacity key={'all'} onPress={() =>  PressAll('general')}>
                <Text style={ keywords === 'general' ? { color:  `${theme === 'light' ?  lightTheme.primColor : darkTheme.secColor }` } : {color:  `${theme === 'light' ?  lightTheme.cardText : darkTheme.primColor }` } }>General</Text>
                </TouchableOpacity> 
                <View
  style={{
    borderColor: `${theme === 'light' ?  lightTheme.cardText : darkTheme.secColor }`,
    borderWidth: 1,
height: '150%',

  
  }}
/>

                <TouchableOpacity key={'agriculture'} onPress={() =>  PressAll('agriculture')}>
                <Text style={ keywords === 'agriculture' ? { color:  `${theme === 'light' ?  lightTheme.primColor : darkTheme.secColor }` } : {color:  `${theme === 'light' ?  lightTheme.cardText : darkTheme.primColor }` } }>Agriculture</Text>
                </TouchableOpacity>
                <View
  style={{
    borderColor: `${theme === 'light' ?  lightTheme.cardText : darkTheme.secColor }`,
    borderWidth: 1,
height: '150%',

  
  }}
/>

                <TouchableOpacity key={'economics'} onPress={() =>  PressAll('business')}>
                <Text style={ keywords === 'business' ? { color:  `${theme === 'light' ?  lightTheme.primColor : darkTheme.secColor }` } : {color:  `${theme === 'light' ?  lightTheme.cardText : darkTheme.primColor }` } }>Economics</Text>
                </TouchableOpacity>

</View>

{
  a === 'true' ? null : <View  style={{backgroundColor: `${theme === 'light' ?   '#E0E0E0' : darkTheme.backColor }`, display: 'flex', flexDirection:'row', padding: 10  }}>
  <View>
  <Text style={{   color:`${theme === 'light'? lightTheme.primColor : darkTheme.secColor}`, fontSize: 15,  fontFamily: 'Roboto',}}>
  GUIDED ACTION:
  </Text>
  
  <Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 14,  fontFamily: 'Roboto',}}>
    Double click to change categories
      </Text>
  
      <Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 13,  fontFamily: 'Roboto', opacity: 0.8}}>
      This is to prevent displacment of article due to wrong clicks
  </Text>
  </View>
  <TouchableOpacity onPress={ setAction('true')}>
  < Ionicons  name='close-outline' size={20}  color={theme !== 'light' ?   lightTheme.backColor : darkTheme.backColor } style={{opacity: 0.8}} />
  </TouchableOpacity>
  </View>
}

{
    load  ? <ActivityIndicator size='large' color={theme === 'light' ?   lightTheme.primColor : darkTheme.secColor }  /> :
<FlatList
        data={dataa}
        style={{width: '100%', paddingVertical: 10, }}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => props.navigation.navigate('ReadNews' , {title : item.title, author: item.author, img: item.urlToImage, content: item.content, date: item.publishedAt, source: item.source.name, url: item.url})} style={[ {backgroundColor: `${theme === 'light' ?  lightTheme.backColor : darkTheme.backColor }`,width: '100%', marginVertical:10  }]}>
                        
<ImageBackground  imageStyle={{borderRadius: 5, }} source={{uri: item.urlToImage}} key={item.title} style={[ styles.Rview, {padding: 0, flexDirection: 'column-reverse' , justifyContent: 'flex-start',height: windowHeight*0.60  
}
 ]}>


<View style={{ alignItems: 'center',     
flexDirection: 'column', justifyContent: 'space-evenly',backgroundColor: `${theme === 'light' ?  lightTheme.backColor : '#0f0f0f' }`,width: '100%',paddingVertical:20, paddingHorizontal: 10,height: '50%', borderBottomEndRadius: 5, borderBottomStartRadius: 5,shadowColor: `${theme === 'light' ?  'rgba(18,18,18,0.6)' : '#ffffff' }`,
shadowOffset: {
width: 0,
height: 6,
},
shadowOpacity: 0.39,
shadowRadius: 4.30,

elevation: 5,
}}>


<View  style={{display: 'flex', flexDirection: 'column',  width: '100%',  }}>
<Text style={{   color:`${theme === 'light'? lightTheme.primColor : darkTheme.secColor}`, fontSize: 20,  fontFamily: 'Roboto',}}>
{item.title}
</Text>
<Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 15,  fontFamily: 'Roboto',}}>
  {item.content}</Text>

<Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 14,  fontFamily: 'Roboto',opacity: 0.7}}>
written by: {item.author} @ {item.source.name}
</Text>

<Text style={{   color:`${theme === 'light'? lightTheme.cardText : darkTheme.primColor}`, fontSize: 13,  fontFamily: 'Roboto', opacity: 0.8}}>
 {item.publishedAt}
</Text>
</View>

{/* <View style={{ alignItems: 'flex-end', width: '100%', padding:10, backgroundColor: 'transparent', justifyContent: 'center'}}>
<TouchableOpacity onPress={() => props.navigation.navigate('Info', {name: item.name, Bname:item.Bname, as:item.as, theme: theme, uri: item.img})} 
style={{shadowColor: `${theme === 'light' ?  'rgba(18,18,18,0.6)' : '#ffffff' }`,
  borderRadius: 500, alignItems: 'center', justifyContent: 'center', width: 50  , height: 50   
} } 
>
<Icon name='caret-forward-circle-outline' size={40} color={darkTheme.secColor }  />
</TouchableOpacity>
</View> */}
</View>

</ImageBackground>
            </TouchableOpacity>
        ) }
      />

 
}





     </SafeAreaView>
    )
}

const mapStateToProps = (store) => ({
 
    theme: store.themeState.theme

})
export default connect(mapStateToProps, null)(News)

const styles = StyleSheet.create({
    NewsCat: {

display: 'flex',
flexDirection: 'row',
justifyContent: 'space-around',
width: windowWidth*0.7,

padding: 10,
alignItems: 'center',
borderWidth: 1,
 borderRadius: 50,
marginBottom:5
 

 
    },
    view: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: windowHeight,
        marginTop: StatusBar.currentHeight
    },
    touchable: {
        width: 0
    },
    viewHead: {
        
        width: '100%',
        padding: 3
        
    }
})
