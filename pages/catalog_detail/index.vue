<template>
  <div>
    <!--
    <div v-if="$device.isDesktop" class="fs-12px device-state">Running on: Desktop version</div>
    <div v-if="$device.isTablet" class="fs-12px device-state">Running on: Tablet version</div>
    <div v-if="$device.isMobile" class="fs-12px device-state">Running on: Mobile version</div>
    -->
    <div class="container">
      <section id="telunjuk-breadcrumb" class="t-section mobile-background d-none d-sm-block">
        <t-breadcrumb></t-breadcrumb>
      </section>

      <section id="telunjuk-recommendation" class="t-section mobile-background">
        <div class="row">
          <div class="col-4 col-xs-3 col-sm-6 col-lg-3 col-xl-3">
            <img
              class="img-fluid mx-auto d-block"
              src="https://images.weserv.nl/?url=https%3A%2F%2Fd1-pub.bizrate.com%2Fimage%2Fobj%2F11251446032%3Bsq%3D400"
              alt="Apple iPhone 11 Pro, 64GB, Midnight Green"
            />
          </div>
          <div class="col-8 col-xs-9 col-sm-6 col-lg-6 col-xl-6">
            <h1 class="title-catalog">Harga Apple iPhone 11 Pro Max Terbaru di Indonesia dan Spesifikasi</h1>
            <t-description></t-description>
            <div v-if="$device.isDesktop" class="col-12 flex-mobile text-nowrap">
              <span v-for="(item, index) in productBadges" :key="index" class="badge badge-pill badge-recommendation fs-12px">{{item.badge}}</span>
            </div>
          </div>
          <div
            v-if="$device.isDesktop"
            v-for="product in products"
            :key="product.id"
            class="col-12 col-xs-12 col-sm-12 col-lg-3 col-xl-3 mt-40px"
          >
            <t-recommendation-grid  :item="product"></t-recommendation-grid>
          </div>
          <div v-if="$device.isMobileOrTablet" class="col-12 flex-mobile text-nowrap">
            <span v-for="(item, index) in productBadges" :key="index" class="badge badge-pill badge-recommendation fs-12px">{{item.badge}}</span>
          </div>
        </div>
      </section>
      <b-tabs nav-class="bottom-line my-16px fs-14px flex-mobile position-sticky" id="telunjuk-tabs" active-nav-item-class="active" >
        <b-tab  title="Bandingkan Harga" :title-link-class="linkClass(0)" title-link-class="nav-link" lazy>
          <section id="telunjuk-price-compare" class="t-section mobile-background">
            <div class="clearfix">
              <div
                v-if="$device.isMobileOrTablet"
                v-for="product in products"
                :key="product.id"
                class="col-12 px-0 mb-16px"
              >
                <t-recommendation-grid  :item="product"></t-recommendation-grid>
              </div>
              <h2 v-if="$device.isDesktop" class="title-section float-left">Bandingkan Harga</h2>
            </div>
            <div>
              <div class="row spacing-item">
                <div v-for="catalog in catalogs" :key="catalog.id" class="col-12">
                  <t-big-catalog-grid :item="catalog" @openModal="openModal"></t-big-catalog-grid>
                </div>
                <button v-if="$device.isMobileOrTablet" class="btn btn-sm btn-outline-success btn-block font-weight-bold br-8px mx-4 mb-4" @click="openModal" type="button"> Lihat 30 Penawaran Lainnya</button>
              </div>
            </div>
          </section>
        </b-tab>
        <b-tab title="Riwayat Harga" :title-link-class="linkClass(1)" title-link-class="nav-link" lazy>
          example content
        </b-tab>
        <b-tab title="Spesifikasi" :title-link-class="linkClass(2)" title-link-class="nav-link" lazy>
          <b-table striped hover :items="spec" :fields="specFields" responsive="sm">
            <template v-slot:table-colgroup="scope">
              <col
                v-for="field in scope.fields"
                :key="field.key"
                :style="{ width: field.key === 'spec' ? '50%' : '' }"
              >
            </template>
            <template v-slot:cell(spec)="data" >
              <div class="row">
                <div class="col-6">
                  {{ data.value.mark }}
                </div>
                <div class="col-6">
                  {{ data.value.value }}
                </div>
              </div>
            </template>
          </b-table>
        </b-tab>
        <b-tab title="Video & Artikel" :title-link-class="linkClass(3)" title-link-class="nav-link" lazy>
          example content
        </b-tab>
      </b-tabs>



      <section id="telunjuk-similar-catalog" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Katalog Serupa</h2>
          <!--
          <a href="#" class="float-right font-weight-bold see-more">Lihat Semua</a>
          -->
        </div>

        <t-layout-catalog-slider :items="similar_catalogs" :page="'Home Page - Similar Catalog Section'"></t-layout-catalog-slider>
      </section>

      <section id="telunjuk-similar-product" class="t-section mobile-background">
        <div class="clearfix">
          <h2 class="title-section float-left">Produk Serupa</h2>
          <!--
          <a href="#" class="float-right font-weight-bold see-more">Lihat Semua</a>
          -->
        </div>

        <t-layout-product-slider :items="similar_products" :page="'Home Page - Similar Product Section'"></t-layout-product-slider>
      </section>

      <section id="telunjuk-seo-text" class="t-section mobile-background">
        <t-seo-text></t-seo-text>
      </section>

      <section>
        <b-modal :visible="isModalShow" id="telunjuk-modal" hide-footer>
          <template v-slot:modal-title>
           <h4>{{modal.title}}</h4>
          </template>
          <div class="d-block">
            <div v-for="catalog in catalogs" :key="catalog.id" class="col-12">
              <t-catalog-detail-more-merchant :item="catalog"></t-catalog-detail-more-merchant>
            </div>
          </div>
        </b-modal>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ContentLoader: () => import("vue-content-loader").ContentLoader,
    TBreadcrumb: () => import("~/components/t-breadcrumb"),
    TDescription: () => import("~/components/t-description"),
    TRecommendationGrid: () => import("~/components/t-recommendation-grid"),
    TTabs: () => import("~/components/t-tabs"),
    TBigCatalogGrid: () => import("~/components/t-big-catalog-grid"),
    TLayoutCatalogSlider: () => import('~/components/t-layout-catalog-slider'),
    TLayoutProductSlider: () => import('~/components/t-layout-product-slider'),
    TSeoText: () => import("~/components/t-seo-text"),
    btnComponent: () => import('~/components/t-button'),
    tCatalogDetailMoreMerchant: ()=> import('~/components/t-catalog-detail-more-merchant')
  },
  head() {
    return {
      title: "Harga Apple iPhone 11 Pro Max Terbaru September, 2020 dan Spesifikasi",
      meta: [
        {
          name: "keywords",
          content:
            "toko online, daftar harga, belanja online murah, sahabat belanja, bandingkan harga, bandingkan harga produk",
        },
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content:
            "Temukan rekomendasi produk, promo dan diskon dari puluhan e-commerce di Indonesia dalam satu platform. Cari dan bandingkan harga terbaik di Telunjuk.com!",
        },
        {
          name: "fb:app_id",
          property: "fb:app_id",
          content: "197048700406598",
        },
        {
          name: "og:image",
          property: "og:image",
          content: "https://asset.telunjuk.co.id/s/images/meta/default-v2.jpg",
        },
        {
          name: "og:title",
          property: "og:title",
          content:
            "Telunjuk.com - Bandingkan harga dari beragam toko online di Indonesia",
        },
        {
          name: "og:site_name",
          property: "og:site_name",
          content: "telunjuk.com - sahabat saat belanja",
        },
        {
          name: "og:url",
          property: "og:url",
          content: "https://www.telunjuk.com",
        },
        {
          name: "og:description",
          property: "og:description",
          content:
            "Temukan rekomendasi produk, promo dan diskon dari puluhan e-commerce di Indonesia dalam satu platform. Cari dan bandingkan harga terbaik di Telunjuk.com!",
        },
        { name: "og:locale", property: "og:locale", content: "id_ID" },
        {
          name: "og:image:secure_url",
          property: "og:image:secure_url",
          content: "https://asset.telunjuk.co.id/s/images/meta/default-v2.jpg",
        },
        { name: "og:type", property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content:
            "Telunjuk.com - Bandingkan harga dari beragam toko online di Indonesia",
        },
        { name: "twitter:site", content: "@Telunjukdotcom" },
        { name: "twitter:url", content: "https://www.telunjuk.com" },
        {
          name: "twitter:description",
          content:
            "Temukan rekomendasi produk, promo dan diskon dari puluhan e-commerce di Indonesia dalam satu platform. Cari dan bandingkan harga terbaik di Telunjuk.com!",
        },
        {
          name: "twitter:image",
          content: "https://asset.telunjuk.co.id/s/images/meta/default-v2.jpg",
        },
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
      productBadges: [
        {
          badge: "Live Chat Customer Service"
        },
        {
          badge: "Variasi Metode Pembayaran"
        },
        {
          badge:"Returnable"
        },
        {
          badge:"Refundable"
        }
      ],
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
            "Apple iPhone 11 Pro Max [64GB, Midnight Green]",
          productPrice: "11.950.000",
          productReview: "100",
          productCity: "Tangerang Selatan"
        },
      ],
      similar_catalogs: [
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
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
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
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
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
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
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
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
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
            logo: "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
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
      similar_products: [
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
      catalogs: [
        {
          id: "1",
          catalogImage:
            "https://images.weserv.nl/?url=https%3A%2F%2Fd1-pub.bizrate.com%2Fimage%2Fobj%2F11251446032%3Bsq%3D400",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/tokopedia.png",
          catalogSellerType: "Tokopedia Official Store",
          catalogSeller: "El-risar25",
          catalogTitle: "Apple iPhone 11 Pro Max [64GB, Midnight Green]",
          catalogPrice: "11.950.000",
          catalogReview: "100",
          catalogCity: "Tangerang Selatan",
        },
        {
          id: "2",
          catalogImage:
            "https://images.weserv.nl/?url=https%3A%2F%2Fd1-pub.bizrate.com%2Fimage%2Fobj%2F11251446032%3Bsq%3D400",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/shopee.png",
          catalogSellerType: "ShopeeMall",
          catalogSeller: "El-risar25",
          catalogTitle: "Apple iPhone 11 Pro Max [64GB, Midnight Green]",
          catalogPrice: "11.950.000",
          catalogReview: "100",
          catalogCity: "Tangerang Selatan",
        },
        {
          id: "3",
          catalogImage:
            "https://images.weserv.nl/?url=https%3A%2F%2Fd1-pub.bizrate.com%2Fimage%2Fobj%2F11251446032%3Bsq%3D400",
          catalogMerchant:
            "https://asset.telunjuk.co.id/store/logo/200/50/lazada.png",
          catalogSellerType: "LazMall",
          catalogSeller: "El-risar25",
          catalogTitle: "Apple iPhone 11 Pro Max [64GB, Midnight Green]",
          catalogPrice: "11.950.000",
          catalogReview: "100",
          catalogCity: "Tangerang Selatan",
        },
      ],
      tabs: [
        {
          id: "1",
          tabName: "Bandingkan Harga",
          tabClass: "nav-link active",
          tabId: "bandingkan",
          tabContent: "example 1"
        },
        {
          id: "2",
          tabName: "Riwayat Harga",
          tabClass: "nav-link",
          tabId: "riwayat",
          tabContent: "example 2"
        },
        {
          id: "3",
          tabName: "Spesifikasi",
          tabClass: "nav-link",
          tabId: "spesifikasi",
          tabContent: "example 3"
        },
        {
          id: "4",
          tabName: "Video & Artikel",
          tabClass: "nav-link",
          tabId: "video",
          tabContent: "example 4"
        },
      ],
      specFields: [
        {key: 'spec', label: 'Spesifikasi'},
        {key: 'kapasitas', label: 'Kapasitas Penyimpanan'},
        {key: 'warna', label: 'Warna'}
        ],
      spec: [
        { isActive: false, spec: {mark: 'OS', value: 'IOS' }, kapasitas: '64 GB', warna: 'Hijau' },
        { isActive: false, spec: {mark: 'RAM', value: '4 Gb' }, kapasitas: null, warna: 'Putih' },
        { isActive: false, spec: {mark: 'Kamera', value: '41 MP' }, kapasitas: null, warna: 'Hitam' },
        { isActive: false, spec: {mark: 'Storage', value: '64 Gb' }, kapasitas: null, warna: null },
        { isActive: false, spec: {mark: 'OS', value: 'IOS' }, kapasitas: null, warna: null }
      ],
      isModalShow: false,
      modal:{
        title:"Apple iPhone 11 Pro Max [64GB, Midnight Green]"
      },
      tabIndex: 0
    };
  },
  methods:{
    openModal: function(val){
      this.modal.title =  "Apple iPhone 11 Pro Max [64GB, Midnight Green]";
      this.isModalShow = true
      this.$bvModal.show('telunjuk-modal')
    },
    linkClass(idx) {
      if (this.tabIndex === idx) {
        return ['bg-primary', 'text-light']
      } else {
        return ['bg-light', 'text-info']
      }
    }
  },
  layout: (ctx) => (ctx.isMobile ? "mobile" : "default"),
};
</script>

<style scoped>
@media screen and (max-width: 540px) {
  .title-catalog {
    margin-bottom: 8px !important;
    font-size: 16px !important;
    line-height: 24px !important;
    color: var(--black);
  }
}

@media screen and (min-width: 720px) {
  .title-catalog {
    margin-bottom: 8px !important;
    font-size: 24px !important;
    line-height: 36px !important;
    color: var(--black);
  }

}

.spacing-item > .col-12 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.spacing-item > .col-12:first-child {
  padding-top: 8px;
  padding-bottom: 8px;
}
.spacing-item > .col-12:last-child {
  padding-top: 8px;
  padding-bottom: 8px;
}

.padding-grid {
  padding: 8px;
}

.margin-grid {
  margin-left: -8px;
  margin-right: -8px;
}
</style>

<style lang="scss" scoped>
@import "assets/styles/scss/_badge.scss";
@import "assets/styles/scss/_breakpoints";
@import "assets/styles/scss/_helper";

@include respond-bellow(960px){
  .spacing-item{
    box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
    margin-right: 0;
    margin-left: 0;
    border-radius: 8px;
  }
}
</style>
