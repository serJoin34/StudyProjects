import React from 'react'
import PropTypes from 'prop-types'

class BuyersNav extends React.Component{

    constructor(){
        super()
        this.state={
            name: ''
        }
        this.handlerSetPagination = this.handlerSetPagination.bind(this)
        this.handlerStateName = this.handlerStateName.bind(this)
        this.handlerSearchName = this.handlerSearchName.bind(this)
        this.handlerSearchClear = this.handlerSearchClear.bind(this)
    }

    handlerSetPagination(e){
        this.props.setPagination(Number(e.target.value), 0)
    }

    handlerStateName(e){
        this.setState({
            name: e.target.value
        })
    }

    handlerSearchName(){
        this.props.sortBuyers(1, this.state.name)
    }

    handlerSearchClear(){
        this.props.sortBuyers()
        this.setState({name: ''})
    }

    render(){
        return(
            <section className='buyers-nav'>
                <select className='custom-select' onChange={this.handlerSetPagination}>
                    <option defaultValue value={this.props.buyers.length}>Выберите пагинацию</option>
                    <option value='5'>5</option>
                    <option value='10'>10</option>
                    <option value='15'>15</option>
                </select>

                <div className="input-group mb-3 search-field">
                <input type="text" className="form-control search-input" value={this.state.name} onChange={this.handlerStateName} placeholder="Введите имя" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <button className="btn btn-outline-success my-2 my-sm-0" id="basic-addon2" onClick={this.handlerSearchName} type="submit">Search</button>
                <button className="btn btn-outline-danger my-2 my-sm-0" id="basic-addon3" onClick={this.handlerSearchClear} type="submit">Clear</button>
                </div>
            </section>
        )
    }
}

BuyersNav.propTypes={
    buyers: PropTypes.array.isRequired,
    setPagination: PropTypes.func.isRequired,
    sortBuyers: PropTypes.func.isRequired
}

export default BuyersNav