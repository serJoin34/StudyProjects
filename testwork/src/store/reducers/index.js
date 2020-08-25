import { combineReducers } from 'redux'
import { authReducer } from './auth'
import {terminalReducer} from './terminal'
import { buyerReducer, pagesReducer } from './buyers'


export const rootReducer = combineReducers({
    auth: authReducer,
    terminal: terminalReducer,
    pages: pagesReducer,
    buyers: buyerReducer
})