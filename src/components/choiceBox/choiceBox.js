
export default {
  name: 'choiceBox',

  props: {
    choiceId: {
      type: Number
    }
  },

  computed: {
    isRock () {
      return this.choiceId === 1
    },

    isPaper () {
      return this.choiceId === 2
    },

    isScissors () {
      return this.choiceId === 3
    }
  }
}
