import axios from 'axios'

const state = {
    context: 'http://localhost:8080/user',
    user: {},
    isAuth: true,
    isJoin: true,
    isJoinError: false
}

const mutations = {
    JOIN_SUCCESS(state, payload) {
        state.isJoin = true
        state.isJoinError = false
        state.user = payload.user
        localStorage.setItem('token', payload.token)
        localStorage.setItem('id', payload.user.id)
        localStorage.setItem('userEmail', payload.user.userEmail)
        localStorage.setItem('password', payload.user.password)
    },
    JOIN_ERROR(state) {
        state.isJoin = false
        state.isJoinError = true
        alert('회원가입에 실패하였습니다.')
    },
    AUTH_ID_SUCCESS(state, id) {
        state.id = id
        state.isAuth = true
    },
    AUTH_ERROR(state) {
        state.isAuth = false
        alert('이미 존재합니다.')
    }
}

const actions = {
    async joinProcess({commit}, payload) {
        const url = state.context + '/user/joinProcess'
        const headers = {
            authorization: 'JWT fefege..',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(url, payload, headers)
            .then(({data}) => {
                if (data.result) {
                    alert('success')
                    commit('JOIN_SUCCESS', data)
                } else {
                    alert('error')
                    commit('JOIN_ERROR')
                }
            })
            .catch(() => {
                alert('서버 통신 실패')
                commit('JOIN_ERROR')
            })
    },
    async authIds({commit}, id) {
        axios
            .get(state.context + id)
            .then(data => {
                if (data.result) {
                    commit('AUTH_ID_SUCCESS', id)
                } else {
                    commit('AUTH_ERROR')
                }
            })
            .catch(() => {
                alert('서버 통신 실패')
            })
    }
}

export default {
    name: 'join',
    namespaced: true,
    state,
    actions,
    mutations
}
