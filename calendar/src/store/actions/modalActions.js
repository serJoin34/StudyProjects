export const SHOW_TODO = 'SHOW_TODO'

export function showTodo(date){
    return{
        type: SHOW_TODO,
        date: date
    }
}

export const SHOW_CARD = 'SHOW_CARD'

export function showCard(id, title, content){
    return{
        type: SHOW_CARD,
        id: id,
        title: title,
        content: content
    }
}

