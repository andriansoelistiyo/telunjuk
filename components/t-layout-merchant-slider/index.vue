<template>
  <div>
    <client-only>
      <content-loader v-if="$device.isMobile" :height="100" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="40%" y="0" rx="4" ry="4" width="36%" height="100%" />
        <rect x="80%" y="0" rx="4" ry="4" width="36%" height="100%" />
      </content-loader>
      <content-loader v-else :height="50" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="0" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="16.667%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="33.333%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="50.001%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="66.668%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="83.335%" y="0" rx="4" ry="4" width="15%" height="100%" />
      </content-loader>
      <div class="row margin-grid flex-mobile has-no-background py-0">
        <div
          v-for="item in items"
          :key="item.id"
          class="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 padding-grid"
        >
          <t-merchant-grid :merchant="item" :page="page"></t-merchant-grid>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  name: "tLayoutMerchantSlider",
  props: {
    items: {
      type: Array,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
  components: {
    ContentLoader,
    TMerchantGrid: () => import("~/components/t-merchant-grid"),
  },
};
</script>

<style scoped>
@media screen and (max-width: 540px) {
  .flex-mobile {
    flex-wrap: nowrap;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }

  .flex-mobile > .col-sm-6,
  .flex-mobile > .col-6 {
    flex: none !important;
    display: block !important;
    max-width: 40% !important;
  }

  .has-no-background > .col-sm-6:first-child,
  .has-no-background > .col-6:first-child {
    margin-left: 11px !important;
  }

  .flex-mobile > .padding-grid {
    padding: 4px !important;
  }

  .mobile-background > div > .margin-grid {
    margin-left: -15px;
    margin-right: -15px;
    padding: 16px 0;
  }
}

.padding-grid {
  padding: 8px;
}

.margin-grid {
  margin-left: -8px;
  margin-right: -8px;
}
</style>
