export const state = () => ({
    list: [],
    message: ""
});

export const mutations = {
    set(state, payload) {
        state.list = payload.data;
        state.message = payload.message;
    },
    getMessage(state, message) {
        state.message = message;
    }
};

export const actions = {
    async get({ commit }) {
        try {
            let result = await this.$axios.get(`/home/banner`, {
                auth: {
                    username: 'admintelunjuk',
                    password: 'TJKadmin2018'
                }
            });
            let message = result.data.message;

            result = result.data.data.map(val => {
                return {
                    id: val.id_banner,
                    bannerImageDesktop: val.image_d,
                    bannerImageMobile: val.image_m,
                    bannerAlt: val.banner_title,
                    bannerRedirect: val.redirect_d,
                };
            });

            commit('set', { data: result, message });
        } catch(e) {
            console.log(`banner: ${e.message}`);
            commit('getMessage', e.message);
        }
    }
};
