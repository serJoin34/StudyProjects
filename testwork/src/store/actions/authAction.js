export const AUTH_USER = 'AUTH_USER'

export function authUser(login, password, avatar) {
    return {
      type: AUTH_USER,
      login: login,
      password: password,
      avatar: avatar
    }
  }