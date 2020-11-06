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
    computerWins: 0,
    winner: ''
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
      store.winner = ''
    },
    [types.SET_ISLOGGEDIN] (store, status) {
      store.isLoggedIn = status
    },
    [types.CREATE_USER] (store, newUser) {
      store.types.users.push(newUser)
    },
    [types.SET_WINNER] (store, winner) {
      store.winner = winner
    }
  },
  actions: {
    resetWins ({ commit }) {
      commit(types.RESET_WINS)
    },
    incrementHumanWins ({ commit, getters }) {
      const wins = getters.getHumanWins + 1
      commit(types.INCREMENT_HUMAN_WINS, wins)
      if (wins === 10) {
        commit(types.SET_WINNER, 'You')
      }
    },
    incrementComputerWins ({ commit, getters }) {
      const wins = getters.getComputerWins + 1
      commit(types.INCREMENT_COMPUTER_WINS, wins)
      if (wins === 10) {
        commit(types.SET_WINNER, 'Computer')
      }
    },
    login ({ commit, getters }, { email, password }) {
      const users = getters.getUsers.some(
        user => user.email === email && user.password === password
      )
      console.log('found user?', users)
      if (users) {
        commit(types.SET_ISLOGGEDIN, true)
        console.log('was getters set, isLoggedIn?', getters.getIsLoggedIn)
      }
    },
    createUser ({ commit, getters }, { email, password }) {
      const users = getters.getUsers.some(
        user => user.email === email
      )
      if (!users) {
        commit(types.CREATE_USER, { email, password })
        commit(types.SET_ISLOGGEDIN, true)
      }
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
    },
    getIsLoggedIn: (state) => {
      return state.isLoggedIn
    },
    getWinner: (state) => {
      return state.winner
    }
  }
})
