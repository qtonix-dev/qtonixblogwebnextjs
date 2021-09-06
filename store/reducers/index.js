import {combineReducers} from 'redux'
import { postReducer } from './postReduer'
import blogReducer from './blogReducer'
import themeReducer from './themeReducer'

export default combineReducers({
    blogs:blogReducer,
    post:postReducer,
    theme:themeReducer
})