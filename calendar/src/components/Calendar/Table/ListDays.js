import React from 'react'
import PropTypes from 'prop-types'
import './Table.css'

class ListDays extends React.Component{
    constructor() {
        super();
        this.state = {
            store: null,
            daysMonth : null
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.createTodo = this.createTodo.bind(this)
    }

    componentDidMount(){
        this.setCalendar(this.props.date);
    }

    componentDidUpdate(){
        if(this.props.date !== this.state.store){
            this.setCalendar(this.props.date)
            this.setState({store: this.props.date})
        }
    }

    getFirstDay(props){
        let firstDay = new Date(props.getFullYear(), props.getMonth(), 1).getDay()
        if (firstDay === 0) return 7
        else return firstDay
    }

    getLastDayPrevMonth(props) {
        let lastMonth = new Date(props.getFullYear(), props.getMonth(), 0)
        return lastMonth.getDate()
    }

    getLastDayOfMonth(props){
        let month = new Date(props.getFullYear(), props.getMonth() + 1, 0)
        return month.getDate()
    }

    setCalendar(props) {     
        let firstDay = this.getFirstDay(props)
        let lastMonthProps = this.getLastDayPrevMonth(props)
        let lastDay = this.getLastDayOfMonth(props)
        let allMonth = []
        let allDayOfMonth = []
        for (let i = firstDay - 2; i >= 0; i--){
            let prevDate = new Date(this.props.date.getFullYear(), this.props.date.getMonth() - 1, lastMonthProps - i)
            allMonth.push({date: prevDate, day: lastMonthProps - i, today:-1})
        }     
        for (let i = 1; i <= lastDay; i++){
            let currentDate = new Date(this.props.date.getFullYear(), this.props.date.getMonth(), i)
            if(this.props.date.getDate() === i){
                allMonth.push({date: currentDate, day: i, today: true})
            }
            else{
                allMonth.push({date: currentDate, day: i, today: false})
            }
        }
        for (let i = 1; i <= 43 - lastDay - firstDay; i++){
            let nextDate = new Date(this.props.date.getFullYear(), this.props.date.getMonth() + 1, i)
            allMonth.push({date: nextDate, day: i, today: 1})
        }


        for(let i = 0; i < allMonth.length; i + 7){
            let week = allMonth.splice(i, i + 7)
            allDayOfMonth.push(week)
        }

        this.setState({daysMonth: allDayOfMonth})
    }


    createTodo(date, today){
        if( today === true || today === false){
            this.props.showTodo(new Date(date))
        }
        else if(today === -1 || today === 1) {
            this.props.setDate(date)
        }
    }

    render(){
        if(this.state.daysMonth !== null){
            return(
                <tbody>
                    {this.state.daysMonth.map((week, weekIndex) => {
                        return (
                            <tr className='weekday-week' key={weekIndex}>
                            {
                                week.map((day, dayIndex) => {
                                    if (day.today === true){
                                        return(
                                            <td className='weekday-day bg-dark' style={{color:"white"}} key={dayIndex} onClick={() => this.createTodo(day.date, day.today)}>{day.day}</td>
                                        )
                                    }
                                    else if (day.today === false){
                                        return(
                                            <td className='weekday-day' key={dayIndex} onClick={() => this.createTodo(day.date, day.today)}>{day.day}</td>
                                        )                                    
                                    }
                                    else if (day.today === -1 || day.today === 1){
                                        return(
                                            <td className='weekday-day out-month' key={dayIndex} onClick={() => this.createTodo(day.date, day.today)}>{day.day}</td>
                                        )                                    
                                    } 
                                    return day                               
                                })
                            }
                            </tr>
                        )
                    })}
                </tbody>
            )
        }
        else{
            return(
                <tbody>
                    <tr><td>Loading...</td></tr>
                </tbody>
            )
        }

    }
}

ListDays.propTypes = {
    date: PropTypes.object.isRequired,
    setDate: PropTypes.func.isRequired,
    todo: PropTypes.array.isRequired,
    showTodo: PropTypes.func.isRequired
  }
  
export default ListDays