import axios from 'axios';

const state = {
    context: 'http://localhost:8080',
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

        //수정해야 하는부분
        localStorage.setItem('token', payload.token)
        localStorage.setItem('id', payload.user.id)
        localStorage.setItem('password', payload.user.password)
        alert("환영합니다.");
        this.$router.push({path: './main', query: this.body})
    },
    LOGIN_ERROR(state) {
        state.isLogin = false
        state.isLoginError = true
        alert('아이디나 비밀번호를 다시 확인해 주십시오.')
    }
}

const actions = {
    async loginProcess({commit}, payload) {
        const url = state.context + '/user/login'
        const headers = {
            authorization: 'JWT fefege..',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(url, payload, headers)
            .then(({data}) => {
                if (data === true) {
                    console.log("true 진입")
                    commit('LOGIN_SUCCESS', data)
                } else {
                    console.log("false 진입")
                    commit('LOGIN_ERROR')
                }
            })
            .catch(() => {
                console.log("catch 진입")
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