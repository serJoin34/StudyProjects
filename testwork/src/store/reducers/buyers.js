import { SET_PAGINATION, SORT_BUYERS } from '../actions/buyerAction'

const initialState = [
    {
        id: 0, name:'Игорь', check: 3500, colBuy: 10, allBuy: 35000  
    },
    {
        id: 1, name:'Иван', check: 2500, colBuy: 12, allBuy: 30000  
    },
    {
        id: 2, name:'Игорь', check: 1400, colBuy: 8, allBuy: 11200  
    },
    {
        id: 3, name:'Дима', check: 4200, colBuy: 6, allBuy: 25200  
    },
    {
        id: 4, name:'Николай', check: 3100, colBuy: 14, allBuy: 43400  
    },
    {
        id: 5, name:'Олег', check: 3900, colBuy: 17, allBuy: 66300  
    },
    {
        id: 6, name:'Дима', check: 1700, colBuy: 6, allBuy: 10200  
    },
    {
        id: 7, name:'Максим', check: 2700, colBuy: 20, allBuy: 54000  
    },
    {
        id: 8, name:'Алексей', check: 2500, colBuy: 4, allBuy: 10000  
    },
    {
        id: 9, name:'Николй', check: 3800, colBuy: 8, allBuy: 30400  
    },
    {
        id: 10, name:'Иван', check: 1400, colBuy: 13, allBuy: 18200  
    },
    {
        id: 11, name:'Максим', check: 4100, colBuy: 18, allBuy: 73800  
    },
    {
        id: 12, name:'Олег', check: 2300, colBuy: 5, allBuy: 11500  
    },
    {
        id: 13, name:'Дима', check: 3300, colBuy: 14, allBuy: 46200  
    },
    {
        id: 14, name:'Коля', check: 1900, colBuy: 9, allBuy: 17100  
    },
    {
        id: 15, name:'Иван', check: 3600, colBuy: 12, allBuy: 43200  
    },
]

const initialPages={
    colItems: initialState.length,
    currentPages: 0
}

export function pagesReducer(state = initialPages, action){
    switch (action.type){
        case SET_PAGINATION:
            return { colItems: action.colItems, currentPages: action.currentPages, colPages: Math.ceil( initialState.length / action.colItems ) }

        default: return state
    }
}

  export function buyerReducer(state = initialState, action) {
    switch (action.type) {
        case SORT_BUYERS:
            switch(action.num) {
                case 1:
                    state = state.filter(num => {
                        if(action.name !== ''){
                            return num.name === action.name
                        }
                        else{
                            return num.name
                        }
                    })
                    return state


                case true:
                    state = state.filter(num =>{
                        return num
                    }).sort((a,b) => a[action.name] - b[action.name])
                    
                    return state
                
                case false:
                    state = state.filter(num =>{
                        return num
                    }).sort((a,b) => b[action.name] - a[action.name])
                    return state

                default: return initialState
            }
          
        default:
          return initialState
      }


    
}