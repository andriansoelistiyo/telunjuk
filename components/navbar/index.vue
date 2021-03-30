<template>
  <nav class="navbar fixed-top navbar-light bg-white">
    <div class="container-fluid navbar__container main">
      <div class="navbar__top d-flex">
        <!-- Navbar Mobile section -->
        <div class="d-flex show-xs navbar-xs--right">
          <!--
          <button @click="hadNotification = !hadNotification" class="menu-btn mobile-notification">
            <span v-if="hadNotification" class="notification-bullet"></span>
            <i class="far fa-bell"></i>
          </button>
          -->
        </div>
        <!-- ./Navbar Mobile section -->

        <!-- Navbar Logo -->
        <div class="navbar-brand">
          <a href="/">
            <picture>
              <source srcset="~/assets/images/logo-telunjuk-merah.png" type="image/png" />
              <img src alt="Logo" draggable="false" />
            </picture>
          </a>
        </div>
        <!-- ./Navbar Logo -->

        <div class="navbar-nav navbar-xs--left">
          <a href="https://telunjuk.com/harga" class="category-btn xs-hidden">Kategori</a>
          <!-- Bar menu button to set drawer active on mobile -->
          <button class="menu-btn d-flex show-xs" @click="setDrawer(!active)">
            <span class="menu-btn-icon">
               <font-awesome-icon :icon="['fas', 'bars']" aria-hidden="true"/>
            </span>
          </button>
          <!-- ./Bar menu button to set drawer active on mobile -->
        </div>
      </div>

      <!-- Search box navigation -->
      <div class="navbar-search">
        <div class="search-box">
          <button class="search-btn" aria-label="Justify">
            <font-awesome-icon :icon="['fas', 'search']"  aria-hidden="true" tabindex="-1" />
          </button>
          <!-- Input used with two ways data binding for searchValue text -->
          <input
            class="search-input"
            type="text"
            placeholder="Cari iPhone 11 Pro Max"
            @focus="openSearchModal"
            v-model.trim="searchValue"
          />
        </div>
      </div>
      <!-- ./Search box navigation -->

      <!-- Navbar right desktop -->
      <!-- status kalo sudah login -->
      <div v-if="isLoggedIn" class="navbar__setting d-flex xs-hidden">
        <!-- <button class="navbar__setting-notif" @click="hadNotification = !hadNotification">
          <span v-if="hadNotification" class="notification-bullet"></span>
          <font-awesome-icon :icon="['far', 'bell']"  aria-hidden="true" tabindex="-1" />
        </button>
        <button class="navbar__profile d-flex">
          <div class="navbar__avatar-frame d-flex">
            <picture>
              <source
                srcset="https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/59628020_2374727895904056_5130330566691913728_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_eui2=AeF7RVGEhYOu2DgcjufaK9L1wuhPRUQJe1zC6E9FRAl7XDrYqHBdgGpnF8w-EWaWKAJHpT9v2HPc83yJiZ3JkHt6&_nc_ohc=pLmLdpP8dGQAX-3WYHe&_nc_ht=scontent.fcgk18-2.fna&oh=a72b753e7745a3be3a4968edd9cd5762&oe=5F5AC830"
                type="image/png"
              />
              <img src alt="avatar pict" />
            </picture>
          </div>
          <span class="navbar__profile-name">{{ isLoggedIn }} {{ user.name }}</span>
        </button> -->
      </div>

      <!-- status kalo belum login -->
      <div v-else class="navbar__setting d-flex xs-hidden">
        <!-- <nuxt-link to="/auth/login" no-prefetch>
          <button-component  type="submit" class="btn t-btn-danger-outlined btn-sm br-8px font-weight-bold">Masuk</button-component>
        </nuxt-link>
        <nuxt-link to="/auth/register" no-prefetch>
          <button-component  type="submit" class="btn t-btn-danger btn-sm br-8px font-weight-bold ml-8px">Daftar</button-component>
        </nuxt-link> -->
      </div>
      <!-- ./Navbar right desktop -->
    </div>

    <!-- Small Navbar only show on desktop -->
    <small-navbar :menu="menuList" class="navbar__container" />

    <!-- Drawer -->
    <drawer :active="active" :menu="menuList" @closed="setDrawer(false)" />
    <transition name="slide-top">
      <TPopupSearch v-if="isModalSearchOpen && $device.isMobileOrTablet" @backAction="isModalSearchOpen = !isModalSearchOpen" />
    </transition>
  </nav>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "navbar",
  data() {
    return {
      active: false,
      hadNotification: false,
      searchValue: "",
      menuList: [
        {
          id: 1,
          link: "https://telunjuk.com/flashsale",
          icon: "fas fa-bolt",
          label: "Flash Sale",
        },
        {
          id: 2,
          link: "https://telunjuk.com/promo",
          icon: "fas fa-tag",
          label: "Promo",
        },
        {
          id: 3,
          link: "https://telunjuk.com/voucher",
          icon: "fas fa-ticket-alt",
          label: "Voucher",
        },
        {
          id: 4,
          link: "https://telunjuk.com/article",
          icon: "fas fa-newspaper",
          label: "Artikel",
        },
        {
          id: 5,
          link: "https://telunjuk.com/partner",
          icon: "fas fa-store",
          label: "Partner Kami",
        },
      ],
      isModalSearchOpen: false
    };
  },
  components: {
    Drawer: () => import('./drawer.vue'),
    SmallNavbar: () => import('./small-navbar.vue'),
    ButtonComponent: () => import('~/components/t-button'),
    TPopupSearch: () => import('~/components/t-popup-search'),
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.loggedIn,
      user: state => state.user
    })
  },
  methods: {
    // Action for search box
    setDrawer(active) {
      this.active = active;
    },
    async logout() {
      await this.$auth.logout();
      this.$router.push("/");
    },
    openSearchModal(){
      this.isModalSearchOpen = true;
    }
  },
};
</script>

<style scoped>
.category-btn,
.search-btn,
.search-input,
.menu-btn,
.navbar__setting-notif,
.navbar__profile {
  background-color: transparent;
  border: none;
  outline: none;
  font-family: var(--font-default);
}

.navbar__container,
.search-box {
  display: flex;
}

.category-btn,
.search-input {
  font-size: 12px;
}

.navbar-search,
.search-input {
  flex: 1;
}

/* Lipstick style */
.navbar {
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: var(--shadow-default);
}
.navbar.bg-white {
  background-color: var(--white);
}
.navbar__container {
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.navbar__top {
  align-items: center;
}
.navbar-nav {
  margin-right: 24px;
}
.navbar-search {
  background-color: var(--light-gray);
  color: var(--gray);
  padding: 0.3em;
  border-radius: var(--border-radius-big);
}

.category-btn {
  color: var(--black);
  text-decoration: none;
}

.search-btn,
.navbar__setting-notif {
  transition: 0.2s all ease;
}

.search-input {
  padding-left: 0.5em;
  padding-right: 0.5em;
}

.navbar__setting-notif:hover,
.search-btn:hover {
  background-color: var(--light-gray);
}

.navbar__setting {
  flex: 0.4;
  align-items: center;
  justify-content: flex-end;
}
.navbar__setting-notif {
  padding: 2px 8px;
  position: relative;
  font-size: 18px;
  border-radius: 8px;
}
.navbar__profile {
  align-items: center;
}
.navbar__avatar-frame {
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  margin-left: 16px;
  height: 28px;
  width: 28px;
  background-color: var(--light-gray);
  border-radius: 50%;
  transition: 0.5s all ease;
  overflow: hidden;
}
.navbar__avatar-frame img {
  width: 100%;
}
.navbar__profile-name {
  font-size: 12px;
}

.navbar__profile:hover .navbar__avatar-frame {
  box-shadow: 0 0px 2px 4px rgba(0, 0, 0, 0.2);
}

.notification-bullet {
  position: absolute;
  top: 2px;
  right: 4px;
  height: 12px;
  width: 12px;
  background-color: var(--red);
  border: 2px solid var(--white);
  border-radius: 50%;
}

.t-btn-danger {
  color: var(--white);
  background-color: var(--red);
  border-color: var(--red);
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
}

.t-btn-danger-outlined {
  color: var(--red);
  background-color: var(--white);
  border-color: var(--red);
  border-radius: 8px;
  padding-left: 16px;
  padding-right: 16px;
}

.slide-top {
  -webkit-animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


@-webkit-keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}
@keyframes slide-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  100% {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
  }
}

/* Breakpoints */
@media only screen and (max-width: 540px) {
  .navbar {
    padding: 0;
  }
  .navbar-brand {
    flex: 1.5;
    max-width: 55%;
    margin-right: 0;
  }
  .navbar-brand img {
    width: 100%;
  }

  .navbar__container:not(.navbar__small) {
    padding-top: 0.5em;
    padding-bottom: 0.5em;
    flex-direction: column;
    align-items: stretch;
  }
  .navbar__top {
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 0.5em;
  }
  .navbar__top > *:not(.navbar-brand) {
    flex: 1;
  }
  .navbar-nav {
    margin-right: 0;
    transition: 0.2s all ease;
  }
  .menu-btn {
    padding: 0;
    /* color: var(--red); */
    transition: 0.2s all ease;
  }
  .menu-btn-icon {
    font-size: 20px;
  }
  .menu-btn.mobile-notification {
    position: relative;
    font-size: 22px;
  }
  .menu-btn:active {
    opacity: 0.5;
  }
  .navbar-xs--left {
    justify-content: flex-start;
  }
  .navbar-xs--right {
    justify-content: flex-end;
  }

  .navbar-search {
    margin-top: 0.2em;
  }

  .notification-bullet {
    right: -4px !important;
  }
}
</style>
