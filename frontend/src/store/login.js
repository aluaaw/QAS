import axios from 'axios';
import router from '../router';

const state = {
    context: 'http://localhost:8080/user/',
    user: {
        id: '',
        password: ''
    },
    isLogin: true,
    isLoginError: false
}

const mutations = {
    LOGIN_SUCCESS(state, payload) {
        state.isLogin = true
        state.isLoginError = false
        state.user = payload.user
/*
        localStorage.setItem('token', payload.token)
        localStorage.setItem('id', payload.user.id)
        localStorage.setItem('password', payload.user.password)
*/
        alert("환영합니다.");
    },
    LOGIN_ERROR(state) {
        state.isLogin = false
        state.isLoginError = true
        alert('아이디나 비밀번호를 다시 확인해 주십시오.')
    }
}

const actions = {
    async loginProcess({commit}, payload) {
        const url = state.context + 'login'
        const headers = {
            authorization: 'JWT fefege..',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(url, payload, headers)
            .then(({data}) => {
                if ({data}.data === true) {
                    commit('LOGIN_SUCCESS', data)
                    router.push({name: 'List'})
                } else {
                    commit('LOGIN_ERROR')
                }
            })
            .catch(() => {
                commit('LOGIN_ERROR')
            })
    }
}

export default {
    name: 'login',
    namespaced: true,
    state,
    actions,
    mutations
}