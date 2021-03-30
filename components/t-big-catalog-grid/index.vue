<template>
  <div class="card-grid">
    <div class="header-content">
      <div class="media">
        <img :src="item.catalogMerchant" class="img-merchant mr-8px" alt="Merchant Image" />
        <div class="media-body flex-mobile text-nowrap">
          <span v-for="uvp in uvps" :key="uvp.id" class="badge badge-pill badge-uvp fs-12px mx-4px">{{ uvp.value }}</span>
        </div>
      </div>
    </div>
    <div class="body-content">
      <div class="row">
        <div v-if="$device.isDesktop" class="col-2">
          <img
            :src="item.catalogImage"
            class="img-fluid img-recommendation mx-auto d-block"
            :alt="item.catalogTitle"
          />
        </div>
        <div class="col-5 col-md-5 col-lg-4 col-xl-4">
          <div class="seller-name" :title="item.catalogSeller">
            <font-awesome-icon :icon="['fas', 'check-circle']" class="text-info" fixed-width />
            {{ item.catalogSeller }}
          </div>
          <p class="title-recommendation" :title="item.catalogTitle">{{ item.catalogTitle }}</p>
          <div class="rating-size">
            <font-awesome-icon :icon="['fas', 'star']" class="yellow-color" fixed-width />
            <b>4.8</b>
            ({{ item.catalogReview }})
          </div>
          <p class="total-sold">
            <b>1.000</b> Terjual
          </p>
          <div class="location-size" :title="item.catalogCity">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="text-danger" fixed-width />
            {{ item.catalogCity }}
          </div>
        </div>
        <div class="col-5 col-md-5 col-lg-3 col-xl-3">
          <div class="ori-price-section">
            <span class="ori-price">Rp 10.000.000</span>
            <span class="badge badge-discount fs-12px">50%</span>
          </div>
          <p class="price">Rp {{ item.catalogPrice }}</p>
          <span class="badge badge-pill badge-cashback fs-12px">Cashback</span>
        </div>
        <div v-if="$device.isMobileOrTablet" class="col-2">
          <font-awesome-icon :icon="['fas', 'chevron-right']" :style="{ color: '#42B549' }"  fixed-width />
        </div>
        <div v-if="$device.isDesktop" class="col-3">
          <a href="#" class="btn btn-sm btn-success btn-block font-weight-bold br-8px">Kunjungi Toko</a>
          <a
            href="#"
            class="btn btn-sm btn-outline-success btn-block font-weight-bold br-8px"
            @click="openModal"
          >Lihat 30 Penawaran Lainnya</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "tBigcatalogGrid",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      uvps: [
        {
          id: 1,
          value: "Gratis Ongkir"
        },
        {
          id: 2,
          value: "7 Hari Pengembalian"
        },
        {
          id: 3,
          value: "100% Ori"
        },
      ]
    }
  },
  methods:{
    openModal: function (){
      this.$emit('openModal', this.item.catalogTitle)
    }
  }
};
</script>

<style scoped>
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
  padding: 16px;
  border-bottom: 1px solid var(--light-gray);
}

@media screen and (max-width: 600px) {
  .header-content {
    border-bottom: none;
  }
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

.img-recommendation {
  border-radius: 8px;
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
  margin-bottom: 4px;
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
  margin-bottom: 0;
  line-height: 18px;
  min-height: 36px;
  color: var(--black);
}

.ori-price-section {
  margin-bottom: 4px;
  color: #9c9c9c;
  font-size: 12px;
}

.ori-price {
  text-decoration: line-through;
}

.badge-discount {
  color: var(--red);
  background-color: var(--light-red);
}

.price {
  font-size: 14px;
  font-weight: 600;
  font-family: roboto, sans-serif;
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
  background-color: var(--light-blue);
  margin-top: 4px;
  font-weight: 500;
}

.badge-cashback {
  color: var(--green);
  background-color: var(--light-green);
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
</style>

<style scoped lang="scss">
@import "assets/styles/scss/_breakpoints";
@import "assets/styles/scss/_helper";

@include respond-to(960px){
  .media{
    display: block;
    align-items: unset;
  }

  .card-grid{
    box-shadow: none;
  }

}

</style>
