export const SET_TERMINAL = 'SET_TERMINAL'

export function setTerminal(id, name, desc) {
    return {
      type: SET_TERMINAL,
      id: id,
      name: name,
      desc: desc
    }
  }

  export const DELETE_TERMINAL = 'DELETE_TERMINAL'

  export function deleteTerminal(id) {
      return {
        type: DELETE_TERMINAL,
        id: id
      }
    }