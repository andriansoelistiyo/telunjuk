<template>
  <div class="container py-16px position-relative">
    <client-only>
      <div class="card-custom">
        <div v-if="regStep === 1">
          <Typography variant="h4" class="text-center"> Daftar</Typography>
          <Typography class="text-center">Daftar dulu lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet. Yuk!
          </Typography>
          <b-form-group
            id="fieldset-1"
            label-for="email"
            :invalid-feedback="invalidEmail"
            :validFeedback="validEmail"
            :state="isEmailValid"
            trim>
            <template v-slot:label>
              <Typography variant = "h5">Email</Typography>
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
          <btn-component @onClickAction="onClickAction" variant="filled-danger" fullwidth="fullwidth">Selanjutnya
          </btn-component>
          <Typography class="text-center mt-3">atau daftar dengan</Typography>
          <div class="row">
            <div class="col-6">
              <btn-facebook @loginFacebook="loginFacebook()"/>
            </div>
            <div class="col-6">
              <btn-google @loginGoogle="loginGoogle()"/>
            </div>
          </div>
          <Typography class="text-center mt-3">Sudah punya akun? <span class="text-danger">Login sekarang!</span>
          </Typography>
        </div>
        <div v-else-if="regStep === 2">
          <Typography variant="h4" class="text-center"> Masukkan Kode Verifikasi</Typography>
          <Typography class="text-center">Kode verifikasi telah dikirimkan melalui e-mail ke
            {{ form.email }}
          </Typography>
          <div class="text-center">
            <code-verification :border="isVerCodeComplete ? '1px solid #ced4da' : '1px solid #dc3545'" :fields="4"
                               :fieldWidth="50" :fieldHeight="50" @change="verificationCode"/>
            <btn-component @onClickAction="verificationCheck" class="mt-3" variant="filled-danger"
                           fullwidth="fullwidth">Verifikasi
            </btn-component>
          </div>
          <Typography class="text-center mt-3">Tidak menerima kode? <span class="text-danger">Kirim ulang kode!</span>
          </Typography>
        </div>
        <div v-else>
          <Typography variant="h4" class="text-center"> Selamat! E-mail kamu sudah terverifikasi </Typography>
          <Typography class="text-center">Login dulu lorem ipsum dolor sit amet, lorem ipsum
            dolor sit amet. Yuk!
          </Typography>
          <b-form-group
            id="fieldset-3"
            label-for="email"
            trim>
            <template v-slot:label>
              <Typography variant = "h5">Nama Lengkap</Typography>
            </template>
            <template v-slot:description>
              <Typography>
                Contoh : Andrian Soelistiyo
              </Typography>
            </template>
            <b-input-group>
              <b-form-input
                id="nama"
                v-model="form.name"
                type="text"
                required
                placeholder="Andrian Soelistiyo"
              ></b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group
            id="fieldset-4"
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
          <b-form-group
            id="fieldset-5"
            label-for="password-2"
            :invalid-feedback="invalidPassword2"
            :validFeedback="validPassword2"
            :state="isPassword2Valid">
            <template v-slot:label>
              <Typography variant = "h5">Re-Password</Typography>
            </template>
            <template v-slot:description>
              <Typography :class="isPassword2Valid === false ? 'text-danger' : ''">
                {{ validate.password2 }}
              </Typography>
            </template>
            <b-input-group>
              <b-form-input
                id="password-2"
                v-model="form.confirmPass"
                :type="isPassword2Visible ? 'text' : 'password'"
                required
                placeholder="Password"
                :class="passLineColor(isPassword2Valid)"
                trim
              ></b-form-input>
              <template v-slot:append>
                <b-button @click="isPassword2Visible = !isPassword2Visible" variant="outline-light"
                          :class="passLineColor(isPassword2Valid)">
                  <font-awesome-icon :icon="isPassword2Visible ? ['fas', 'eye-slash'] :['fas', 'eye']" color="black"
                                     aria-hidden="true"/>
                </b-button>
              </template>
            </b-input-group>
          </b-form-group>
          <btn-component @onClickAction="onClickAction" variant="filled-danger" fullwidth="fullwidth">Simpan</btn-component>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import formValidation from "~/mixins/form-validation.js";


export default {
  name: "register",
  components: {
    Typography: () => import('~/components/typography'),
    btnComponent: () => import('~/components/t-button'),
    btnGoogle: () => import('~/components/t-button-google'),
    btnFacebook: () => import('~/components/t-button-facebook'),
    codeVerification: () => import('~/components/t-code-verification')
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
  mixins: [formValidation],
  beforeMount() {
    if (window.localStorage.getItem('registration-step') === null) {
      window.localStorage.setItem('registration-step', '1');
    } else {
      this.regStep = parseInt(window.localStorage.getItem('registration-step'));
    }
  },
  data: () => {
    return {
      form: {
        email: "",
        name: null,
        password: "",
        confirmPass: ""
      },
      regStep: null,
      verCode: null,
      isVerCodeComplete: true,
      step3: ['name', 'pass', 'confimPass'],
      isPassword2Visible: false,
      isPassword2Valid: null,
      validate:{
        password2: "Masukkan ulang password kamu"
      }
    }
  },
  watch: {
    regStep(val) {
      window.localStorage.setItem('registration-step', val)
    },
  },
  computed:{
    invalidPassword2() {
      if (this.form.confirmPass !== this.form.password && this.form.confirmPass.length !== 0 ) {
        this.isPassword2Valid = false;
        this.validate.password2 = "Password tidak sama"
      }
    },
    validPassword2() {
      if (this.form.confirmPass === this.form.password) {
        this.validate.password2 = "Masukkan ulang password kamu";
        this.isPassword2Valid = true;
      } else if (this.form.confirmPass.length === 0) {
        this.isPassword2Valid = null;
      }
    }
  },
  methods: {
    loginGoogle() {
      console.log('do nothing')
    },
    loginFacebook() {
      console.log('do nothing');
    },
    verificationCode(val) {
      this.verCode = val;
      this.isVerCodeComplete = true;
    },
    onClickAction() {
      if (this.isEmailValid) {
        this.regStep++;
      }
    },
    verificationCheck() {
      if (this.verCode === null || this.verCode === "" || this.verCode.toString().length !== 4) {
        this.isVerCodeComplete = false;
      } else {
        this.regStep++;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/scss/helper";
.card-custom {
  width: 320px;
  margin: 0 auto;
}
</style>
