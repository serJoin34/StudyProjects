export const FETCH_AUTH = 'FETCH_AUTH'

export function fetchAuth(login, password) {
    return dispatch => {
      fetch(`https://api.github.com/users/${login}`)
      .then(response => {
        return  response.json()
      })
      .then(data => {
        return dispatch(authUser(login, password, data.avatar_url)) 
      })
    }
}

export const AUTH_USER = 'AUTH_USER'

export function authUser(login, password, avatar) {
  
    return {
      type: AUTH_USER,
      login: login,
      password: password,
      avatar: avatar
    }
  }