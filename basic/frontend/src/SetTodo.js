import React from 'react'
import axios from "axios";
import anime from "animejs"

class SetTodo extends React.Component{
    constructor(){
        super()
        this.addTodo = this.addTodo.bind(this)
        this.setTodo = this.setTodo.bind(this)
    }

    showUp(field){
        field.style.display = 'block'
        field.style.height = 0

        anime({
            targets: field,
            height: 38
        })

        document.getElementsByClassName('form-control')[0].focus()
    }

    setTodo(title, content, field){
        const API_URL = '/api/todos'
        axios.post(API_URL, {
            title: title,
            content: content
        })
        .then(response => {
            this.props.todoSet(title, content)
            field.style.display = 'none'
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    addTodo(){
        const field = document.getElementById('field-inputs')
        if(field.style.display === 'block'){
            let todo = document.getElementsByClassName('form-control')
            
            this.setTodo(todo[0].value, todo[1].value, field)

            todo[0].value=''
            todo[1].value=''
        }
        else{
            this.showUp(field)
        }
    }

    render(){
        return(
            <div className='container-add'>
                <div id='field-inputs'>
                    <input className='form-control' />
                    <input className='form-control'/>
                </div>
                <button className='add-submit' onClick={this.addTodo}>Add</button>
            </div>
        )
    }
}

export default SetTodo