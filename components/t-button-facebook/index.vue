<template>
  <div @click="loginFacebook">
    <btn-component variant="filled-light" fullwidth="fullwidth">
      <font-awesome-icon :icon=" ['fab', 'facebook']" color="#4267B2"/>
      Facebook
    </btn-component>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {
    btnComponent: () => import('~/components/t-button'),
  },
  methods: {
    loginFacebook: function () {
      this.$emit('loginFacebook');
    }
  }
}
</script>

<style scoped>

</style>
