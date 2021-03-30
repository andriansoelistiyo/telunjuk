<template>
  <div>
    <!--
    <div v-if="$device.isDesktop" class="fs-12px device-state">Running on: Desktop version</div>
    <div v-if="$device.isTablet" class="fs-12px device-state">Running on: Tablet version</div>
    <div v-if="$device.isMobile" class="fs-12px device-state">Running on: Mobile version</div>
    -->
    <div class="container-fluid">
      <section id="telunjuk-slider-banner" class="t-section">
        <t-banner-mobile v-if="$device.isMobile" :items="banners" :page="'Home Page - Banner Section'"></t-banner-mobile>
        <t-banner v-else :items="banners" :page="'Home Page - Banner Section'"></t-banner>
      </section>

      <!-- <a href="#" @click="logout()">Logout</a> -->

      <!-- <section id="telunjuk-category" class="t-section mobile-background">
        <div class="clearfix d-none d-xs-none d-sm-block d-lg-block d-xl-block">
          <h2 class="title-section float-left">Kategori Pilihan</h2>
          <a href="https://telunjuk.com/harga" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-category-slider :items="categories" :page="'Home Page - Category Section'"></t-layout-category-slider>
      </section> -->
    </div>

    <section id="telunjuk-flashsale" class="t-section mobile-background">
      <div class="container">
        <div class="clearfix">
          <h2 class="title-section float-left">Flash Sale</h2>
          <a href="https://telunjuk.com/flashsale" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-flashsale-slider :items="flashsales" :page="'Home Page - Flash Sale Section'"></t-layout-flashsale-slider>
      </div>
    </section>

    <div class="container">
      <!-- Dummy Data
      <section id="telunjuk-user-history" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Kamu Pernah Beli Ini</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <t-layout-product-slider :items="products" :page="'Home Page - User History Section'"></t-layout-product-slider>
      </section>

      <section id="telunjuk-personalization" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Dari Kategori Favoritmu</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <t-layout-catalog-slider :items="catalog_personalizaton" :page="'Home Page - Catalog Personalization Section'"></t-layout-catalog-slider>
      </section>

      <section id="telunjuk-empathy" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Telunjuk Empathy</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <t-layout-catalog-slider-background :items="catalog_empathy" :page="'Home Page - Catalog Empathy Section'"></t-layout-catalog-slider-background>
      </section>

      <section id="telunjuk-campaign" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Telunjuk Campaign</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <t-layout-catalog-slider-background :items="catalog_campaign" :page="'Home Page - Catalog Campaign Section'"></t-layout-catalog-slider-background>
      </section>
      -->
      <section id="telunjuk-gadget-section" class="t-section mobile-background">
        <t-banner-catalog-section :items="banner_gadgets"></t-banner-catalog-section>
        <!-- There is no data
        <t-tabs :items="tabs_gadgets"></t-tabs>
        -->
        <div class="clearfix">
          <h2 class="title-section float-left">Bandingkan Harga Gadget Terbaik 2020</h2>
          <a href="https://telunjuk.com/harga/handphone-tablet" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-catalog-slider-background :items="catalog_gadgets" :page="'Home Page - Catalog Gadget Section'"></t-layout-catalog-slider-background>
        <!-- There is no data
        <div class="clearfix mt-16px">
          <h2 class="title-section float-left">Brand Gadget</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <div>
          <div class="row margin-grid flex-mobile has-no-background py-0">
            <div
              v-for="brand in brand_gadgets"
              :key="brand.id"
              class="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 padding-grid"
            >
              <t-brand-grid :item="brand"></t-brand-grid>
            </div>
          </div>
        </div>
        -->
        <div class="clearfix mt-16px">
          <h2 class="title-section float-left">Promo Pilihan Seputar Gadget</h2>
          <a href="https://www.telunjuk.com/promo/category/handphone-tablet-1" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-promo-slider :items="promo_gadgets" :page="'Home Page - Promo Gadget Section'"></t-layout-promo-slider>
      </section>

      <section id="telunjuk-fashion-section" class="t-section mobile-background">
        <t-banner-catalog-section :items="banner_fashions"></t-banner-catalog-section>
        <!-- There is no data
        <t-tabs :items="tabs_fashions"></t-tabs>
        -->
        <div class="clearfix">
          <h2 class="title-section float-left">Pilihan Susu untuk Nutrisi Terbaik si Kecil</h2>
          <a href="https://telunjuk.com/harga/fashion" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-catalog-slider-background :items="catalog_fashions" :page="'Home Page - Catalog Fashion Section'"></t-layout-catalog-slider-background>
        <!-- There is no data
        <div class="clearfix mt-16px">
          <h2 class="title-section float-left">Brand Fashion</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <div>
          <div class="row margin-grid flex-mobile has-no-background py-0">
            <div
              v-for="brand in brand_fashions"
              :key="brand.id"
              class="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 padding-grid"
            >
              <t-brand-grid :item="brand"></t-brand-grid>
            </div>
          </div>
        </div>
        -->
        <div class="clearfix mt-16px">
          <h2 class="title-section float-left">Promo Pilihan untuk Ibu dan Bayi</h2>
          <a href="https://www.telunjuk.com/promo/category/fashion-2" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-promo-slider :items="promo_fashions" :page="'Home Page - Promo Fashion Section'"></t-layout-promo-slider>
      </section>

      <section id="telunjuk-beauty-section" class="t-section mobile-background">
        <t-banner-catalog-section :items="banner_beauties"></t-banner-catalog-section>
        <!-- There is no data
        <t-tabs :items="tabs_beauties"></t-tabs>
        -->
        <div class="clearfix">
          <h2 class="title-section float-left">Perlindungan Lengkap untuk si Kecil</h2>
          <a href="https://telunjuk.com/harga/kesehatan-kecantikan" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-catalog-slider-background :items="catalog_beauties" :page="'Home Page - Catalog Beauty Section'"></t-layout-catalog-slider-background>
        <!-- There is no data
        <div class="clearfix mt-16px">
          <h2 class="title-section float-left">Brand Beauty</h2>
          <nuxt-link to="/" class="float-right font-weight-bold see-more">Lihat Semua</nuxt-link>
        </div>

        <div>
          <div class="row margin-grid flex-mobile has-no-background py-0">
            <div
              v-for="brand in brand_beauies"
              :key="brand.id"
              class="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 padding-grid"
            >
              <t-brand-grid :item="brand"></t-brand-grid>
            </div>
          </div>
        </div>
        -->
        <div class="clearfix mt-16px">
          <h2 class="title-section float-left">Promo Pilihan untuk Kenyamanan si Kecil</h2>
          <a href="https://www.telunjuk.com/promo/category/health-beauty-3" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-promo-slider :items="promo_beauties" :page="'Home Page - Promo Fashion Section'"></t-layout-promo-slider>
      </section>

      <section id="telunjuk-article" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Update Terbaru Seputar Belanja Online</h2>
          <a href="https://telunjuk.com/article" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-article-slider :items="articles" :page="'Home Page - Article Section'"></t-layout-article-slider>
      </section>

      <section id="telunjuk-video" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Sebelum Beli, Bandingkan dulu Rekomendasinya!</h2>
          <a href="https://www.youtube.com/channel/UCaHsBjWSfqTx_2p4zwPQNDg" target="_blank" rel="noopener" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-video-slider :items="videos" :page="'Home Page - Video Section'"></t-layout-video-slider>
      </section>

      <section id="telunjuk-partner" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Partner Kami</h2>
          <a href="https://telunjuk.com/partner" class="float-right font-weight-bold see-more">Lihat Semua</a>
        </div>

        <t-layout-merchant-slider :items="merchants" :page="'Home Page - Video Section'"></t-layout-merchant-slider>
      </section>

      <section id="telunjuk-seo-text" class="t-section mobile-background">
        <t-seo-text></t-seo-text>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import { ContentLoader } from 'vue-content-loader'
import lazyLoad from "@/mixins/lazy-load";

export default {
  components: {
    TBanner: () => import('~/components/t-banner'),
    TBannerMobile: () => import('~/components/t-banner-mobile'),
    // TLayoutCategorySlider: () => import('~/components/t-layout-category-slider'),
    TLayoutFlashsaleSlider: () => import('~/components/t-layout-flashsale-slider'),
    TLayoutProductSlider: () => import('~/components/t-layout-product-slider'),
    TBannerCatalogSection: () => import('~/components/t-banner-catalog-section'),
    TLayoutCatalogSlider: () => import('~/components/t-layout-catalog-slider'),
    TLayoutCatalogSliderBackground: () => import('~/components/t-layout-catalog-slider-background'),
    TLayoutPromoSlider: () => import('~/components/t-layout-promo-slider'),
    TLayoutArticleSlider: () => import('~/components/t-layout-article-slider'),
    TLayoutVideoSlider: () => import('~/components/t-layout-video-slider'),
    TLayoutMerchantSlider: () => import('~/components/t-layout-merchant-slider'),
    TSeoText: () => import('~/components/t-seo-text')
  },
  methods: {
    async logout() {
      await this.$auth.logout()
      this.$router.push('/')
    }
  },
  mixins: [lazyLoad],
  head() {
    return {
      title:
        "Telunjuk.com - Bandingkan harga dari beragam toko online di Indonesia",
      meta: [
        { name: 'keywords', content: 'toko online, daftar harga, belanja online murah, sahabat belanja, bandingkan harga, bandingkan harga produk' },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: "description", name: "description", content: "Temukan rekomendasi produk, promo dan diskon dari puluhan e-commerce di Indonesia dalam satu platform. Cari dan bandingkan harga terbaik di Telunjuk.com!" },
        { name: 'fb:app_id', property: 'fb:app_id', content: '197048700406598' },
        { name: 'og:image', property: 'og:image', content: 'https://asset.telunjuk.co.id/s/images/meta/default-v2.jpg' },
        { name: 'og:title', property: 'og:title', content: 'Telunjuk.com - Bandingkan harga dari beragam toko online di Indonesia' },
        { name: 'og:site_name', property: 'og:site_name', content: 'telunjuk.com - sahabat saat belanja' },
        { name: 'og:url', property: 'og:url', content: 'https://www.telunjuk.com' },
        { name: 'og:description', property: 'og:description', content: 'Temukan rekomendasi produk, promo dan diskon dari puluhan e-commerce di Indonesia dalam satu platform. Cari dan bandingkan harga terbaik di Telunjuk.com!' },
        { name: 'og:locale', property: 'og:locale', content: 'id_ID' },
        { name: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://asset.telunjuk.co.id/s/images/meta/default-v2.jpg' },
        { name: 'og:type', property: 'og:type', content: 'article' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Telunjuk.com - Bandingkan harga dari beragam toko online di Indonesia' },
        { name: 'twitter:site', content: '@Telunjukdotcom' },
        { name: 'twitter:url', content: 'https://www.telunjuk.com' },
        { name: 'twitter:description', content: 'Temukan rekomendasi produk, promo dan diskon dari puluhan e-commerce di Indonesia dalam satu platform. Cari dan bandingkan harga terbaik di Telunjuk.com!' },
        { name: 'twitter:image', content: 'https://asset.telunjuk.co.id/s/images/meta/default-v2.jpg' },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.telunjuk.com",
        },
      ],
    };
  },
  data() {
    return {
      products: [
        {
          id: "1",
          productImage:
            "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/7/1/631585710/631585710_7722f8b0-8027-418a-ba5a-c6374514dba3_1368_1368.jpg.webp",
          productMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
          productSellerType: "Tokopedia Official Store",
          productSeller: "El-risar25",
          productTitle:
            "MacBook Pro Retina 15 2013 Core i7 SSD 256GB Not i5 MJLQ2 MGXG2",
          productPrice: "11.950.000",
          productReview: "100",
          productCity: "Tangerang Selatan",
        },
        {
          id: "2",
          productImage:
            "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/8/17/15590624/15590624_f8f0b4c5-4e29-4e41-a75c-5c7aad286383_2048_2048.webp",
          productMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
          productSellerType: "Tokopedia Official Store",
          productSeller: "applewatchstuff",
          productTitle:
            "New MacBook Pro 2020 13 Inch 1.4 GHz Quad i5 RAM 8GB 256GB SSD MXK32 - Silver",
          productPrice: "19.299.000",
          productReview: "100",
          productCity: "Jakarta Utara",
        },
        {
          id: "3",
          productImage:
            "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2019/2/12/3835842/3835842_11a78f35-90da-480f-9695-8dece01063d4_700_393.jpg.webp",
          productMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          productSellerType: "BlibliMall",
          productSeller: "DBM",
          productTitle:
            "Shock Coilover Tein Endurapro Plus Honda HRV RU5 Bagian Depan",
          productPrice: "4.564.999",
          productReview: "100",
          productCity: "Bandung",
        },
        {
          id: "4",
          productImage:
            "https://ecs7-p.tokopedia.net/img/cache/200-square/VqbcmM/2020/6/21/36d72e99-7544-485b-9396-c3307415a0cf.jpg.webp",
          productMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/bukalapak.png",
          productSellerType: "BukaMall",
          productSeller: "BIngo Store 1",
          productTitle:
            "VANS OLDSKOOL CLASSIC ALL BLACK ORIGINAL - VANS OLDSKOOL",
          productPrice: "629.000",
          productReview: "100",
          productCity: "Tangerang",
        },
        {
          id: "5",
          productImage:
            "https://ecs7-p.tokopedia.net/img/cache/200-square/attachment/2019/8/26/156680629224844/156680629224844_21e57aea-278f-4bd5-99e4-0ed096e282c0.png.webp",
          productMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          productSellerType: "LazMall",
          productSeller: "BIngo Store 1",
          productTitle: "Vans Slip On All Black Original",
          productPrice: "549.000",
          productReview: "100",
          productCity: "Tangerang",
        },
        {
          id: "6",
          productImage:
            "https://ecs7-p.tokopedia.net/img/cache/200-square/product-1/2020/8/22/514708634/514708634_a0bde6df-d693-446c-be88-66d95f3c6ee7_1368_1368.jpg.webp",
          productMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
          productSellerType: "ShopeeMall",
          productSeller: "El-risar25",
          productTitle:
            "MacBook Pro Retina 2015 Core i5 8GB 256GB MF840 Bkn Mf841 117",
          productPrice: "12.950.000",
          productReview: "100",
          productCity: "Tangerang Selatan",
        },
      ],
      catalog_personalizaton: [
        {
          id: "1",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/xiaomi-redmi-note-9-pro_93192a1403ca433bd1127c0098f2cc19.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
          marketing_name_catalog: "Xiaomi Redmi Note 9 Pro",
          price_catalog: "3299000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "2",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/huawei-p40-pro-_1cbcd3c575fe1b42403143adb005c94d.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          marketing_name_catalog: "Huawei P40 Pro+",
          price_catalog: "12499000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "3",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/vans-slip-on_db2be45454ce01812b14c2c0118aef35.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Vans Slip On",
          price_catalog: "499000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "4",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/samsung-led-tv-49-inch-ua49m5100_fb15a1954a4506650e4313ddb56b2e70.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Samsung Led Tv 49 Inch",
          price_catalog: "5225000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/bukalapak.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "5",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/huawei-honor-band-3_880f67667f922eaccddbc47f3f74e9f0.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          marketing_name_catalog: "Huawei Honor Band 3",
          price_catalog: "150000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "6",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/microsoft-surface-pro-5_f2d2948ba5f0e29749eab768ef74357f.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Microsoft Surface Pro 5",
          price_catalog: "14248800",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
      ],
      catalog_empathy: [
        {
          id: "1",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/sensi-mask-duckbill_b12f6ff963bd7663ce78162f60d60017.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
          marketing_name_catalog: "Sensi Mask Duckbill",
          price_catalog: "198000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "2",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/3m-masker-8210-n95_e37377424570fae69c66a23effef355b.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          marketing_name_catalog: "3m Masker 8210 N95",
          price_catalog: "175000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "3",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/rohto-fever-patch_f400438e2fc5bf119cd2932ecc7e516c.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Rohto Fever Patch",
          price_catalog: "13500",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "4",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/woods-dry-cough-syrup-100ml_1acd3c338af4ccf527c3dbce15470cd4.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Woods Dry Cough Syrup 100ml",
          price_catalog: "41500",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/bukalapak.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "5",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/3m-3m-nexcare-earloop-daily-kids-masker-3pcs_139476e9faae6da1e074bccdd52fc674.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          marketing_name_catalog: "3m 3m Nexcare Earloop Daily Kids Masker 3pcs",
          price_catalog: "55600",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "6",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/dettol-hand-sanitizer-50ml_7621e92293f72aa688369ae89d2e360f.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Dettol Hand Sanitizer 50ml",
          price_catalog: "38000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
      ],
      catalog_campaign: [
        {
          id: "1",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/xiaomi-redmi-note-9-pro_93192a1403ca433bd1127c0098f2cc19.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
          marketing_name_catalog: "Xiaomi Redmi Note 9 Pro",
          price_catalog: "3299000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "2",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/huawei-p40-pro-_1cbcd3c575fe1b42403143adb005c94d.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          marketing_name_catalog: "Huawei P40 Pro+",
          price_catalog: "12499000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "3",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/vans-slip-on_db2be45454ce01812b14c2c0118aef35.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Vans Slip On",
          price_catalog: "499000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "4",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/samsung-led-tv-49-inch-ua49m5100_fb15a1954a4506650e4313ddb56b2e70.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Samsung Led Tv 49 Inch",
          price_catalog: "5225000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/bukalapak.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "5",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/huawei-honor-band-3_880f67667f922eaccddbc47f3f74e9f0.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/blibli.png",
          marketing_name_catalog: "Huawei Honor Band 3",
          price_catalog: "150000",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
        {
          id: "6",
          image_catalog:
            "https://asset.telunjuk.co.id/s/cat/162/180/zc/microsoft-surface-pro-5_f2d2948ba5f0e29749eab768ef74357f.png",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          marketing_name_catalog: "Microsoft Surface Pro 5",
          price_catalog: "14248800",
          merchants_catalog: "3",
          recommendation_catalog: {
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
            price: "150000",
            rating: "5",
            review: "100",
            total_sold: "100",
          }
        },
      ],
      banner_gadgets: [
        {
          id: "1",
          image_m: require('~/assets/images/catalog-gadget.jpg'),
          image_d: "https://s.alicdn.com/@img/tfs/TB1J.lqRQT2gK0jSZFkXXcIQFXa-1920-220.jpg",
        },
      ],
      banner_fashions: [
        {
          id: "1",
          image_m:  require('~/assets/images/catalog-fashion.jpg'),
          image_d: "https://s.alicdn.com/@img/tfs/TB13judeOpE_u4jSZKbXXbCUVXa-1920-220.jpg",
        },
      ],
      banner_beauties: [
        {
          id: "1",
          image_m:  require('~/assets/images/catalog-beauty.jpg'),
          image_d: "https://s.alicdn.com/@img/tfs/TB1VMPcfwgP7K4jSZFqXXamhVXa-1920-220.jpg",
        },
      ],
      tabs_gadgets: [
        {
          id: "1",
          tabName: "Smartphone",
          tabClass: "nav-link active",
        },
        {
          id: "2",
          tabName: "Tablet",
          tabClass: "nav-link",
        },
        {
          id: "3",
          tabName: "PC",
          tabClass: "nav-link",
        },
      ],
      tabs_fashions: [
        {
          id: "1",
          tabName: "Atasan",
          tabClass: "nav-link active",
        },
        {
          id: "2",
          tabName: "Bawahan",
          tabClass: "nav-link",
        },
        {
          id: "3",
          tabName: "Outer",
          tabClass: "nav-link",
        },
      ],
      tabs_beauties: [
        {
          id: "1",
          tabName: "Lipstick",
          tabClass: "nav-link active",
        },
        {
          id: "2",
          tabName: "Foundation",
          tabClass: "nav-link",
        },
        {
          id: "3",
          tabName: "Blush On",
          tabClass: "nav-link",
        },
      ],
      brand_gadgets: [
        {
          id: "1",
          brandImage:
            "https://1000logos.net/wp-content/uploads/2017/06/emblem-Samsung.jpg",
          brandTitle: "Samsung",
        },
        {
          id: "2",
          brandImage:
            "https://1000logos.net/wp-content/uploads/2017/06/emblem-Samsung.jpg",
          brandTitle: "Samsung",
        },
        {
          id: "3",
          brandImage:
            "https://1000logos.net/wp-content/uploads/2017/06/emblem-Samsung.jpg",
          brandTitle: "Samsung",
        },
        {
          id: "4",
          brandImage:
            "https://1000logos.net/wp-content/uploads/2017/06/emblem-Samsung.jpg",
          brandTitle: "Samsung",
        },
        {
          id: "5",
          brandImage:
            "https://1000logos.net/wp-content/uploads/2017/06/emblem-Samsung.jpg",
          brandTitle: "Samsung",
        },
        {
          id: "6",
          brandImage:
            "https://1000logos.net/wp-content/uploads/2017/06/emblem-Samsung.jpg",
          brandTitle: "Samsung",
        },
      ],
      brand_fashions: [
        {
          id: "1",
          brandImage:
            "https://i.pinimg.com/originals/33/b0/cc/33b0ccc2706f56fb337bd2bc51b3217c.jpg",
          brandTitle: "Vans",
        },
        {
          id: "2",
          brandImage:
            "https://i.pinimg.com/originals/33/b0/cc/33b0ccc2706f56fb337bd2bc51b3217c.jpg",
          brandTitle: "Vans",
        },
        {
          id: "3",
          brandImage:
            "https://i.pinimg.com/originals/33/b0/cc/33b0ccc2706f56fb337bd2bc51b3217c.jpg",
          brandTitle: "Vans",
        },
        {
          id: "4",
          brandImage:
            "https://i.pinimg.com/originals/33/b0/cc/33b0ccc2706f56fb337bd2bc51b3217c.jpg",
          brandTitle: "Vans",
        },
        {
          id: "5",
          brandImage:
            "https://i.pinimg.com/originals/33/b0/cc/33b0ccc2706f56fb337bd2bc51b3217c.jpg",
          brandTitle: "Vans",
        },
        {
          id: "6",
          brandImage:
            "https://i.pinimg.com/originals/33/b0/cc/33b0ccc2706f56fb337bd2bc51b3217c.jpg",
          brandTitle: "Vans",
        },
      ],
      brand_beauies: [
        {
          id: "1",
          brandImage:
            "https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png",
          brandTitle: "Loreal Paris",
        },
        {
          id: "2",
          brandImage:
            "https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png",
          brandTitle: "Loreal Paris",
        },
        {
          id: "3",
          brandImage:
            "https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png",
          brandTitle: "Loreal Paris",
        },
        {
          id: "4",
          brandImage:
            "https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png",
          brandTitle: "Loreal Paris",
        },
        {
          id: "5",
          brandImage:
            "https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png",
          brandTitle: "Loreal Paris",
        },
        {
          id: "6",
          brandImage:
            "https://vectorlogoseek.com/wp-content/uploads/2018/12/loreoal-paris-vector-logo.png",
          brandTitle: "Loreal Paris",
        },
      ]
    };
  },
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
  async fetch() {
    await this.$store.dispatch("banners/get");
    // await this.$store.dispatch("categories/get");
    await this.$store.dispatch("flashsales/get");
    await this.$store.dispatch("promo_gadgets/get");
    await this.$store.dispatch("promo_fashions/get");
    await this.$store.dispatch("promo_beauties/get");
    await this.$store.dispatch("catalog_gadgets/get");
    await this.$store.dispatch("catalog_fashions/get");
    await this.$store.dispatch("catalog_beauties/get");
    await this.$store.dispatch("articles/get");
    await this.$store.dispatch("videos/get");
    await this.$store.dispatch("merchants/get");
  },
  computed: {
    ...mapState({
      banners: state => state.banners.list,
      flashsales: (state) => state.flashsales.list,
      // categories: (state) => state.categories.list,
      promo_gadgets: (state) => state.promo_gadgets.list,
      promo_fashions: (state) => state.promo_fashions.list,
      promo_beauties: (state) => state.promo_beauties.list,
      catalog_gadgets: (state) => state.catalog_gadgets.list,
      catalog_fashions: (state) => state.catalog_fashions.list,
      catalog_beauties: (state) => state.catalog_beauties.list,
      articles: (state) => state.articles.list,
      videos: (state) => state.videos.list,
      merchants: (state) => state.merchants.list,
      mlebu: state => state.loggedIn,
      user: state => state.user
    }),
  },
  jsonld() {
    return {
      // "@context": "http://schema.org",
      // "@type": "Corporation",
      // "address": {
      //   "@type": "PostalAddress",
      //   "addressCountry": "Indonesia",
      //   "addressLocality": "Jakarta Selatan",
      //   "addressRegion": "Jakarta",
      //   "streetAddress": "Jl. Abdul Majid Raya No.Kav. 28, RT.5/RW.3, Cipete Utara",
      //   "postalCode": "12150"
      // },
      // "name": "Telunjuk.com",
      // "alternateName": "Telunjuk",
      // "email": "contact(at)telunjuk.com",
      // "telephone": "+6221-2751-3296",
      // "logo": "https://asset.telunjuk.co.id/s/images/logomerah.png",
      // "url": "https://www.telunjuk.com",
      // "founder": {
      //   "@type": "Person",
      //   "name": "Redya Febriyanto"
      // },
      // "sameAs": [
      //   "https://www.facebook.com/telunjukdotcom/",
      //   "https://twitter.com/Telunjukdotcom",
      //   "https://instagram.com/telunjukcom",
      //   "https://www.youtube.com/channel/UCaHsBjWSfqTx_2p4zwPQNDg",
      //   "https://medium.com/telunjukengineering"
      // ]
      "@context": "https://schema.org",
      "@type": "Person"
    };
  }
}
</script>

<style scoped>
@media screen and (min-width: 720px) {
  #telunjuk-flashsale.t-section {
    background-color: var(--red);
    padding: 32px 0;
  }

  #telunjuk-flashsale > .container > .clearfix > .title-section,
  #telunjuk-flashsale > .container > .clearfix > .see-more {
    color: #ffffff;
  }
}

a:hover {
  text-decoration: none;
}
</style>
