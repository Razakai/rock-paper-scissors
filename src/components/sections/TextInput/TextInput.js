export default {
  name: 'TextInput',

  props: {
    placeholder: {
      type: String,
      default: 'Insert value here'
    },
    modelValue: {
      type: String,
      default: ''
    }
  },

  methods: {
    updateValue (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
