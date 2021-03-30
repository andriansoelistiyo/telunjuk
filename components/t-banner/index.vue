<template>
  <div class="min-height-banner">
    <client-only>
      <content-loader
        :height="90"
        :speed="2"
        primaryColor="#f3f3f3"
        secondaryColor="#ecebeb"
        slot="placeholder"
      >
        <rect x="0" y="0" rx="4" ry="4" width="100%" height="100%" />
      </content-loader>
      <vue-slick-carousel v-bind="settings">
        <div v-for="item in items" :key="item.id">
          <a :href="item.bannerRedirect" target="_blank" rel="nofollow">
            <!-- <img v-lazy="item.bannerImageDesktop" class="img-fluid img-banner" :alt="item.bannerAlt"> -->
            <img class="img-fluid img-banner" :src="item.bannerImageDesktop" :alt="item.bannerAlt" />
          </a>
        </div>
        <!--
        <template #prevArrow="arrowOption">
            <img class='a-left control-c prev slick-prev' src='https://asset.telunjuk.co.id/s/images/hotdeal/image/badge/arrow-left.png' alt='left-arrow'>
        </template>
        <template #nextArrow="arrowOption">
            <img class='a-right control-c next slick-next' src='https://asset.telunjuk.co.id/s/images/hotdeal/image/badge/arrow-right.png' alt='right-arrow'>
        </template>
        -->
      </vue-slick-carousel>
    </client-only>
  </div>
</template>

<script>
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { ContentLoader } from "vue-content-loader";

export default {
  name: "tBanner",
  components: {
    VueSlickCarousel: () => import("vue-slick-carousel"),
    ContentLoader,
  },
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
  data() {
    return {
      settings: {
        dots: true,
        infinite: true,
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 1,
        lazyLoad: "ondemand",
        autoplay: true,
        autoplaySpeed: 8000,
        adaptiveHeight: true,
        arrows: true,
        useCSS: true,
      },
    };
  },
  methods: {
    eventTracker(data, page) {
      const value = `${data.bannerAlt} - ${data.bannerRedirect}`;

      this.$ga.event(page, "Click Banner", value);
    },
  },
};
</script>

<style scoped>
.img-banner {
  border-radius: 8px;
}

.min-height-banner {
  min-height: 220px !important;
}
</style>
