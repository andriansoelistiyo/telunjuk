<template>
    <client-only>
        <div v-for="item in items" :key="item.id" v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
            <img v-if="$device.isMobile"
                class="img-fluid mb-16px br-8px"
                :data-src="item.image_m"
                alt="banner-section"
            />
            <img v-else
                class="img-fluid mb-16px br-8px"
                :data-src="item.image_d"
                alt="banner-section"
            />
        </div>
    </client-only>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
    name: "tBannerCatalogSection",
    mixins: [lazyLoad],
    props: {
        items: {
            type: Array,
            require: true,
        }
    }
}
</script>

<style scoped>

</style>
