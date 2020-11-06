import { createStore } from 'vuex'
import * as types from './mutation-types'

export default createStore({
  state: {
    types: {
      choices:
        {
          rock: { id: 1 },
          paper: { id: 2 },
          scissors: { id: 3 }
        },
      users:
      [
        {
          email: 'adamholland12398@gmail.com',
          password: 'test'
        }
      ]
    },
    isLoggedIn: false,
    humanWins: 0,
    computerWins: 0
  },
  mutations: {
    [types.INCREMENT_COMPUTER_WINS] (store, num) {
      store.computerWins = num
    },
    [types.INCREMENT_HUMAN_WINS] (store, num) {
      store.humanWins = num
    },
    [types.RESET_WINS] (store) {
      store.humanWins = 0
      store.computerWins = 0
      store.isLoggedIn = false
    },
    [types.SET_ISLOGGEDIN] (store, status) {
      store.isLoggedIn = status
    },
    [types.CREATE_USER] (store, newUser) {
      store.types.users.push(newUser)
    }
  },
  actions: {
    resetWins ({ commit }) {
      commit(types.RESET_WINS)
    },
    incrementHumanWins ({ commit, getters }) {
      commit(types.INCREMENT_HUMAN_WINS, getters.getHumanWins + 1)
    },
    incrementComputerWins ({ commit, getters }) {
      commit(types.INCREMENT_COMPUTER_WINS, getters.getComputerWins + 1)
    },
    login ({ commit, getters }, email, password) {
      const users = getters.getUsers.some(
        user => user.email === email && user.password === password
      )
      if (users) {
        commit(types.SET_ISLOGGEDIN, true)
        return true
      }
      return false
    },
    createUser ({ commit, getters }, email, password) {
      const users = getters.getUsers.some(
        user => user.email === email
      )
      if (!users) {
        commit(types.CREATE_USER, { email, password })
        return true
      }
      return false
    }

  },
  getters: {
    getTypes: (state) => {
      return state.types.choices
    },

    getHumanWins: (state) => {
      return state.humanWins
    },

    getComputerWins: (state) => {
      return state.computerWins
    },

    getUsers: (state) => {
      return state.types.users
    }
  }
})
