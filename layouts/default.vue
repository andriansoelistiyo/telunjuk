<template>
  <div>
    <navbar />
    <div class="app__wrapper">
      <!-- <Nuxt /> -->
      <Nuxt keep-alive :keep-alive-props="{ max: 12 }" />
    </div>
    <t-footer />
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import('~/components/navbar'),
    TFooter: () => import('~/components/t-footer')
  },
  activated() {
    // Call fetch again if last fetch more than a minute ago
    if (this.$fetchState.timestamp <= Date.now() - 60000) {
      this.$fetch()
    }
  }
}
</script>

<style scoped>
.app__wrapper {
  margin-top: 96px;
}
</style>
