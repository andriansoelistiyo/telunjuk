export const state = () => ({
    list: [],
    loading: false,
    message: ""
});

export const mutations = {
    set(state, payload) {
        state.list = payload.data
        state.message = payload.message
    },
    isLoading(state, loading) {
        state.loading = loading;
    },
    setMessage(state, message) {
        state.message = message
    }
};

export const actions = {
    async get({ commit }) {
        try {
            let result = await this.$axios.get(`/home/article?take=3`, {
                auth: {
                    username: 'admintelunjuk',
                    password: 'TJKadmin2018'
                }
            });
            let message = result.data.message

            result = result.data.data.map((v, i) => {
                let { banner_header, intro, title, author, views, created, url } = v

                return {
                    id: i+1,
                    banner_header,
                    title,
                    intro,
                    author,
                    views,
                    created,
                    url
                }
            })

            commit('set', { data: result, message });
        } catch(e) {
            console.log(`article: ${e.message}`);
            commit('setMessage', e.message)
        }
    }
};
