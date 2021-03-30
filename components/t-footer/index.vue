<template>
  <footer>
    <hr />
    <div class="container py-16px">
      <div class="row">
        <div class="col-12 col-xs-12 col-sm-4 col-lg-4 col-xl-4">
            <img class="img-logo" src="~/assets/images/logo-telunjuk-merah.png" alt="Logo">
            <p class="fs-12px mt-16px mb-0 text-gray">
              Diluncurkan pada 29 Februari 2012, Telunjuk.com adalah Layanan Rekomendasi dan Perbandingan Harga untuk Belanja (Shopping Recommendation Engine and Price Comparison) dari Indonesia.
            </p>
        </div>
        <div class="col-12 col-xs-12 col-sm-3 col-lg-3 col-xl-3 mt-footer-mobile pl-middle-content">
            <p class="fs-14px fw-600 mb-0">
              Tentang Telunjuk.com
            </p>
            <p class="fs-12px mt-8px mb-0">
              <a href="https://telunjuk.com/about/" class="footer-link">Life at Telunjuk</a>
            </p>
            <p class="fs-12px mt-8px mb-0">
              <a href="https://telunjuk.com/peta/" class="footer-link">Peta Situs</a>
            </p>
            <p class="fs-12px mt-8px mb-0">
              <a href="https://telunjuk.com/careers/" class="footer-link">Karir</a>
            </p>
        </div>
        <div class="col-12 col-xs-12 col-sm-5 col-lg-5 col-xl-5 mt-footer-mobile">
            <p class="fs-14px fw-600 mb-0">
              Jangan Sampai Terlewat Harga Terbaik!
            </p>
            <p class="fs-12px mt-8px text-gray">
              Dapatkan beragam info menarik seputar flash sale, promo, serta voucher, dengan berlanggan newsletter!
            </p>
            <div class="input-group">
              <input type="text" class="form-control brl-8px" placeholder="Email kamu" aria-label="Email kamu" aria-describedby="basic-addon2">
              <div class="input-group-append">
                <button class="btn btn-outline-danger brr-8px font-weight-bold" type="button">Subscribe</button>
              </div>
            </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <p class="text-center fs-12px fw-500">
        Copyright © 2020 PT. Telunjuk Komputasi Indonesia. All Right Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "tFooter",
}
</script>

<style scoped>
@media screen and (max-width: 540px) {
  .mt-footer-mobile {
    margin-top: 32px;
  }
}

@media screen and (min-width: 720px) {
  .pl-middle-content {
    padding-left: 32px;
  }
}

a:hover {
  text-decoration: none;
}

.padding-grid {
  padding: 8px;
}

.img-logo {
  height: 40px;
}

.text-gray {
  color: var(--gray);
}

.footer-link {
  color: var(--gray);
}
.footer-link:hover {
  color: var(--red);
}
</style>
