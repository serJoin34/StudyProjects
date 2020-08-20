export const SET_TODO = 'SET_TODO'

export function setTodo(id, title, content, date) {
    return {
      type: SET_TODO,
      id: id,
      title: title,
      content: content,
      date: date
    }
  }


export const DELETE_TODO = 'DELETE_CARD'

export function deleteTodo(id){
    return{
        type: DELETE_TODO,
        id: id
    }
}

export const CHANGE_TODO = 'CHANGE_TODO'

export function changeTodo(id, title, content, date) {
  return {
    type: CHANGE_TODO,
    id: id,
    title: title,
    content: content,
    date: date
  }
}
