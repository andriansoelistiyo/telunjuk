import Vue from "vue"
import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload, {
    preLoad: 1.3,
    // attempt: 1,
    loading: require('~/assets/images/lazy-load-image-150x150.png'),
    listenEvents: [ 'scroll' ],
    filter: {
        progressive (listener, options) {
            const isCDN = /qiniudn.com/
            if (isCDN.test(listener.src)) {
                listener.el.setAttribute('lazy-progressive', 'true')
                listener.loading = listener.src + '?imageView2/1/w/10/h/10'
            }
        },
        webp (listener, options) {
            if (!options.supportWebp) return
            const isCDN = /qiniudn.com/
            if (isCDN.test(listener.src)) {
                listener.src += '?imageView2/2/format/webp'
            }
        }
    }
});
