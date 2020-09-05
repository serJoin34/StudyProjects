import { AUTH_USER } from '../actions/authAction'

let InintialState = {
    login: null,
    password: null,
    avatar: null
}
  
  export function authReducer(state = InintialState, action) {
    switch (action.type) {
      case AUTH_USER:
          return { login: action.login, password: action.password, avatar: action.avatar }
            
        default:
          return state
      }


    
}