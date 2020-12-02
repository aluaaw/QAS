import axios from 'axios';

const state = {
    context: 'http://localhost:8080',
    user: {},
    isLogin: true,
    isLoginError: false,
}

const mutations = {
    LOGIN_SUCCESS(state, payload) {
        state.isLogin = true
        state.isLoginError = false
        state.user = payload.user
        localStorage.setItem('token', payload.token)
        localStorage.setItem('userId', payload.user.userId)
        localStorage.setItem('userPassword', payload.user.userPassword)
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
            Accept: 'a아pplication/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(url, payload, headers)
            .then(({data}) => {
                if (data.result) { //이게 무슨 뜻인지 모르겠음
                    commit('LOGIN_SUCCESS', data)
                } else {
                    alert('error')
                    commit('LOGIN_ERROR')
                }
            })
            .catch(() => {
                alert('서버 전송 실패')
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