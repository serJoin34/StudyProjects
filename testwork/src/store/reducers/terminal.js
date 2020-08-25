import { SET_TERMINAL, DELETE_TERMINAL } from '../actions/terminalAction'


  
  export function terminalReducer(state = [], action) {
    switch (action.type) {
        case SET_TERMINAL:
          return [...state, { id: action.id, name: action.name, desc: action.desc }]

        case DELETE_TERMINAL:
            state.map((term, index) => {
                if(action.id === term.id){
                    state.splice(index, 1)
                }
                return state
            })
              return [...state]
          
        default:
          return state
      }


    
}