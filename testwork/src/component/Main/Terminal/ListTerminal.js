import React from 'react'
import PropTypes from 'prop-types'


class ListTerminal extends React.Component{

    constructor(){
        super()
        this.state={
            name: null,
            desc: null
        }
        this.handlerDelete = this.handlerDelete.bind(this)
    }

    handlerDelete(id){
        this.props.deleteTerminal(id)
    }

    render(){
        return(
            <ul className='set-terminal__list-terminals'>
                {
                    this.props.terminal.map((num, index) => {
                        return(
                            <li key={index} className='set-terminal__list-terminals-row'>
                                <div className='set-terminal__list-terminals-row__name'>{num.name}</div>
                                <div className='set-terminal__list-terminals-row__desc'>{num.desc}</div>
                                <button className='set-terminal__list-terminals-row__btn btn btn-danger' onClick={() => this.handlerDelete(num.id)}>Delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

ListTerminal.propTypes={
    deleteTerminal: PropTypes.func.isRequired
}

export default ListTerminal