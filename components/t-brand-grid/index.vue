<template>
    <div class="card-grid">
        <a href="">
            <div class="header-content">
                <img :src="item.brandImage" class="img-fluid img-brand mx-auto d-block" :alt="item.brandTitle">
            </div>
            <div class="body-content">
                <p class="title-brand" :title="item.brandTitle">{{ item.brandTitle }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'tBrandGrid',
    props: {
        item: {
            type: Object,
            required: true,
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
    .title-brand {
        font-size: 10px !important;
        line-height: 15px !important;
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

.img-brand {
    max-height: 48px;
}

.body-content {
    padding: 8px;
}

.title-brand {
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
