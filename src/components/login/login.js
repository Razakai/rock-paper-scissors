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

  methods: {
    async login () {
      await this.$store.dispatch('login', { email: this.email, password: this.password })
      if (this.getIsLoggedIn) {
        await this.$router.push('/game')
      }
    },

    async register () {
      await this.$store.dispatch('createUser', { email: this.email, password: this.password })
      if (this.getIsLoggedIn) {
        await this.$router.push('/game')
      }
    },

    getIsLoggedIn () {
      return this.$store.getters.getIsLoggedIn
    }
  }
}
