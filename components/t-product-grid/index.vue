<template>
  <div class="card-grid">
    <a href target="_blank">
      <div class="header-content">
        <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
          <img
            :data-src="product.productImage"
            class="img-fluid img-product mx-auto d-block"
            :alt="product.productTitle"
          />
        </div>
        <div class="badge-sale">SALE</div>
        <div class="badge badge-sellertype">{{ product.productSellerType }}</div>
        <div class="badge-fomo">Voucher Diskon 50%</div>
      </div>
      <div class="body-content">
        <img
          :src="product.productMerchant"
          class="mx-auto d-block img-merchant"
          alt="Merchant Image"
        />
        <div class="seller-name" :title="product.productSeller">
<!--          <i class="fas fa-check-circle fa-fw text-info"></i>-->
          <font-awesome-icon :icon="['fas', 'check-circle']" class="text-info" fixed-width />
          {{ product.productSeller }}
        </div>
        <p class="title-product" :title="product.productTitle">{{ product.productTitle }}</p>
        <div class="ori-price-section">
          <span class="ori-price">Rp 10.000.000</span>
          <span class="badge badge-discount fs-12px">50%</span>
        </div>
        <p class="price">Rp {{ product.productPrice }}</p>
        <div class="rating-size">
<!--          <i class="fas fa-star fa-fw yellow-color"></i>-->
          <font-awesome-icon :icon="['fas', 'star']" class="yellow-color" fixed-width />
          <b>4.8</b>
          ({{ product.productReview }})
        </div>
        <p class="total-sold">
          <b>1.000</b> Terjual
        </p>
        <div class="location-size" :title="product.productCity">
<!--          <i class="fas fa-map-marker-alt fa-fw text-danger"></i>-->
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-danger" fixed-width />
          {{ product.productCity }}
        </div>
        <span class="badge badge-pill badge-uvp fs-12px">Gratis Ongkir</span>
      </div>
    </a>
  </div>
</template>

<script>
const imgLoading = require("~/assets/images/lazy-load-image-150x150.png");

export default {
  name: "tProductGrid",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgLoading,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 540px) {
  .badge-catalog {
    font-size: 10px !important;
    line-height: 15px !important;
    max-width: 100px !important;
  }

  .seller-name {
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

  .location-size {
    font-size: 10px !important;
    line-height: 15px !important;
  }

  .badge-uvp {
    font-size: 10px !important;
    line-height: 15px !important;
  }

  .badge-fomo {
    font-size: 10px !important;
    line-height: 15px !important;
  }

  .badge-sellertype {
    font-size: 10px !important;
    line-height: 15px !important;
    max-width: 84px !important;
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

.badge-sellertype {
  position: absolute;
  top: 8px;
  left: -4px;
  background-color: var(--blue);
  color: #ffffff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
}

.badge-fomo {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: var(--green);
  color: #ffffff;
  font-weight: 500;
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

.badge-countdown {
  position: absolute;
  bottom: 0px;
  left: 0px;
  background-color: var(--yellow);
  color: var(--black);
  padding: 2px 4px;
  font-size: 12px;
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

.seller-name {
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  color: var(--gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
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

.location-size {
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  color: var(--gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 150px;
}

.total-sold {
  font-size: 12px;
  line-height: 18px;
  margin-top: 4px;
  color: var(--blue);
  margin-bottom: 0;
}

.badge-uvp {
  color: var(--blue);
  background-color: #eef3fc;
  margin-top: 4px;
  font-weight: 500;
}
</style>
