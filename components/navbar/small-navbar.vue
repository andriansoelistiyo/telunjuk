<template>
  <div class="container-fluid navbar__small xs-hidden">
    <small-navbar-list :lists="menu"></small-navbar-list>
    <!--
    <a
      href="https://play.google.com/store/apps/details?id=com.telunjuk.mobile"
      class="nav-link--right pr-6px"
    >
      <i class="fas fa-mobile-alt"></i>
      <span>Download Telunjuk App</span>
    </a>
    -->
  </div>
</template>

<script>
export default {
  name: "smallNavbar",
  props: {
    // Get the list of menu from the parent
    menu: Array,
  },
  components: {
    SmallNavbarList: () => import('./small-navbar-list.vue')
  }
};
</script>

<style scoped>
.navbar__small {
  justify-content: space-between;
  padding-top: 8px;
  font-size: 12px;
}

.nav-link--right {
  margin-left: 1em;
  font-size: 12px;
  font-family: var(--font-default);
  color: var(--black);
  transition: 0.2s opacity ease;
}
.nav-link--right:hover {
  text-decoration: none;
  color: var(--red);
}
.nav-link--right span {
  margin-left: 0.5em;
}

.pr-6px {
  padding-right: 6px;
}
</style>
