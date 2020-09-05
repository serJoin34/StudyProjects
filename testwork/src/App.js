import React from 'react';
import { connect } from 'react-redux'
//import Input from './component/pageInput'
import Main from './component/Main/Main'
import Auth from './component/Auth/Auth'
import './App.css';
import { authUser, fetchAuth } from './store/actions/authAction';
import { setTerminal, deleteTerminal } from './store/actions/terminalAction';
import { setPagination, sortBuyers } from './store/actions/buyerAction';


class App extends React.Component {
  render(){
    if(this.props.auth.login === null && this.props.auth.password === null){
      return(
        <div className='App'>
          {
            <Auth fetchAuth={this.props.fetchAuthAction}/>
          }
        </div>
      )
    }else{
      return (
        <div className="App">
          {
            <Main 
            avatar={this.props.auth.avatar}
            authUser={this.props.authUserAction}
            terminal={this.props.terminal} 
            setTerminal={this.props.setTerminalAction} 
            deleteTerminal={this.props.deleteTerminalAction} 
            buyers={this.props.buyers}
            pages={this.props.pages}
            setPagination={this.props.setPaginationAction}
            sortBuyers={this.props.sortBuyersAction}
            />
          }
        </div>
      )
    }
  }

}

const mapStateToProps = store => {
  return {
    auth: store.auth,
    terminal: store.terminal,
    buyers: store.buyers,
    pages: store.pages
  }
}
const mapDispatchToProps = dispatch => {
  return {
     authUserAction: (login, password, avatar) => dispatch(authUser(login, password, avatar)),
     fetchAuthAction: (login, password) => dispatch(fetchAuth(login, password)),
     setTerminalAction: (id, name, desc) => dispatch(setTerminal(id, name,desc)),
     deleteTerminalAction: id => dispatch(deleteTerminal(id)),
     setPaginationAction: (colPages, currentPages) => dispatch(setPagination(colPages, currentPages)),
     sortBuyersAction: (num, name) => dispatch(sortBuyers(num, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
