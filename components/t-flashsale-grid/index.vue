<template>
    <client-only>
        <div class="card-grid">
            <a :href="flashsale.url_redirect" target="_blank" @click="eventTracker(flashsale, page)" rel="nofollow">
                <div class="header-content">
                    <div v-lazy-container="{ selector: 'img', error: imgLoadingPort, loading: imgLoadingPort }">
                        <img :data-src="flashsale.image" class="img-fluid img-product mx-auto d-block" :alt="flashsale.title">
                    </div>
                    <div class="badge-sale">
                        SALE
                    </div>
                    <div  v-if="$device.isDesktop" class="badge-countdown">
                        Berakhir dalam <b>{{ countDown }}</b>
                    </div>
                    <div  v-else-if="$device.isMobile" class="badge-countdown">
                        Berakhir <b>{{ countDown }}</b>
                    </div>
                </div>
                <div id="app" class="body-content">
                    <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
                        <img :data-src="flashsale.logo" class="mx-auto d-block img-merchant" alt="Merchant Image">
                    </div>
                    <p class="title-product" :title="flashsale.title">{{ flashsale.title }}</p>
                    <div class="ori-price-section">
                        <span class="badge badge-discount fs-12px">{{ flashsale.discount }}%</span>
                        <span class="ori-price">{{ removeComma($n(flashsale.original_price, 'currency', 'id')) }}</span>
                    </div>
                    <p class="price">{{ removeComma($n(flashsale.price, 'currency', 'id')) }}</p>
                    <!-- <div class="rating-size">
                        <i class="fas fa-star fa-fw yellow-color"></i>
                        <font-awesome-icon :icon="['fas', 'star']" class="yellow-color" fixed-width />
                        <b>{{ flashsale.rating }}</b>
                        ({{ numberWithCommas(flashsale.review) }})
                    </div>
                    <p class="total-sold"><b>{{ numberWithCommas(flashsale.total_sold) }}</b> Terjual</p> -->
                </div>
            </a>
        </div>
    </client-only>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
  name: 'tFlashsaleGrid',
  mixins: [lazyLoad],
  props: {
    flashsale: {
      type: Object,
      required: true,
    },
    page: {
      type: String,
      required: true,
    }
  },
    data() {
        return {
            countDown: "",
            interval: ""
        }
    },
    methods: {
        timerCount(end) {
            let now = this.$moment().format('DD/MM/YYYY HH:mm:ss');
            var ms = this.$moment(end,"DD/MM/YYYY HH:mm:ss").diff(this.$moment(now,"DD/MM/YYYY HH:mm:ss"));
            var d = this.$moment.duration(ms);
            var s = Math.floor(d.asHours()) + this.$moment.utc(ms).format(":mm:ss");

            if(now > end) {
                s = 'expired';
            }

            if(s === "0:00:00") {
                clearInterval(this.interval)
                return
            } else {
                this.countDown = s
            }
        },
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
            const value = `${data.merchant_name} - ${data.title} - ${data.url}`;

            this.$ga.event(page, 'Click Grid', value);
        }
    },
    mounted() {
        this.timerCount(this.flashsale.end_time);
        this.interval = setInterval(() => {
            this.timerCount(this.flashsale.end_time);
        }, 1000);
    }
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
    .img-product {
        min-height: 150px;
    }

    .badge-countdown {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .title-product {
        font-size: 10px !important;
        line-height: 15px !important;
        min-height: 30px !important;
    }

    .ori-price-section {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .badge-discount {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .price {
        font-size: 12px !important;
        line-height: 18px !important;
    }

    .rating-size {
        font-size: 10px !important;
        line-height: 15px !important;
    }

    .total-sold {
        font-size: 10px !important;
        line-height: 15px !important;
    }
}

@media screen and (min-width: 1140px) {
    .img-product {
        min-height: 190px;
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

.badge-countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--yellow);
    color: var(--black);
    padding: 2px 4px;
    font-size: 12px;
    line-height: 18px;
}

.img-product {
    border-radius: 8px 8px 0 0;
}

.img-merchant {
    height: 20px;
}

.body-content {
    padding: 8px;
}

.title-product {
    font-size: 12px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    overflow: hidden;
    font-family: roboto, sans-serif;
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 18px;
    min-height: 36px;
    color: var(--black);
}

.ori-price-section {
    margin-top: 4px;
    color: #9c9c9c;
    font-size: 12px;
    line-height: 15px;
}

.ori-price {
    text-decoration: line-through;
}

.badge-discount {
    color: var(--red);
    background-color: #feecf0;
}

.price {
    font-size: 14px;
    font-weight: 600;
    font-family: roboto, sans-serif;
    margin-top: 4px;
    margin-bottom: 0;
    line-height: 21px;
    color: var(--orange);
}

.rating-size {
    font-size: 12px;
    line-height: 18px;
    margin-top: 4px;
    color: var(--gray);
}

.yellow-color {
    color: var(--yellow);
}

.total-sold {
    font-size: 12px;
    line-height: 18px;
    margin-top: 4px;
    color: var(--blue);
    margin-bottom: 0;
}
</style>
