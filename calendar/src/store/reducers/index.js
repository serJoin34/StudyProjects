import { combineReducers } from 'redux'
import { dateReducer } from './date'
import { todoReducer } from './todo'
import { modalReducer, cardReducer } from './modal'


export const rootReducer = combineReducers({
    date: dateReducer,
    todo: todoReducer,
    modal: modalReducer,
    card: cardReducer
})
