import { combineReducers } from 'redux'
import {theme} from './theme'
import {products} from './products'
import { user } from './user'
const Reducers = combineReducers({
   
    themeState: theme,
    productState: products,
    userState: user
})

export default Reducers