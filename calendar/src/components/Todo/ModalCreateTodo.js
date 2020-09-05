import React from 'react'
import './ModalCreateTodo.css'
import PropType from 'prop-types'

class modalCreateTodo extends React.Component{
    constructor(){
        super()
        this.state = {
            title: null,
            content: null
        }
        this.handlerSetTodo = this.handlerSetTodo.bind(this)        
        this.hadlerTitle = this.hadlerTitle.bind(this)
        this.hadlerContent = this.hadlerContent.bind(this)
        this.handlerClose = this.handlerClose.bind(this)
    }


    hadlerTitle(e){
        this.setState({title: e.target.value})
    }

    hadlerContent(e){
        this.setState({content: e.target.value})
    }

    handlerSetTodo(){
        let todoId = null
        this.props.todo.map(id => {
            return todoId = id.id
        })
        if(todoId === null){
            this.props.setTodo(0, this.state.title, this.state.content, this.props.modalDate)
            this.props.showTodo(null)           
        }
        else{
            this.props.setTodo(todoId + 1, this.state.title, this.state.content, this.props.modalDate)
            this.props.showTodo(null)
        }

    }

    handlerClose(){
        this.props.showTodo()
    }

    render(){
        return(
            <section className='modal-conteiner'>
                <div className="modal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create note</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handlerClose}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    
                    <div className="modal-body">
                    <div className="input-group mb-3">
                        <input onChange={this.hadlerTitle} type="text" className="form-control form-title" placeholder="Заголовок" aria-label="Name" aria-describedby="basic-addon1"/>
                        <textarea onChange={this.hadlerContent} className="form-control form-body" aria-label="With textarea"></textarea>
                    </div>                       
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handlerClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.handlerSetTodo}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            </section>

        )
    }
}

modalCreateTodo.propType ={
    date: PropType.object.isRequired,
    todo: PropType.object.isRequired,
    modalDate: PropType.object.isRequired,
    setTodo: PropType.object.isRequired,
    showTodo: PropType.object.isRequired
}


export default modalCreateTodo