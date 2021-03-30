<template>
  <div :class="['wrapper', activeClass]">
    <!-- Main Drawer -->
    <div class="drawer">
      <!-- Drawer Head -->
      <!-- Close button invokes the function called from the parent using $emit -->
      <div class="drawer__top-bar d-flex">
        <span class="drawer__top-bar-label">Menu</span>
        <button class="drawer__top-bar-close" @click="$emit('closed')">
<!--          <i class="fas fa-times"></i>-->
          <font-awesome-icon :icon="['fas', 'times']" />
        </button>
      </div>
      <!-- ./Drawer Head -->

      <div class="container drawer__container">
        <!-- Drawer Auth Section -->
        <!-- <div class="drawer__content-box pt-3">
          <div class="drawer__item no-effect text-bold">
            <div class="drawer__item-icon">
              <i class="far fa-user-circle"></i>
              <font-awesome-icon :icon="['fas', 'user-circle']" />
            </div>
            <div class="drawer__item-label">
              <nuxt-link to="/auth/login" no-prefetch>
                  <span class="text-bold">Masuk</span>
              </nuxt-link>
              <span class="label--light">atau</span>
              <nuxt-link to="/auth/register" no-prefetch>
                <span class="text-bold">Daftar</span>
              </nuxt-link>
            </div>
          </div>
        </div> -->
        <!-- ./Drawer Auth Section -->

        <!-- Loopable drawer menu content -->
        <div class="drawer__content-box">
          <a v-for="list in menu" :key="list.id" :href="list.link" class="drawer__item drawer__item--list">
            <div class="drawer__item-icon">
              <font-awesome-icon  :icon="getPrefixAndIcon(list.icon)" aria-hidden="true" />
            </div>
            <div class="drawer__item-label">{{ list.label }}</div>
          </a>
        </div>
        <!-- ./Loopable drawer menu content -->

        <div class="drawer__content-box">
          <div class="drawer__item-header">
            <span class="drawer__item-title text-bold">Tentang Telunjuk.com</span>
            <!--
            <button class="drawer__item-toggler">
              <i class="fas fa-angle-up"></i>
            </button>
            -->
          </div>

          <div class="drawer__item-body">
            <a href="https://www.telunjuk.com/about" class="drawer__item drawer__item--list">
              <div class="drawer__item-label">Life at Telunjuk</div>
            </a>
            <a href="https://www.telunjuk.com/peta" class="drawer__item drawer__item--list">
              <div class="drawer__item-label">Peta Situs</div>
            </a>
            <a href="https://www.telunjuk.com/careers" class="drawer__item drawer__item--list">
              <div class="drawer__item-label">Karir</div>
            </a>
          </div>
        </div>

        <!-- Loopable drawer menu content for social media -->
        <div class="drawer__content-box">
          <a v-for="list in socialAccountList" :key="list.id" :href="list.link" target="_blank" class="drawer__item drawer__item--list item-list--icon">
            <div class="drawer__item-icon item-icon--social">
              <font-awesome-icon :icon="getPrefixAndIcon(list.icon)" aria-hidden="true" />
            </div>
            <div class="drawer__item-label">{{ list.label }}</div>
          </a>
        </div>
        <!-- ./Loopable drawer menu content for social media -->
      </div>
    </div>
    <!-- ./Main Drawer -->

    <!-- Outline wrapper that will close the drawer if clicked -->
    <div class="overlay" @click="$emit('closed')"></div>
    <!-- ./Outline wrapper that will close the drawer if clicked -->
  </div>
</template>

<script>
import fontAwesome from "@/mixins/font-awesome";
export default {
  name: "drawer",
  mixins: [fontAwesome],
  components:{
    Typography: () => import('~/components/typography'),
  },
  props: {
    active: Boolean,
    menu: Array,
  },
  data() {
    return {
      activeClass: "",
      // Used for list item on social menu drawer
      socialAccountList: [
        {
          id: 1,
          link: "https://www.facebook.com/pages/Telunjuk/250514688312041",
          icon: "fab fa-facebook-f",
          label: "Facebook",
        },
        {
          id: 2,
          link: "https://instagram.com/telunjukcom",
          icon: "fab fa-instagram",
          label: "Instagram",
        },
        {
          id: 3,
          link: "https://twitter.com/intent/follow?screen_name=telunjukdotcom",
          icon: "fab fa-twitter",
          label: "Twitter",
        },
        {
          id: 4,
          link: "https://www.youtube.com/channel/UCaHsBjWSfqTx_2p4zwPQNDg",
          icon: "fab fa-youtube",
          label: "Youtube",
        },
        {
          id: 5,
          link: "https://line.me/ti/p/%40telunjuk.com",
          icon: "fab fa-line",
          label: "Line",
        },
      ],
    };
  },
  methods: {
    // Method for making the transition of drawer smooth
    setClass() {
      if (this.active) {
        this.activeClass = "d-flex";
        setTimeout(() => {
          this.activeClass += " active";
        }, 10);
        return;
      }

      this.activeClass = "d-flex";
      setTimeout(() => {
        this.activeClass = "";
      }, 500);
    },
  },
  watch: {
    // Will executed every changed on active state changed its value
    active: function (val, oldVal) {
      this.setClass();
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: transparent;
  transition: 0.5s all ease;
  z-index: 999;
}

.drawer {
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 3;
  background-color: var(--white);
  transform: translateX(-100%);
  transition: 0.5s all ease;
}
.overlay {
  flex: 1;
}

.drawer__top-bar {
  padding: 0.5em 1em;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid var(--light-gray);
}
.drawer__top-bar-label {
  font-size: 18px;
  font-weight: 600;
}
.drawer__top-bar-close {
  padding: 0;
  font-size: 22px;
  background-color: transparent;
  color: var(--black);
  border: none;
  outline: none;
  transition: 0.2s all ease;
}
.drawer__top-bar-close:active {
  opacity: 0.5;
}

.drawer__container {
  flex: 1;
  display: block;
  padding-bottom: 4rem;
  overflow-y: auto;
}
.drawer__content-box {
  padding: 16px 0;
  width: 100%;
  border-bottom: 2px solid var(--light-gray);
}
.drawer__content-box:last-child {
  border-bottom: none;
}
.drawer__item-header,
.drawer__item {
  display: flex;
  align-items: center;
}
.drawer__item-header {
  justify-content: space-between;
}
.drawer__item-body {
  padding-top: 0.5em;
}
.drawer__item {
  color: var(--black);
  transition: 0.2s opacity ease;
}
.drawer__item--list {
  margin-top: 8px;
  margin-bottom: 16px;
}
.drawer__item--list.item-list--icon {
  margin-bottom: 0.5em;
}
.drawer__item--list:last-child {
  margin-bottom: 0;
}
.drawer__item-icon {
  margin-right: 0.5em;
  width: 25px;
  font-size: 22px;
  text-align: center;
}
.drawer__item--list .drawer__item-icon {
  margin-right: 8px;
  font-size: 16px;
}
.drawer__item-icon.item-icon--social {
  font-size: 22px;
}
.drawer__item-label {
  font-weight: 400;
}
.drawer__item-label a {
  color: var(--black);
}
.drawer__item--list .drawer__item-label {
  font-size: 14px;
}
.drawer__item-toggler {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  background-color: var(--light-gray);
  color: var(--black);
  font-size: 22px;
  border: none;
  border-radius: 50%;
  outline: none;
  transition: 0.2s all ease;
}
.label--light {
  font-weight: 400;
}

.overlay {
  background-color: transparent;
}

.wrapper.active {
  background-color: rgba(0, 0, 0, 0.5);
}
.wrapper.active .drawer {
  transform: translateX(0);
}

.drawer__item-toggler:hover,
.drawer__item:not(.no-effect):hover {
  text-decoration: none;
  opacity: 0.5;
}
.text-bold {
  font-weight: 600;
}

@media only screen and (min-width: 540px) {
  .wrapper.active {
    display: none !important;
  }
}
</style>
