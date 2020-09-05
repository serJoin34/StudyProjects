import React from 'react'
import PropType from 'prop-types'


class ModalCard extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            content: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.changeTitle = this.changeTitle.bind(this)
        this.changeContent = this.changeContent.bind(this)
        this.handlerClose = this.handlerClose.bind(this)
        this.handlerDelete = this.handlerDelete.bind(this)
        this.handlerChange = this.handlerChange.bind(this)
    }

    componentDidMount(){
        this.setState({
            title: this.props.card.title,
            content: this.props.card.content
        })
    }

    changeTitle(e){
        this.setState({title: e.target.value, content: this.state.content})
    }

    changeContent(e){
        this.setState({title: this.state.title, content: e.target.value})
    }

    handlerClose(){
        this.props.showCard()
    }

    handlerDelete(){
        this.props.deleteTodo(this.props.card.id)
        this.props.showCard()
    }

    handlerChange(){
        this.props.changeTodo(this.props.card.id, this.state.title, this.state.content, this.props.card.date)
        this.props.showCard()
    }

    render(){
        return(
            <section className='modal-conteiner'>
            <div className="modal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{this.props.card.title}</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handlerClose}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div className="mb-3">
                    <input onChange={this.changeTitle} type="text" id='content-title' className="form-control form-title" value={this.state.title} aria-label="Name" aria-describedby="basic-addon1"/>
                    <textarea onChange={this.changeContent} id='content-body' className="form-control" aria-label="With textarea" value={this.state.content}></textarea>
                </div>                       
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handlerDelete}>Delete</button>
                    <button type="button" className="btn btn-primary" onClick={this.handlerChange}>Save changes</button>
                </div>
                </div>
            </div>
            </div>
        </section>
        )
    }
}

ModalCard.propType ={
    card: PropType.object.isRequired,
    showCard: PropType.func.isRequired,
    deleteTodo: PropType.func.isRequired,
    changeTodo: PropType.func.isRequired
}

export default ModalCard