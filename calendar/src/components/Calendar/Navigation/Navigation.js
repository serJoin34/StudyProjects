import React from 'react'
import './Navigation.css'
import PropTypes from 'prop-types'


class Navigation extends React.Component{
    constructor(){
        super()
        this.handlerPrev = this.handlerPrev.bind(this)
        this.handlerNext = this.handlerNext.bind(this)
        this.handlerSelectMonth = this.handlerSelectMonth.bind(this)
        this.handlerSelectYear = this.handlerSelectYear.bind(this)
    }
    
    years = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025]
    month = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']


    handlerPrev(){
        let prevMonth = new Date (this.props.date.getFullYear(), this.props.date.getMonth() - 1)
        this.props.setDate(prevMonth)
    }
    
    handlerNext(){
        let nextMonth = new Date (this.props.date.getFullYear(), this.props.date.getMonth() + 1)
        this.props.setDate(nextMonth)
    }

    handlerSelectMonth(e){
        let selectDate = new Date (this.props.date.getFullYear(), e.target.value)
        this.props.setDate(selectDate)
    }

    handlerSelectYear(e){
        let selectDate = new Date (e.target.value, this.props.date.getMonth(), this.props.date.getDate())
        this.props.setDate(selectDate)
    }

    render() {
        let prevMonth = 'Январь'
        this.month.map((m, index) => {
            if (index === this.props.date.getMonth() - 1)  prevMonth = m
            return prevMonth
        })
        let nextMonth = 'Январь'
        this.month.map((m, index) => {
            if (index === this.props.date.getMonth() + 1) nextMonth = m
            return nextMonth
        })
        return(
            <nav className='main-nav bg-dark'>
                <button className='previor-btn bg-light' onClick={this.handlerPrev}>
                    {prevMonth}
                </button>
                <div className='select-conteiner'>
                    <select className='custom-select select-month' value={this.props.date.getMonth()} onChange={this.handlerSelectMonth}>
                        {
                            this.month.map((month, index) => {
                                return(
                                    <option value={index} key={index} >{month}</option>
                                )
                            })
                        }
                    </select>
                    <select className='custom-select select-year' value={this.props.date.getFullYear()} onChange={this.handlerSelectYear}>
                        {
                            this.years.map((year, index) => {
                                return(
                                    <option value={year} key={index}>{year}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button className='next-btn bg-light' onClick={this.handlerNext}>
                    {nextMonth}
                </button>
            </nav>
        )
    }
}

Navigation.propTypes = {
    date: PropTypes.object.isRequired,
    setDate: PropTypes.func.isRequired
  }

export default Navigation