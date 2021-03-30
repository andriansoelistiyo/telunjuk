<template>
  <div>
    <client-only>
      <content-loader v-if="$device.isMobile" :height="300" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="0" y="0" rx="4" ry="4" width="75%" height="100%" />
        <rect x="80%" y="0" rx="4" ry="4" width="75%" height="100%" />
      </content-loader>
      <content-loader v-else :height="120" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="0" y="0" rx="4" ry="4" width="30%" height="100%" />
        <rect x="33.333%" y="0" rx="4" ry="4" width="30%" height="100%" />
        <rect x="66.666%" y="0" rx="4" ry="4" width="30%" height="100%" />
      </content-loader>
      <div class="row margin-grid flex-mobile has-no-background py-0">
        <div
          v-for="item in items"
          :key="item.id"
          class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 padding-grid"
        >
          <t-article-grid :article="item" :page="page"></t-article-grid>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  name: "tLayoutArticleSlider",
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
    TArticleGrid: () => import("~/components/t-article-grid"),
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

  .flex-mobile > .col-12 {
    flex: none !important;
    display: block !important;
    max-width: 84% !important;
  }

  .has-no-background > .col-12:first-child {
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
