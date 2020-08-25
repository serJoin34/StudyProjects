import React from 'react'
import './Auth.css'
import PropTypes from 'prop-types'

class Auth extends React.Component{
    constructor(){
        super()
        this.state={
            login: '',
            password: '',
            style: {
                border: '1px solid #cccccc'
            },
            placeholder: {
                placeholder1: 'Введите логин GitHub',
                placeholder2: 'Введите пароль'
            }
        }
        this.handlerEmail = this.handlerEmail.bind(this)
        this.handlerPassword = this.handlerPassword.bind(this)
        this.handlerAuth = this.handlerAuth.bind(this)
    }

    handlerEmail(e){
        this.setState({
            login: e.target.value, password: this.state.password
        })
    }

    handlerPassword(e){
        this.setState({
            login: this.state.login, password: e.target.value
        })
    }

    handlerAuth(){    
        let a = /([a-z]+[A-Z]+[0-9]+|[a-z]+[0-9]+[A-Z]+|[A-Z]+[a-z]+[0-9]+|[A-Z]+[0-9]+[a-z]+|[0-9]+[a-z]+[A-Z]+|[0-9]+[A-Z]+[a-z]+)/
        if(a.test(this.state.password) && this.state.password.length > 8 && this.state.password.length < 26 && this.state.login !== ''){
            fetch(`https://api.github.com/users/${this.state.login}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.props.authUser(this.state.login, this.state.password, data.avatar_url)
            })
            .catch(er => {
                console.log(er);
            })
        }
        else{
            this.setState({
                style: {
                    border: '1px solid red',
                },
                placeholder: {
                    placeholder1: 'Неверный логин',
                    placeholder2: 'Неверный пароль'
                }
            })
        }
    }

    render(){

        return(
            <section className='auth-conteiner'>
                <h2>Авторизация</h2>
                <input className='form-control email-input' style={this.state.style} placeholder={this.state.placeholder.placeholder1} value={this.state.login} onChange={this.handlerEmail}/>
                <input className='form-control email-input' style={this.state.style} placeholder={this.state.placeholder.placeholder2} value={this.state.password} onChange={this.handlerPassword}/>
                <button className='btn btn-primary' onClick={this.handlerAuth}>Авторизоваться</button>
            </section>
        )
    }
}

Auth.propTypes={
    authUser: PropTypes.func.isRequired
}

export default Auth