<template>
    <div class="card-grid">
        <a :href="article.url" @click="eventTracker(article, page)" rel="follow">
            <div class="header-content">
                <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                    <img :data-src="article.banner_header" class="img-fluid img-article" :alt="article.title">
                </div>
            </div>
            <div class="body-content">
                <!--
                <div class="badge badge-category">
                    Article Category
                </div>
                -->
                <p class="title-article" :title="article.title">{{ article.title }}</p>
                <p class="summary-article mt-8px">{{ article.intro }}</p>
                <div class="media mt-16px">
                    <div v-lazy-container="{ selector: 'img', error: imgLoadingPort, loading: imgLoadingPort }">
                        <img class="mr-2 img-avatar" data-src="https://asset.telunjuk.co.id/f/badge/logo-telunjuk-only-537338a0-fbed-4f14-85f5-6970f6ca1b57.png" alt="Generic placeholder image">
                    </div>
                    <div class="media-body">
                        <p class="author">{{ article.author }}</p>
                        <p class="date-article"><b>{{ numberWithCommas(article.views) }}</b> Dilihat • {{ this.$moment(article.created).format("DD MMM YYYY") }}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
    name: 'tArticleGrid',
    mixins: [lazyLoad],
    props: {
        article: {
            type: Object,
            required: true,
        },
        page: {
            type: String,
            required: true,
        }
    },
    methods: {
        numberWithCommas(n) {
            if(n === undefined) {
                return 0;
            }

            return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
        },
        removeComma(n) {
            return n.replace(",00", "");
        },
        eventTracker(data, page) {
            const value = `${data.title} - ${data.url}`;

            this.$ga.event(page, 'Click Grid', value);
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
    .img-article {
        min-height: 96px;
    }

    .title-article {
        font-size: 12px !important;
        line-height: 18px !important;
        min-height: 36px !important;
    }

    .summary-article {
        font-size: 10px !important;
        line-height: 15px !important;
        min-height: 45px !important;
    }

    .img-avatar {
        height: 30px !important;
        width: 30px !important;
    }

    .author {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .date-article {
        font-size: 10px !important;
        line-height: 15px !important;
    }
}

@media screen and (min-width: 1140px) {
    .img-article {
        min-height: 119px;
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
}

.img-article {
    border-radius: 8px 8px 0 0;
    width: 100%;
}

.body-content {
    padding: 16px;
}

.badge-category {
    color: var(--blue);
    background-color: #eef3fc;
    font-weight: 500;
}

.title-article {
    font-size: 14px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    overflow: hidden;
    font-family: roboto, sans-serif;
    margin-bottom: 0;
    line-height: 21px;
    min-height: 42px;
    color: var(--black);
}

.summary-article {
    font-size: 12px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    word-wrap: break-word;
    overflow: hidden;
    font-family: roboto, sans-serif;
    margin-bottom: 0;
    line-height: 18px;
    min-height: 54px;
    color: var(--gray);
}

.img-avatar {
    height: 36px;
    width: 36px;
    background-color: var(--red);
    border-radius: 50%;
    padding: 4px;
}

.author {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 0;
    color: var(--black);
}

.date-article {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 0;
    color: var(--gray);
}
</style>
