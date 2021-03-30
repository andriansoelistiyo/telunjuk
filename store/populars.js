export const state = () => ({
    list: [],
    loading: false
});

export const mutations = {
    set(state, payload) {
        state.list = [payload];
    },
    isLoading(state, loading) {
        state.loading = loading;
    }
};

export const actions = {
    async get({ commit }) {
        try {
            let result = await this.$axios.get(`/home/popular-search`, {
                auth: {
                    username: 'admintelunjuk',
                    password: 'TJKadmin2018'
                }
            });

            result = result.data.data

            commit('set', result);
        } catch(e) {
            console.log(`popular: ${e.message}`);
        }
    }
};
