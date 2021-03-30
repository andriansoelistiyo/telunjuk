<template>
  <div class="card-grid">
    <div class="header-content">
      <iframe v-if="isVideo" :title="video.title" class="video-size" :src="'https://www.youtube.com/embed/' + video.video_id + '?autoplay=1'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div v-if="!isVideo">
        <div v-lazy-container="{ selector: 'img', error: imgLoading, loading: imgLoading }">
          <img :data-src="video.img" draggable="false" class="img-fluid video-size" :alt="video.title" />
        </div>
        <div @click="showIframe">
          <!-- <i class="fab fa-youtube youtube-btn"></i> -->
          <font-awesome-icon :icon="['fab', 'youtube']" class="youtube-btn" fixed-width />
        </div>
      </div>
    </div>
    <div class="body-content">
      <p class="title-video" :title="video.title">{{ video.title }}</p>
      <div class="media mt-16px">
        <div v-lazy-container="{ selector: 'img', error: imgLoadingPort, loading: imgLoadingPort }">
          <img class="mr-2 img-avatar" data-src="https://asset.telunjuk.co.id/f/badge/logo-telunjuk-only-537338a0-fbed-4f14-85f5-6970f6ca1b57.png" alt="Generic placeholder image" />
        </div>
        <div class="media-body">
          <p class="author">Telunjuk.com</p>
          <p class="date-video">
            <b>{{ numberWithCommas(video.stats_view) }}</b>
            Dilihat • {{ this.$moment(video.uploaded).format("DD MMM YYYY") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import lazyLoad from "@/mixins/lazy-load";

export default {
  name: "tVideoGrid",
  mixins: [lazyLoad],
  props: {
    video: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isVideo: false
    };
  },
  methods: {
    numberWithCommas(n) {
      if (n === undefined) {
        return 0;
      }

      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    removeComma(n) {
      return n.replace(",00", "");
    },
    showIframe() {
      this.isVideo = true;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 540px) {
  .video-size {
    width: 100% !important;
    min-height: 220px !important;
  }

  .title-video {
    font-size: 12px !important;
    line-height: 18px !important;
    min-height: 36px !important;
  }

  .summary-video {
    font-size: 10px !important;
    line-height: 15px !important;
    min-height: 45px !important;
  }

  .img-avatar {
      height: 30px !important;
      width: 30px !important;
  }

  .author {
      font-size: 10px !important;
      line-height: 15px !important;
  }

  .date-video {
      font-size: 10px !important;
      line-height: 15px !important;
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
}

.video-size {
  width: 100%;
  min-height: 260px;
}

.img-video {
  border-radius: 8px 8px 0 0;
  width: 100%;
}

.body-content {
  padding: 16px;
}

.badge-category {
  color: var(--blue);
  background-color: #eef3fc;
  font-weight: 500;
}

.title-video {
  font-size: 14px;
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-wrap: break-word;
  overflow: hidden;
  font-family: roboto, sans-serif;
  margin-bottom: 0;
  line-height: 21px;
  min-height: 42px;
  color: var(--black);
}

.summary-video {
  font-size: 12px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-wrap: break-word;
  overflow: hidden;
  font-family: roboto, sans-serif;
  margin-bottom: 0;
  line-height: 18px;
  min-height: 54px;
  color: var(--gray);
}

.img-avatar {
  height: 36px;
  width: 36px;
  background-color: var(--red);
  border-radius: 50%;
  padding: 4px;
}

.author {
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  margin-bottom: 0;
  color: var(--black);
}

.date-video {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 0;
  color: var(--gray);
}

.youtube-btn {
  color: #1c1c1cc9;
  width: 68px;
  height: 48px;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.youtube-btn:hover {
  color: #ff0000;
}
</style>

