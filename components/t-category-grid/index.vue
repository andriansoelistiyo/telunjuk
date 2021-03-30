<template>
  <div>
    <client-only>
      <div class="card-grid">
        <a :href="category.url" @click="eventTracker(category, page)">
          <div class="header-content">
            <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
              <img :data-src="category.image" class="img-fluid" :alt="category.title" />
            </div>
          </div>
          <div class="body-content">
            <p class="title-category" :title="category.title">{{ category.title }}</p>
          </div>
        </a>
      </div>
    </client-only>
  </div>
</template>

<script>
const imgLoading = require("~/assets/images/lazy-load-image-150x150.png");

export default {
  name: "tCategoryGrid",
  props: {
    category: {
      type: Object,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      imgLoading,
    };
  },
  methods: {
    eventTracker(category, page) {
      const value = `${category.title}`;

      this.$ga.event(page, "Click Grid", value);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 540px) {
  .title-category {
    font-size: 10px !important;
    line-height: 15px !important;
    min-height: 30px !important;
  }

  .body-content {
    padding: 4px !important;
  }
}

a:hover {
  text-decoration: none;
}

.card-grid {
  position: relative;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);
  border-radius: 8px;
  background-color: #ffffff;
}

.header-content {
  position: relative;
  padding: 8px 8px 0;
}

.body-content {
  padding: 8px;
}

.title-category {
  font-size: 12px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
  font-family: roboto, sans-serif;
  margin-top: 4px;
  margin-bottom: 0;
  line-height: 18px;
  min-height: 36px;
  color: var(--black);
  text-align: center;
}
</style>
