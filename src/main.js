import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/auth'
import './firebaseApp'

Vue.config.productionTip = false

let app

const init = () => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit('setUser', user)
  } else {
    store.commit('setUser', null)
  }
  init()
})
