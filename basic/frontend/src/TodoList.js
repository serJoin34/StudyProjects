import React from 'react';
import axios from "axios";
import SetTodo from './SetTodo'

class TodoList extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            todo: []
        }
        //this.componentDidMount = this.componentDidMount.bind()
        this.todoSet = this.todoSet.bind(this)
    }

    componentDidMount(){
        const API_URL = '/api/todos'
        axios.get(API_URL)
        .then(response => {
            this.setState({ loading: true, todo: response.data })
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    todoSet(title, content){
        this.setState({
            todo: [...this.state.todo, {title, content}]
        })
    }

    render(){
        return(
            <div className='conteiner'>
                <table className='table'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Content</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.loading ? 
                            this.state.todo.map((todo, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{todo.title}</td>
                                        <td>{todo.content}</td>
                                    </tr>
                                )
                            })
                        :
                            <tr>
                                <td>Loading...</td>
                            </tr>
                        
                    }    
                    </tbody>  
                </table>
                <SetTodo todoSet={this.todoSet}/>
            </div>
        )
    }
}

export default TodoList;