
export default {
  name: 'GButton',

  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    urlToNavigateTo: {
      type: String,
      default: ''
    }
  },

  methods: {
    onClick (event) {
      if (this.disabled) {
        event.stopPropagation()
        event.preventDefault()
      } else {
        if (this.urlToNavigateTo) {
          window.open(this.urlToNavigateTo)
        }

        this.$emit('click', event)
      }
    }
  }
}
