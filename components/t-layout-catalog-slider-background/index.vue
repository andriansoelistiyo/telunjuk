<template>
  <div>
    <client-only>
      <content-loader v-if="$device.isMobile" :height="300" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="40%" y="0" rx="4" ry="4" width="36%" height="100%" />
        <rect x="80%" y="0" rx="4" ry="4" width="36%" height="100%" />
      </content-loader>
      <content-loader v-else :height="120" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="0" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="16.667%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="33.333%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="50.001%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="66.668%" y="0" rx="4" ry="4" width="15%" height="100%" />
        <rect x="83.335%" y="0" rx="4" ry="4" width="15%" height="100%" />
      </content-loader>
      <div class="row margin-grid flex-mobile has-background">
        <div
          v-for="item in items"
          :key="item.id"
          class="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 padding-grid"
        >
          <t-catalog-grid :catalog="item" :page="page"></t-catalog-grid>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  name: "tLayoutCatalogSliderBackground",
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
    TCatalogGrid: () => import("~/components/t-catalog-grid"),
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

  .has-background > .col-sm-6:first-child,
  .has-background > .col-6:first-child {
    margin-left: 43% !important;
  }

  .flex-mobile > .padding-grid {
    padding: 4px !important;
  }

  #telunjuk-gadget-section > div > .has-background {
    background-color: #fe6523;
    background-image: url(https://img.freepik.com/free-psd/electronics-square-banner-instagram-post-template-premium-psd_120329-137.jpg?size=338&ext=jpg);
    background-position: center left 6%;
    background-size: 142px;
    background-repeat: no-repeat;
  }

  #telunjuk-fashion-section > div > .has-background {
    background-color: #d8eced;
    background-image: url(https://giladiskon-uploads.s3-ap-southeast-1.amazonaws.com/images/deals/photo%20-%201517281712.jpg);
    background-position: center left 6%;
    background-size: 142px;
    background-repeat: no-repeat;
  }

  #telunjuk-beauty-section > div > .has-background {
    background-color: #f4b3af;
    background-image: url(https://uploads.beautymnl.com/spree/mobile_carousel_images/182941/default/Mobile.jpg?1560995710);
    background-position: center left 6%;
    background-size: 142px;
    background-repeat: no-repeat;
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
