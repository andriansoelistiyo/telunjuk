export const state = () => ({
    loggedIn: false,
    user: ''
})

export const mutations = {
    setCookie(state, payload) {
        state.loggedIn = payload
    },
    setUser(state, payload) {
        state.user = payload
    }
}

export const actions = {
    async nuxtServerInit({ commit, dispatch }, { req }) {
        // const token = this.$cookies.get('auth.token')
        // const user = this.$cookies.get('user_name')
        // console.log('auth.token ' + token)
        // console.log('user name ' + user)
        // if(user !== undefined && token !== undefined) {
        //     this.$auth.setUser({
        //         token,
        //         name: user
        //     })
        // }

        // if(user !== undefined) {
        //     this.$cookies.remove('user_name')
        // }

        // if(token !== undefined) {
        //     this.$auth.setToken('local', token)
        // }

        // commit('setCookie', this.$auth.loggedIn)
        // commit('setUser', this.$auth.user)
    }
}
