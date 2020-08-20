import React from 'react'
import Table from './Table/Table'
import Navigation from './Navigation/Navigation'
import './Calendar.css'

class Calendar extends React.Component{

    
    render() {
        return(
            <div className='calendar'>
                <Navigation date={this.props.date} setDate={this.props.setDate} />
                <Table date={this.props.date} setDate={this.props.setDate} todo={this.props.todo} showTodo={this.props.showTodo}/>
            </div>
        );
    }

}

export default Calendar;