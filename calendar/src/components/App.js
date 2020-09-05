import React from 'react';
import './App.css';
import Calendar from './Calendar/Calendar'
import TodoList from './Todo/TodoList'
import { connect } from 'react-redux'
import { setDate } from '../store/actions/dateActions'
import { setTodo, deleteTodo, changeTodo } from '../store/actions/todoActions'
import { showTodo, showCard } from '../store/actions/modalActions'
import ModalCreateTodo from './Todo/ModalCreateTodo'
import ModalCard from './Todo/ModalCard'

class App extends React.Component{

  render() {
    return (
      <div className='conteiner'>
        <Calendar date={this.props.date} setDate = {this.props.setDateAction} todo={this.props.todo} showTodo={this.props.showTodoAction}/>
        <TodoList date={this.props.date} todo={this.props.todo} showCard={this.props.showCardAction}/>
        {
          this.props.modal.visibleTodo ? <ModalCreateTodo date={this.props.date} todo={this.props.todo} modalDate={this.props.modal.date} setTodo={this.props.setTodoAction} showTodo={this.props.showTodoAction}/> : null
        }
        {
          this.props.card.visibleCard ? <ModalCard card={this.props.card} showCard={this.props.showCardAction} deleteTodo={this.props.deleteTodoAction} changeTodo={this.props.changeTodoAction}/> : null
        }
      </div>
    );
  }
}


const mapStateToProps = store => {
  return {
    date: store.date.date,
    todo: store.todo,
    modal: store.modal,
    card: store.card
  }
}
const mapDispatchToProps = dispatch => {
  return {
     setDateAction: date => dispatch(setDate(date)),
     setTodoAction: (id, title, content, date) => dispatch(setTodo(id,title, content, date)),
     showTodoAction: (date) => dispatch(showTodo(date)),
     showCardAction: (id, title, content) => dispatch(showCard(id, title, content)),
     deleteTodoAction: (id) => dispatch(deleteTodo(id)),
     changeTodoAction: (id, title, content) => dispatch(changeTodo(id, title, content)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
