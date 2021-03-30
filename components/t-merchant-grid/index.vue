<template>
    <div class="card-grid">
        <a :href="merchant.url">
            <div class="header-content">
                <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                    <img :data-src="merchant.logo" class="img-fluid img-merchant mx-auto d-block" :alt="merchant.nama">
                </div>
            </div>
            <div class="body-content">
                <p class="title-merchant" :title="merchant.nama">{{ merchant.nama }}</p>
            </div>
        </a>
    </div>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
    name: 'tMerchantGrid',
    mixins: [lazyLoad],
    props: {
        merchant: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
    .img-merchant {
        min-height: 30px;
    }

    .title-merchant {
        font-size: 10px !important;
        line-height: 15px !important;
    }
}

@media screen and (min-width: 1140px) {
    .img-merchant {
        min-height: 38px;
    }
}

a:hover {
    text-decoration: none;
}

.card-grid {
    position: relative;
    box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
    border-radius: 8px;
    background-color: #ffffff;
}

.header-content {
    position: relative;
    padding: 8px 8px 0;
}

.body-content {
    padding: 8px;
}

.title-merchant {
    font-size: 14px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    overflow: hidden;
    font-family: roboto, sans-serif;
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 21px;
    color: var(--black);
    text-align: center;
}
</style>
