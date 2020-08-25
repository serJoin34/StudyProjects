import React from 'react'
import './Main.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import Terminals from './Terminal/Terminals'
import Buyers from './Buyers/Buyers'
import BuyerId from './Buyers/BuyerId'
import NotFound from './NotFound'
import PropTypes from 'prop-types'

class Main extends React.Component{
    constructor(){
        super()
        this.handlerOut = this.handlerOut.bind(this)
    }

    handlerOut(){
        this.props.authUser(null, null, null)
    }

    render(){
        return(
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="navbar-brand">Navbar</div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to='/' className="nav-link">Терминалы</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/buyers' className="nav-link">Покупатели</Link>
                        </li>
                    </ul>
                </div>
                <div className='account-block'>
                    <img src={this.props.auth} alt='avatar' className='account-block__avatar'></img>
                    <button className='btn btn-primary' onClick={this.handlerOut}>Out</button>
                </div>
            </nav>

            <Switch>
                <Route exact path='/'>
                    <Terminals terminal={this.props.terminal} setTerminal={this.props.setTerminal} deleteTerminal={this.props.deleteTerminal}/>
                </Route>
                <Route path='/buyers'>
                    <Buyers buyers={this.props.buyers} pages={this.props.pages} setPagination={this.props.setPagination} sortBuyers={this.props.sortBuyers}/>
                </Route>
                <Route exact path='/buyer/:id' match={matchMedia} render={(props) => <BuyerId buyers={this.props.buyers} {...props}/>}/>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
            

            
        </Router>

        )
    }
}

Main.propTypes={
    authUser: PropTypes.func.isRequired
}

export default Main