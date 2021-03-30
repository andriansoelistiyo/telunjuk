export const state = () => ({
    list: [],
    loading: false
});

export const mutations = {
    set(state, flashsale) {
        state.list = flashsale;
    },
    isLoading(state, loading) {
        state.loading = loading;
    }
};

export const actions = {
    async get({ commit }) {
        try {
            let result = await this.$axios.get(`/home/flashsale?take=6`, {
                auth: {
                    username: 'admintelunjuk',
                    password: 'TJKadmin2018'
                }
            });

            result = result.data.data.map((val, i) => {
                return {
                    id: i+1,
                    ...val,
                    end_time: this.$moment(val.promo_end).utcOffset(val.promo_end).format('DD/MM/YYYY HH:mm:ss')
                };
            });

            commit('set', result);
        } catch(e) {
            console.log(`flash sale: ${e.message}`);
        }
    }
};
