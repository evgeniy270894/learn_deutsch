import firebase from 'firebase'

export default {
    state: {
        user: {
            isAuthenticated: false,
            userId: null,
        }
    },
    getters:{
        isAuthenticated: state => state.user.isAuthenticated
    },
    mutations: {
        SET_USER(state, payload){
            state.user.isAuthenticated = true
            state.user.userId = payload
        },
        UNSET_USER(state){
            state.user.isAuthenticated = false
            state.user.userId = null
        }
    },
    actions: {
        SIGNUP({commit}, payload) {
            commit('SET_PROCESSING', true);
            commit('CLEAR_ERROR');
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    console.log(user)
                })
                .catch(function (error) {
                    commit('SET_ERROR', error.message)
                })
                .finally(() => commit('SET_PROCESSING', false))
        },

        SIGNIN({commit}, payload) {
            commit('SET_PROCESSING', true);
            commit('CLEAR_ERROR');
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    console.log(user)
                })
                .catch(function (error) {
                    commit('SET_ERROR', error.message)
                })
                .finally(() => commit('SET_PROCESSING', false))
        },
        SIGNOUT(){
            firebase.auth().signOut()
        },
        STATE_CHANGED({commit}, payload){
            if(payload){
                commit('SET_USER', payload.uid)
            }else {
                commit('UNSET_USER')
            }
        }
    }
}
