import axios from 'axios'

const state = {
    context: 'http://localhost:4000/main',
    userId: {},
    isUpdate: true
}

const mutations = {
    PROFILE_UPDATE(state, payload) {
        state.isUpdate = true
        state.userId = payload.userId
    },
    PROFILE_ERROR(state) {
        state.isUpdate = false
        alert('변경에 실패하였습니다.')
    }
}

const actions = {
    profileUpdate({commit}, payload) {
        const url = state.context + `${payload.userId}`
        axios
            .patch(url, payload)
            .then(({data}) => {

                if(data.result) {
                    alert(data.result)
                    commit('PROFILE_UPDATE', data)
                } else {
                    alert('ERROR')
                    commit('PROFILE_ERROR')
                }
            })
            .catch(() => {
                alert('서버 전송 실패')
                commit('PROFILE_ERROR')
            })
    }
}

export default {
    name: 'profile',
    namespaced: true,
    state,
    mutations,
    actions
}