import { createStore } from 'vuex'
import * as types from './mutation-types'

export default createStore({
  state: {
    types: {
      rock: { id: 1 },
      paper: { id: 2 },
      scissors: { id: 3 }
    },
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
    }
  },
  getters: {
    getTypes: (state) => {
      return state.types
    },

    getHumanWins: (state) => {
      return state.humanWins
    },

    getComputerWins: (state) => {
      return state.computerWins
    }
  }
})
