const data = {
  data: () => {
    return {
      validate: {
        email: "Contoh : andrian@telunjuk.com",
        password: "Minimal 8 karakter"
      },
      regex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      isEmailValid: null,
      isPasswordValid: null,
      isPasswordVisible: false
    }
  },
  methods:{
    passLineColor(isPasswordValid) {
      if (isPasswordValid || isPasswordValid === null) {
        return "full-line-default "
      } else if (isPasswordValid === false) {
        return "full-line-red"
      }
    },
    emailLineColor(isEmailValid){
      if (isEmailValid || isEmailValid  === null) {
        return "full-line-default"
      } else if (isEmailValid === false) {
        return "full-line-red"
      }
    }
  },
  computed: {
    invalidEmail() {
      if (!this.regex.test(this.form.email) && this.form.email !== "") {
        this.validate.email = "Format e-mail tidak sesuai";
        this.isEmailValid = false;
      }
    },
    validEmail() {
      if (this.regex.test(this.form.email)) {
        this.validate.email = "Contoh : andrian@telunjuk.com"
        this.isEmailValid = true;
      } else if (this.form.email === "") {
        this.validate.email = "Contoh : andrian@telunjuk.com"
        this.isEmailValid = null;
      }
    },
    invalidPassword() {
      if (this.form.password.length < 8) {
        this.isPasswordValid = false;
        this.validate.password = "Minimal 8 karakter"
      }
    },
    validPassword() {
      if (this.form.password.length >= 8) {
        this.validate.password = "Minimal 8 karakter";
        this.isPasswordValid = true;
      } else if (this.form.password.length === 0) {
        this.isPasswordValid = null;
      }
    }
  }
}

export default data
