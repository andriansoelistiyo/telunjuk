<template>
  <div class="wrapper d-flex">
    <typography variant="h3">
      Wah, sepertinya kamu tersesat
    </typography>
    <nuxt-link to="/">
      Ayo kembali ke Home Page
    </nuxt-link>
  </div>
</template>



<script>

export default {
  components: {
    typography: () => import("~/components/typography"),
  },
}
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 8em);
    text-align: center;
  }
</style>
