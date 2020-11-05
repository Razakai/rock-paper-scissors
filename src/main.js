import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCmoA30wuo-xOKo8wDWj-QaYFtMrBIWT_s',
  authDomain: 'rock-paper-sissors-vue.firebaseapp.com',
  databaseURL: 'https://rock-paper-sissors-vue.firebaseio.com',
  projectId: 'rock-paper-sissors-vue',
  storageBucket: 'rock-paper-sissors-vue.appspot.com',
  messagingSenderId: '751654783059',
  appId: '1:751654783059:web:fd99bf0a68dbb617499ea6',
  measurementId: 'G-60VNN7NMHE'
}

firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
