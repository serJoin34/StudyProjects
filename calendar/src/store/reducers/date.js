import { SET_DATE } from '../actions/dateActions'

const initialState = {
    date: new Date()
  }
  
  
  export function dateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DATE:
          return { date: action.payload }
          
        default:
          return state
      }


    
}