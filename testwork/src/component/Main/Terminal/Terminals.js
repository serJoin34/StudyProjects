import React from 'react'
import './Terminal.css'
import ListTerminal from './ListTerminal'
import PropTypes from 'prop-types'

class Terminals extends React.Component{

    constructor(){
        super()
        this.state={
            name: '',
            desc: ''
        }
        this.handlerName = this.handlerName.bind(this)
        this.handlerDesc = this.handlerDesc.bind(this)
        this.handlerSetTerminal = this.handlerSetTerminal.bind(this)
    }

    handlerName(e){
        this.setState({ name: e.target.value, desc: this.state.desc})
    }

    handlerDesc(e){
        this.setState({ name: this.state.name, desc: e.target.value })
    }

    handlerSetTerminal(){
        let id
        if(this.props.terminal[0] === undefined){
            id = 0
        }
        else{
            this.props.terminal.map((num,index) => {
                return id = index + 1
            })
        }
        console.log(this.state.desc)
        this.props.setTerminal(id, this.state.name, this.state.desc)
        this.setState({ name: '', desc: '' })
    }

    render(){
        return(
            <section className='set-terminal'>
                <div className='set-terminal__input-block input-group'>
                <input type="text" value={this.state.name} onChange={this.handlerName} id='set-terminal__input-name' className="form-control" placeholder='Название терминала' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                <input type="text" value={this.state.desc} onChange={this.handlerDesc} id='set-terminal__input-desc' className="form-control" placeholder='Описание' aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                <button className='btn btn-primary set-terminal__btn-input' onClick={this.handlerSetTerminal}>Добавить</button>
                </div>

                <ListTerminal terminal={this.props.terminal} deleteTerminal={this.props.deleteTerminal}/>
            </section>
        )
    }
}

Terminals.propTypes={
    setTerminal: PropTypes.func.isRequired
}

export default Terminals