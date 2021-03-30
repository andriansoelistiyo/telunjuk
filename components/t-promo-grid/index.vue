<template>
    <div class="card-grid">
        <div class="header-content">
            <!--
            <a :href="'https://www.telunjuk.com/promo/detail/' + item.detail_link" target="_blank" @click="eventTrackerImage(item, page)">
                <img :src="item.banner" class="img-fluid img-promo" :alt="item.title">
            </a>
            -->
            <a :href="promo.link" target="_blank" @click="eventTrackerImage(promo, page)" rel="nofollow">
                <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                    <img :data-src="promo.banner" class="img-fluid img-promo" :alt="promo.title">
                </div>
            </a>
        </div>
        <div class="body-content">
            <p class="title-promo" :title="promo.title">{{ promo.title }}</p>
            <div class="period-promo">
                <div class="row">
                    <div class="col-8">
                        <p class="periode-promo m-0">Periode Promo</p>
                        <p class="date-promo">{{ this.$moment(promo.start_date).format("DD MMM YYYY") }} - {{ this.$moment(promo.end_date).format("DD MMM YYYY") }}</p>
                    </div>
                    <div class="col-4">
                        <div class="clearfix">
                            <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                                <img :data-src="promo.store_logo" class="float-right img-merchant" alt="Merchant Image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-content">
            <a :href="promo.link" target="_blank" @click="eventTrackerButton(promo, page)" class="btn btn-success btn-block font-weight-bold fs-button br-8px" rel="nofollow">Cek Sekarang</a>
        </div>
    </div>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
    name: 'tPromoGrid',
    mixins: [lazyLoad],
    props: {
        promo: {
            type: Object,
            required: true,
        },
        page: {
            type: String,
            required: true,
        }
    },
    methods: {
        eventTrackerImage(data, page) {
            const value = `${data.title} - ${data.url}`;

            this.$ga.event(page, 'Click Image', value);
        },
        eventTrackerButton(data, page) {
            const value = `${data.title} - ${data.url}`;

            this.$ga.event(page, 'Click Button', value);
        }
    },
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
    .img-promo {
        height: 150px !important;
    }

    .title-promo {
        font-size: 12px !important;
        line-height: 18px !important;
        min-height: 36px !important;
    }

    .periode-promo {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .date-promo {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .img-merchant {
        height: 24px !important;
    }

    .fs-button {
        font-size: 12px;
        line-height: 18px;
    }
}

@media screen and (min-width: 720px) and (max-width: 959px) {
    .title-promo {
        font-size: 12px !important;
        line-height: 18px !important;
        min-height: 36px !important;
    }

    .periode-promo {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .date-promo {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .img-merchant {
        height: 24px !important;
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

.img-promo {
    border-radius: 8px 8px 0 0;
    height: 180px;
    width: 100%;
}

.body-content {
    padding: 16px;
}

.title-promo {
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

.period-promo {
    margin-top: 16px;
}

.gray-color {
    color: var(--gray);
}

.periode-promo {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 0;
    color: var(--gray);
}

.date-promo {
    font-size: 12px;
    line-height: 18px;
    font-weight: 500;
    margin-bottom: 0;
}

.img-merchant {
    height: 32px;
}

.footer-content {
    padding: 16px;
    border-top: 1px solid var(--light-gray);
}
</style>
