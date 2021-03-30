<template>
  <div @click="loginGoogle">
    <btn-component variant="filled-light" fullwidth="fullwidth">
      <font-awesome-icon :icon=" ['fab', 'google']" color="#4285F4"/>
      Google
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
    loginGoogle() {
      this.$emit('loginGoogle')
    }
  }

}
</script>

<style scoped>

</style>
