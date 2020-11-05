import choiceBox from '../../components/choiceBox/choiceBox.vue'
export default {
  name: 'game',

  data: () => {
    return {
      latestResult: ''
    }
  },

  components: {
    choiceBox
  },

  computed: {
    getHumanScore () {
      return this.$store.getters.getHumanWins
    },

    getComputerScore () {
      return this.$store.getters.getComputerWins
    },

    getItems () {
      return this.$store.getters.getTypes
    }
  },

  methods: {
    incrementScore (id) {
      const computerMove = this.generateComputerMove()
      if (id === computerMove) {
        this.setLatestResult('draw')
      } else {
        const battleNum = ((id - 1) === 0) ? 3 : id - 1
        if (battleNum === computerMove) {
          this.setLatestResult('win')
          this.$store.dispatch('incrementHumanWins')
        } else {
          this.setLatestResult('loss')
          this.$store.dispatch('incrementComputerWins')
        }
      }
    },

    generateComputerMove () {
      return Math.floor(Math.random() * 3) + 1
    },

    resetGame () {
      this.setLatestResult('')
      this.$store.dispatch('resetWins')
    },

    setLatestResult (result) {
      this.latestResult = result
    }
  }
}
