import TextInput from '../sections/TextInput/TextInput.vue'
import GButton from '../../components/sections/GButton/GButton.vue'
export default {
  name: 'login',

  data: () => {
    return {
      email: '',
      password: ''
    }
  },

  components: {
    TextInput,
    GButton
  },

  computed: {
    getIsLoggedIn () {
      return this.$store.getters.getIsLoggedIn
    }
  },

  methods: {
    async login () {
      if (this.validateInput()) { await this.$store.dispatch('login', { email: this.email, password: this.password }) }

      if (this.getIsLoggedIn) {
        await this.$router.push('/game')
      }
    },

    validateInput () {
      return this.email.length > 0 && this.password.length > 0
    },

    async register () {
      if (this.validateInput()) { await this.$store.dispatch('createUser', { email: this.email, password: this.password }) }

      if (this.getIsLoggedIn) {
        await this.$router.push('/game')
      }
    }
  }
}
