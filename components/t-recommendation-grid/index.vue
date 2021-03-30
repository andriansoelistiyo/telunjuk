<template>
  <div class="card-grid">
    <div class="header-content">
      <span class="badge badge-pill badge-recommendation float-xs-right fs-12px">Rekomendasi Untukmu</span>
    </div>
    <div class="body-content">
      <img :src="item.productMerchant" class="mx-lg-auto mx-xl-auto d-block img-merchant" alt="Merchant Image" />
      <div v-if="$device.isDesktop">
        <div class="seller-name" :title="item.productSeller">
          <font-awesome-icon :icon="['fas', 'check-circle']" class="text-info" fixed-width />
          {{ item.productSeller }}
        </div>
        <p class="title-recommendation" :title="item.productTitle">{{ item.productTitle }}</p>
        <div class="ori-price-section">
          <span class="ori-price">Rp 10.000.000</span>
          <span class="badge badge-discount fs-12px">50%</span>
        </div>
        <p class="price">Rp {{ item.productPrice }}</p>
        <div class="rating-size">
          <font-awesome-icon :icon="['fas', 'star']" class="yellow-color" fixed-width />
          <b>4.8</b>
          ({{ item.productReview }})
        </div>
        <p class="total-sold">
          <b>1.000</b> Terjual
        </p>
        <div class="location-size" :title="item.productCity">
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-danger" fixed-width />
          {{ item.productCity }}
        </div>
        <span class="badge badge-pill badge-uvp fs-12px">Gratis Ongkir</span>
      </div>
      <div v-else-if="$device.isMobileOrTablet">
        <div class="row">
          <div class="col-6 pr-0">
            <font-awesome-icon :icon="['fas', 'check-circle']" class="text-info" fixed-width />
            {{ item.productSeller }}
            <p class="title-recommendation" :title="item.productTitle">{{ item.productTitle }}</p>
            <div class="rating-size">
              <font-awesome-icon :icon="['fas', 'star']" class="yellow-color" fixed-width />
              <b>4.8</b>
              ({{ item.productReview }})
            </div>
            <p class="total-sold">
              <b>1.000</b> Terjual
            </p>
            <div class="location-size" :title="item.productCity">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-danger" fixed-width />
              {{ item.productCity }}
            </div>
            <span class="badge badge-pill badge-uvp fs-12px">Gratis Ongkir</span>
          </div>
          <div class="col-4">
            <div class="ori-price-section">
              <span class="ori-price">Rp 10.000.000</span>
              <span class="badge badge-discount fs-12px">50%</span>
            </div>
            <p class="price">Rp {{ item.productPrice }}</p>
            <span class="badge badge-pill badge-recommendation fs-10px">Cashback 2%</span>
          </div>
          <div class="col-2 pl-0">
            <div class="chevron-position text-center">
              <font-awesome-icon :icon="['fas', 'chevron-right']" :style="{ color: '#42B549' }"  fixed-width />
            </div>
          </div>
        </div>

      </div>
    </div>
    <div v-if="$device.isDesktop" class="footer-content">
      <a href="#" class="btn btn-success btn-block font-weight-bold br-8px">Kunjungi Toko</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "tRecommendationGrid",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.card-grid {
  position: relative;
  border: 2px solid var(--green);
  border-radius: 8px;
  background-color: #ffffff;
}

.header-content {
  position: relative;
  padding: 16px 16px 0;
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
  bottom: 0;
  left: 0;
  background-color: var(--yellow);
  color: var(--black);
  padding: 2px 4px;
  font-size: 12px;
}

.img-recommendation {
  border-radius: 8px 8px 0 0;
}

.img-merchant {
  height: 32px;
}

.body-content {
  padding: 16px;
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

.title-recommendation {
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

.badge-recommendation {
  color: var(--green);
  background-color: #effaf3;
  margin-top: 4px;
  font-weight: 600;
}

.footer-content {
  padding: 0 16px 16px;
}

.chevron-position{
  margin-top: 150%;
}
</style>

<style scoped lang="scss">
@import "assets/styles/scss/breakpoints";
@import "assets/styles/scss/badge";
@include respond-bellow(960px){
  .float-xs-right{
    float: right;
  }

  .img-merchant {
    position: relative;
    top: -13px;
  }
}


</style>
