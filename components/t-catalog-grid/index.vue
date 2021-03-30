<template>
    <div class="card-grid">
        <div v-if="catalog.recommendation_catalog">
            <a :href="catalog.recommendation_catalog.url_redirect" target="_blank" @click="eventTrackerRecomendation(catalog, page)" rel="nofollow">
                <div class="header-content">
                    <div v-lazy-container="{ selector: 'img', error: imgLoadingPort, loading: imgLoadingPort }">
                        <img :data-src="catalog.image_catalog" class="img-fluid img-catalog mx-auto d-block" :alt="catalog.marketing_name_catalog">
                    </div>
                    <!--
                    <div class="badge badge-catalog">
                        Katalog
                    </div>
                    <div class="badge-sale">
                        SALE
                    </div>
                    -->
                </div>
                <div class="body-content">
                    <p class="title-catalog" :title="catalog.marketing_name_catalog">{{ catalog.marketing_name_catalog }}</p>
                    <!--
                    <div class="rating-size">
                        <i class="fas fa-star fa-fw yellow-color"></i>
                        <b>{{ item.rating_catalog || 0 }}</b>
                        ({{ item.review_catalog || 0 }})
                    </div>
                    <p class="mb-0 mt-4px fs-12px start-from text-secondary">Mulai dari</p>
                    <p class="price">{{ removeComma($n(catalog.price_catalog, 'currency', 'id')) }}</p>
                    <p class="total-store">{{ catalog.merchants_catalog }} Toko Online</p>
                    -->
                </div>
            </a>
        </div>
        <div v-else-if="catalog.lowest_price_catalog">
            <a :href="catalog.lowest_price_catalog.url_redirect" target="_blank" @click="eventTrackerLowest(catalog, page)" rel="nofollow">
                <div class="header-content">
                    <div v-lazy-container="{ selector: 'img', error: imgLoadingPort, loading: imgLoadingPort }">
                        <img :data-src="catalog.image_catalog" class="img-fluid img-catalog mx-auto d-block" :alt="catalog.marketing_name_catalog">
                    </div>
                    <!--
                    <div class="badge badge-catalog">
                        Katalog
                    </div>
                    <div class="badge-sale">
                        SALE
                    </div>
                    -->
                </div>
                <div class="body-content">
                    <p class="title-catalog" :title="catalog.marketing_name_catalog">{{ catalog.marketing_name_catalog }}</p>
                    <!--
                    <div class="rating-size">
                        <i class="fas fa-star fa-fw yellow-color"></i>
                        <b>{{ item.rating_catalog || 0 }}</b>
                        ({{ item.review_catalog || 0 }})
                    </div>
                    <p class="mb-0 mt-4px fs-12px start-from text-secondary">Mulai dari</p>
                    <p class="price">{{ removeComma($n(catalog.price_catalog, 'currency', 'id')) }}</p>
                    <p class="total-store">{{ catalog.merchants_catalog }} Toko Online</p>
                    -->
                </div>
            </a>
        </div>
        <div v-if="catalog.recommendation_catalog" class="footer-content">
            <a :href="catalog.recommendation_catalog.url_redirect" target="_blank" @click="eventTrackerRecomendation(catalog, page)" rel="nofollow">
                <div class="badge-compare">
                    Terbaik dari {{ catalog.total_product_mapped }} Deals
                </div>
                <div class="recommendation-section clearfix">
                    <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                        <img :data-src="catalog.recommendation_catalog.logo" class="img-merchant mx-auto d-block" alt="Merchant Image">
                    </div>
                    <div class="float-left">
                        <p class="recommendation-price">{{ removeComma($n(catalog.recommendation_catalog.price, 'currency', 'id')) }}</p>
                        <div class="container-rating-sold">
                            <div class="rating-size">
                                <font-awesome-icon :icon="['fas', 'star']" fixed-width class="yellow-color"/>
                                <!-- <i class="fas fa-star fa-fw yellow-color"></i> -->
                                <b>{{ catalog.recommendation_catalog.rating || 0 }}</b>
                                ({{ numberWithCommas(catalog.recommendation_catalog.review) || 0 }})
                            </div>
                            <!-- <div class="rating-size" v-else></div> -->
                            <!-- <p class="total-sold"><b>{{ numberWithCommas(catalog.recommendation_catalog.total_sold) }}</b> Terjual</p> -->
                            <!-- <p class="total-sold" v-else></p> -->
                        </div>
                    </div>
                    <!-- <div class="float-right lh-icon">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" fixed-width/>
                        <i class="fas fa-arrow-right fa-fw"></i>
                    </div> -->
                </div>
            </a>
        </div>
        <div v-else-if="catalog.lowest_price_catalog" class="footer-content">
            <a :href="catalog.lowest_price_catalog.url_redirect" target="_blank" @click="eventTrackerLowest(catalog, page)" rel="nofollow">
                <div class="badge-compare">
                    Terbaik dari {{ catalog.total_product_mapped }} Deals
                </div>
                <div class="recommendation-section clearfix">
                    <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                        <img :data-src="catalog.lowest_price_catalog.logo" class="img-merchant mx-auto d-block" alt="Merchant Image">
                    </div>
                    <div class="float-left">
                        <p class="recommendation-price">{{ removeComma($n(catalog.lowest_price_catalog.price, 'currency', 'id')) }}</p>
                        <div class="container-rating-sold">
                            <div class="rating-size">
                                <font-awesome-icon :icon="['fas', 'star']" fixed-width class="yellow-color"/>
                                <!-- <i class="fas fa-star fa-fw yellow-color"></i> -->
                                <b>{{ catalog.lowest_price_catalog.rating || 0 }}</b>
                                ({{ numberWithCommas(catalog.lowest_price_catalog.review) || 0 }})
                            </div>
                            <!-- <div class="rating-size" v-else></div> -->
                            <!-- <p class="total-sold"><b>{{ numberWithCommas(catalog.lowest_price_catalog.total_sold) }}</b> Terjual</p> -->
                            <!-- <p class="total-sold" v-else></p> -->
                        </div>
                    </div>
                    <!-- <div class="float-right lh-icon">
                        <font-awesome-icon :icon="['fas', 'arrow-right']" fixed-width />
                        <i class="fas fa-arrow-right fa-fw"></i>
                    </div> -->
                </div>
            </a>
        </div>
        <a :href="catalog.link_catalog" @click="eventTrackerCatalog(catalog, page)" rel="follow">
            <div class="compare-price-button">
                Bandingkan Harga Lainnya
                <font-awesome-icon :icon="['fas', 'arrow-right']" fixed-width />
            </div>
        </a>
    </div>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
    name: 'tCatalogGrid',
    mixins: [lazyLoad],
    props: {
        catalog: {
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
        eventTrackerCatalog(data, page) {
            const value = `${data.marketing_name_catalog} - ${data.link_catalog}`;

            this.$ga.event(page, 'Click Price Compare', value);
        },
        eventTrackerRecomendation(data, page) {
            const value = `${data.recommendation_catalog.logo} - ${data.marketing_name_catalog} - ${data.recommendation_catalog.url_redirect}`;

            this.$ga.event(page, 'Click Recomendation', value);
        },
        eventTrackerLowest(data, page) {
            const value = `${data.lowest_price_catalog.logo} - ${data.marketing_name_catalog} - ${data.lowest_price_catalog.url_redirect}`;

            this.$ga.event(page, 'Click Lowest', value);
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
    .img-catalog {
        min-height: 150px;
        max-height: 150px;
    }

    .title-catalog {
        font-size: 10px !important;
        line-height: 15px !important;
        min-height: 30px !important;
    }

    .start-from {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .price {
        font-size: 12px !important;
        line-height: 18px !important;
    }

    .total-store {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .rating-size {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .recommendation-price {
        font-size: 12px !important;
        line-height: 18px !important;
    }

    .lh-icon {
        line-height: 45px !important;
    }

    .badge-compare {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .badge-fomo {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .badge-catalog {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .total-sold {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .compare-price-button {
        font-size: 8px !important;
        line-height: 12px !important;
    }

    /* .container-rating-sold {
        height: 34px !important;
    } */
}

@media screen and (min-width: 1140px) {
    .img-catalog {
        min-height: 180px;
        max-height: 180px;
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

.badge-sale {
    position: absolute;
    top: 8px;
    right: 8px;
    background-color: var(--red);
    color: #ffffff;
    padding: 10px 5px;
    border-radius: 50%;
    font-size: 10px;
    font-weight: 600;
    text-align: center;
}

.badge-catalog {
    position: absolute;
    top: 8px;
    left: -4px;
    background-color: var(--blue);
    color: #ffffff;
    font-weight: 500;
}

.badge-compare {
    margin-left: 8px;
    margin-right: 8px;
    border-radius: 4px;
    background-color: var(--green);
    color: #ffffff;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    padding: 2px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    overflow: hidden;
}

.badge-fomo {
    background-color: var(--light-green);
    color: var(--green);
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    padding: 2px;
    text-align: center;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    word-wrap: break-word;
    overflow: hidden;
}

.img-catalog {
    border-radius: 8px 8px 0 0;
}

.img-merchant {
    height: 20px;
}

.body-content {
    padding: 8px;
}

.title-catalog {
    font-size: 12px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    overflow: hidden;
    font-family: roboto, sans-serif;
    margin-bottom: 0;
    line-height: 18px;
    min-height: 36px;
    color: var(--black);
}

.rating-size {
    font-size: 12px;
    line-height: 18px;
    color: var(--gray);
    margin-top: 4px;
}

.yellow-color {
    color: var(--yellow);
}

.badge-discount {
    color: var(--red);
    background-color: #feecf0;
}

.price {
    font-size: 14px;
    font-weight: 600;
    font-family: roboto, sans-serif;
    margin-bottom: 0;
    line-height: 21px;
    color: var(--orange);
}

.total-store {
    font-size: 12px;
    font-family: roboto, sans-serif;
    margin-bottom: 0;
    line-height: 18px;
    color: var(--blue);
}

.recommendation-section {
    padding: 8px;
    color: var(--green)
}

.recommendation-price {
    font-size: 14px;
    font-weight: 600;
    font-family: roboto, sans-serif;
    margin-bottom: 0;
    line-height: 21px;
    color: var(--orange);
    margin-top: 4px;
}

.lh-icon {
    line-height: 54px;
}

.total-sold {
    font-size: 12px;
    line-height: 18px;
    color: var(--blue);
    margin-bottom: 0;
    margin-top: 4px;
}

.compare-price-button {
    display: block;
    background-color: var(--white);
    color: var(--green);
    border: 1px solid transparent;
    border-top-color: var(--green);
    border-bottom-color: var(--green);
    border-right-color: var(--green);
    border-left-color: var(--green);
    text-align: center;
    font-size: 11px;
    font-weight: bold;
    padding: 8px;
    border-radius: 0 0 8px 8px;
}

.compare-price-button:hover {
    background-color: var(--green);
    color: var(--white);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

/* .container-rating-sold {
    height: 40px;
} */
</style>
