import axios from 'axios'
import router from '../router';

const state = {
    context: 'https://160bb4d70872.ngrok.io/user/',
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
        alert('환영합니다! 회원가입에 성공하였습니다');
    },
    JOIN_ERROR(state) {
        state.isJoin = false
        state.isJoinError = true
        alert('회원가입에 실패하였습니다.')
    },
    AUTH_ID_SUCCESS(state, id) {
        state.id = id
        state.isJoin = true
        state.isAuth = true
        alert('사용 가능한 아이디입니다.');
    },
    AUTH_ID_FAILURE(state) {
        state.isJoin = false
        state.isAuth = false
        alert('이미 존재하는 아이디입니다.');
    },
    AUTH_ERROR(state) {
        state.isAuth = false
        alert('아이디를 조회할 수 없습니다.');
    }
}

const actions = {
    async joinProcess({commit}, payload) {
        const url = state.context + 'join'
        const headers = {
            authorization: 'JWT fefege..',
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        axios
            .post(url, payload, headers)
            .then(({data}) => {
                if ({data}.data === true) {
                    commit('JOIN_SUCCESS', data)
                    router.push({name: 'Login'})
                } else {
                    commit('JOIN_ERROR')
                }
            })
            .catch(() => {
                commit('JOIN_ERROR')
            })
    },
    async authId({commit}, id) {
        axios
            .get(state.context + id)
            .then(({data}) => {
                if({data}.data === true) {
                    commit('AUTH_ID_SUCCESS')
                } else {
                    commit('AUTH_ID_FAILURE')
                }
            })
            .catch(() => {
                commit('AUTH_ERROR')
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
