import React, {Component} from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import FrontPage from '../Pages/front'
import {fetchProducts, fetchIsUser} from '../redux/actions/index'
import { connect } from 'react-redux' 
import { bindActionCreators } from 'redux'


 class FrontMain extends Component  {
     constructor(props){
         super(props)
         
     }
            

     render() {
    return (
     
          <FrontPage />
     
           
       
    )}
}

const mapDispatchProps = (dispatch) => bindActionCreators({fetchProducts }, dispatch)

export default connect( mapDispatchProps, null) (FrontMain)


