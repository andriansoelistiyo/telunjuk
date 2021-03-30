<template>
  <h1 v-if="variant == 'h1'">
    <slot />
  </h1>
  <h2 v-else-if="variant == 'h2'">
    <slot />
  </h2>
  <h3 v-else-if="variant == 'h3'">
    <slot />
  </h3>
  <h4 v-else-if="variant == 'h4'">
    <slot />
  </h4>
  <h5 v-else-if="variant == 'h5'">
    <slot />
  </h5>
  <h6 v-else-if="variant == 'h6'">
    <slot />
  </h6>
  <p v-else>
    <slot />
  </p>
</template>

<script>
export default {
  name: 'typograhpy',
  props: {
    variant: { type: String }
  }
}
</script>

<style scoped>
  h1, h2, h3, h4, h5, h6 {
    font-family: Roboto, sans-serif;
    color: var(--black);
    font-weight: 600;
  }

  h1 { font-size: 36px }
  h2 { font-size: 30px }
  h3 { font-size: 24px }
  h4 { font-size: 18px }
  h5 { font-size: 14px }
  h6 { font-size: 12px }
  p { font-size: 14px }
</style>
