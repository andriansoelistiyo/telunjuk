export const state = () => ({
    list: [],
    message: "",
    loading: true
});

export const mutations = {
    set(state, payload) {
        state.list = payload.data;
        state.message = payload.message;
        state.loading = false
    },
    getMessage(state, message) {
        state.message = message;
    }
};

export const actions = {
    async get({ commit }) {
        let image, url;

        try {
            let result = await this.$axios.get(`/home/category`, {
                auth: {
                    username: 'admintelunjuk',
                    password: 'TJKadmin2018'
                }
            });
            let message = result.data.message;

            result = result.data.data.map(val => {
                if(val.image === undefined) {
                    image = `https://asset.telunjuk.co.id/s/images/category/icon/${val.system_name}.png`
                } else {
                    image = val.image
                }

                if(val.alias) {
                    url = `https://telunjuk.com/harga/${val.alias}`
                } else {
                    url = ''
                }
                
                return {
                    id: val.id,
                    image,
                    title: val.name,
                    alias: val.alias,
                    url,
                };
            });

            result = result.slice(0, 10);

            commit('set', { data: result, message });
        } catch(e) {
            console.log(`category: ${e.message}`);
            commit('getMessage', e.message);
        }
    }
};
