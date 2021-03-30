<template>
  <div>
    <client-only>
      <content-loader v-if="$device.isMobile" :height="100" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="0" y="0" rx="4" ry="4" width="22%" height="100%" />
        <rect x="25%" y="0" rx="4" ry="4" width="22%" height="100%" />
        <rect x="50%" y="0" rx="4" ry="4" width="22%" height="100%" />
        <rect x="75%" y="0" rx="4" ry="4" width="22%" height="100%" />
      </content-loader>
      <content-loader v-else :height="50" :speed="2" primaryColor="#f3f3f3" secondaryColor="#ecebeb" slot="placeholder">
        <rect x="0" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="10%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="20%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="30%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="40%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="50%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="60%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="70%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="80%" y="0" rx="4" ry="4" width="9%" height="100%" />
        <rect x="90%" y="0" rx="4" ry="4" width="9%" height="100%" />
      </content-loader>
      <div class="row margin-grid flex-mobile has-no-background py-0">
        <div
          v-for="item in items"
          :key="item.id"
          class="col-3 col-sm-3 col-md-2 col-lg col-xl padding-grid"
        >
          <t-category-grid :category="item" :page="page"></t-category-grid>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { ContentLoader } from "vue-content-loader";

export default {
  name: "tLayoutCategorySlider",
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
    TCategoryGrid: () => import('~/components/t-category-grid'),
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

  .flex-mobile > .col-sm-3,
  .flex-mobile > .col-3 {
    flex: none !important;
    display: block !important;
    max-width: 22% !important;
  }

  .has-no-background > .col-sm-3:first-child,
  .has-no-background > .col-3:first-child {
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
