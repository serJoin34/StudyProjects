import { SHOW_TODO, SHOW_CARD } from '../actions/modalActions'

const initialStateTodo = {
    visibleTodo: false,
    date: null,
}

  export function modalReducer(state = initialStateTodo, action) {
    switch (action.type) {
        case SHOW_TODO:
            return{ visibleTodo: !state.visibleTodo, date: action.date }

        default:
          return state
      } 
  }


  const initialStateCard = {
    visibleCard: false,
    id: null,
    title: null,
    content: null
}

  export function cardReducer(state = initialStateCard, action) {
    switch (action.type) {
        case SHOW_CARD:
            return{ visibleCard: !state.visibleCard, id: action.id, title: action.title, content: action.content}

        default:
          return state
      } 
  }