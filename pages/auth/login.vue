<template>
  <div>
    <client-only>
      <div class="container py-16px position-relative">
        <div class="card-custom">
          <Typography variant="h4" class="text-center"> Masuk</Typography>
          <Typography class="text-center">Login dulu lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet. Yuk!
          </Typography>
          <b-form @submit="">
            <b-form-group
              id="fieldset-1"
              label-for="email"
              :invalid-feedback="invalidEmail"
              :validFeedback="validEmail"
              :state="isEmailValid"
              trim>
              <template v-slot:label>
                <label class="text--bold">Email</label>
              </template>
              <template v-slot:description>
                <Typography :class="isEmailValid === false || null ? 'text-danger' : ''">
                  {{ validate.email }}
                </Typography>
              </template>
              <b-input-group>
                <b-form-input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                  :class="emailLineColor(isEmailValid)"
                ></b-form-input>
              </b-input-group>
            </b-form-group>

            <b-form-group
              id="fieldset-2"
              label-for="password"
              :invalid-feedback="invalidPassword"
              :validFeedback="validPassword"
              :state="isPasswordValid">
              <template v-slot:label>
                <Typography variant = "h5">Password</Typography>
              </template>
              <template v-slot:description>
                <Typography :class="isPasswordValid === false ? 'text-danger' : ''">
                  {{ validate.password }}
                </Typography>
              </template>
              <b-input-group>
                <b-form-input
                  id="password"
                  v-model="form.password"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  required
                  placeholder="Password"
                  :class="passLineColor(isPasswordValid)"
                  trim
                ></b-form-input>
                <template v-slot:append>
                  <b-button @click="isPasswordVisible = !isPasswordVisible" variant="outline-light"
                            :class="passLineColor(isPasswordValid)">
                    <font-awesome-icon :icon="isPasswordVisible ? ['fas', 'eye-slash'] :['fas', 'eye']" color="black"
                                       aria-hidden="true"/>
                  </b-button>
                </template>
              </b-input-group>
            </b-form-group>
            <Typography class="float-right text-danger">Lupa password?</Typography>
            <btn-component variant="filled-danger" fullwidth="fullwidth">Masuk</btn-component>
          </b-form>
          <Typography class="text-center mt-3">atau masuk dengan</Typography>
          <div class="row">
            <div class="col-6">
             <btn-facebook @loginFacebook="loginFacebook()" />
            </div>
            <div class="col-6">
              <btn-google @loginGoogle="loginGoogle()" />
            </div>
          </div>
          <Typography class="text-center mt-3"><Typography class="text-center mt-3">Belum punya akun? <span class="text-danger">Daftar sekarang!</span></Typography></Typography>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import formValidation from "~/mixins/form-validation";

export default {
  name: "login",
  components: {
    Typography: () => import('~/components/typography'),
    btnComponent: () => import('~/components/t-button'),
    btnGoogle: ()=> import('~/components/t-button-google'),
    btnFacebook: ()=> import('~/components/t-button-facebook'),
  },
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
  mixins:[formValidation],
  data: () => {
    return {
      form: {
        email: "",
        password: "",
      },
    }
  },
  methods:{
    loginGoogle(){
      console.log('do nothing')
    },
    loginFacebook(){
      console.log('do nothing');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/scss/helper";
.form-control.is-invalid, .form-control, .form-control.is-valid {
  &:focus {
    box-shadow: 0 0 0 0.2rem white;
  }
}

.form-control.is-invalid[placeholder="Password"], .form-control[placeholder="Password"], .form-control.is-valid.form-control.is-invalid[placeholder="Password"] {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.card-custom {
  width: 320px;
  margin: 0 auto;
}
 .input-group-append {
   .btn{
     z-index: 0;
     border-top-left-radius: 0 !important;
     border-bottom-left-radius: 0 !important;
   }
 }


</style>
