import React from 'react'
import PropType from 'prop-types'
import './Todo.css'


class TodoList extends React.Component{
    constructor(){
        super()
        this.state = {
            id: null,
            title: null,
            body: null,
            date: {
                year: null,
                month: null,
                day: null
            }
        }
        this.hanlerOpenCard = this.hanlerOpenCard.bind(this)
    }


    hanlerOpenCard(id,title, body){
        this.props.showCard(id, title, body)
    }

    render(){
        if(this.props.todo[0] !== undefined){
            return(
                <div className='todo-list'>
                    <div className='cards'>
                    {
                        
                        this.props.todo.map((num, index) => {
                            if(this.props.date.getFullYear() === num.date.year && this.props.date.getMonth() === num.date.month){
                                return(
                                    <div className="card" key={index}>
                                    <h5 className="card-header">{num.title}</h5>
                                    <div className="card-body">
                                        <p className="card-text">{num.body}</p>
                                    </div>
                                    <button className="btn btn-dark show-card" onClick={() => {this.hanlerOpenCard(num.id, num.title, num.body)}}>Открыть</button>
                                    </div>
                                )
                            }
                            return num
                        })
                    }
                    </div>
                </div>
            )
        }
        else{
            return(
                <div className='todo-list'>
                    <h2 style={{'color': 'white', 'textAlign': 'center'}}>Your notes will appear here</h2>
                </div>
            )
        }

    } 


}

TodoList.propType ={
    date: PropType.object.isRequired,
    todo: PropType.object.isRequired,
    showCard: PropType.func.isRequired,
}

export default TodoList