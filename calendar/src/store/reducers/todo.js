import { SET_TODO, DELETE_TODO, CHANGE_TODO } from '../actions/todoActions'


  export function todoReducer(state = [], action) {
    switch (action.type) {
        
        case SET_TODO:
          return [...state, {id: action.id, title: action.title, body: action.content, date: {year: new Date(action.date).getFullYear(), month: new Date(action.date).getMonth(), day: new Date(action.date).getDate()}}]
        
        case DELETE_TODO:
            state.filter(todo => action.id === todo.id).map((todo, index) => {
                return state.splice(index, 1)
            })
          return [...state]

        case CHANGE_TODO:
            state.filter(todo => action.id === todo.id).map((todo, index) => {
                return state.splice(index, 1, {id: action.id, title: action.title, body: action.content, date: todo.date})
            })
          return [...state]
          
        default:
          return state
      }


    
  }