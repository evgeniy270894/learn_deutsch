import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig);

new Vue({
    router,
    store,
    render: h => h(App),
    beforeCreate(){
        let vm = this
        firebase.auth().onAuthStateChanged(function(user) {
            vm.$store.dispatch('STATE_CHANGED', user)
        });
    }
}).$mount('#app')
