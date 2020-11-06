import choiceBox from '../../components/choiceBox/choiceBox.vue'
export default {
  name: 'game',

  data: () => {
    return {
      latestResult: '',
      playerChoice: '',
      computerChoice: ''
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

    getWinner () {
      return this.$store.getters.getWinner
    },

    getItems () {
      return this.$store.getters.getTypes
    }
  },

  methods: {
    incrementScore (id) {
      if (this.getComputerScore < 10 && this.getHumanScore < 10) {
        this.playerChoice = (id === 1) ? 'Rock' : ((id === 2) ? 'Paper' : 'Scissors')
        const computerMove = this.generateComputerMove()
        this.computerChoice = (computerMove === 1) ? 'Rock' : ((computerMove === 2) ? 'Paper' : 'Scissors')

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
      }
    },

    generateComputerMove () {
      const choice = Math.floor(Math.random() * 3) + 1

      return choice
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
