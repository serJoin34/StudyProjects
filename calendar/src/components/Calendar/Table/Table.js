import React from 'react'
import ListDays from './ListDays'
import './Table.css'

class Table extends React.Component {


    
    render() {
        return (
            <table className='table table-striped bg-light'>
                <thead >
                    <tr>
                    <th scope="col" className='weekday'>Понедельник</th>
                    <th scope="col" className='weekday'>Вторник</th>
                    <th scope="col" className='weekday'>Среда</th>
                    <th scope="col" className='weekday'>Четверг</th>
                    <th scope="col" className='weekday'>Пятница</th>
                    <th scope="col" className='weekday'>Суббота</th>
                    <th scope="col" className='weekday'>Воскресенье</th>
                    </tr>
                </thead>
                <ListDays date={this.props.date} setDate={this.props.setDate} todo={this.props.todo} showTodo={this.props.showTodo}/>
        </table>
        );
    }

}



export default Table;