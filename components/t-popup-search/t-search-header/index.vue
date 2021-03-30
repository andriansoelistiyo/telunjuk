<template>
  <div class="header-search">
    <div class="container">
      <div class="header-search__body">
        <div @click="backAction">
          <font-awesome-icon :icon="['fas', 'arrow-left']" aria-hidden="true" tabindex="-1" size="lg" fixed-width/>
        </div>
        <div class="header-search__body_searchBox ml-8px">
          <button  @click="showSearch" class="header-search__body_searchBox-searchBtn" aria-label="Justify">
            <font-awesome-icon :icon="['fas', 'search']" aria-hidden="true" tabindex="-1" size="lg"/>
          </button>
          <input
            ref="search"
            class="header-search__body_searchBox-Input"
            type="text"
            placeholder="Cari iPhone 11 Pro Max"
            v-model.trim="searchValue"
            @keyup.enter="showSearch"
          />
        </div>
        <div id="show-camera" @click="openCamera">
          <font-awesome-icon class="ml-8px" :icon="['fas', 'camera']" aria-hidden="true" tabindex="-1" size="lg" fixed-width/>
        </div>
        <b-modal id="show-camera" hide-footer>
          <div class="container">
            <video v-if="isCameraOpen && !isPhotoTaken" class="header-search__body-Video" ref="camera" autoplay></video>
            <canvas v-show="isPhotoTaken" class="header-search__body-Canvas" id="photoTaken" ref="canvas" :width="videoWidth" :height="videoHeight"></canvas>
          </div>
          <b-button class="mt-3" block @click="takePhoto">Take Photo</b-button>
          <b-button class="mt-3" block @click="closeCamera">Close</b-button>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data: () => {
    return {
      searchValue: "",
      isCameraOpen: false,
      isPhotoTaken: false,
      videoWidth: "",
      videoHeight: ""
    }
  },
  mounted() {
    this.$refs.search.focus();
  },
  methods:{
    showSearch() {
      if (this.searchValue !== "") {
        // console.log(`Redirect to: https://www.telunjuk.com/jual?q=${this.searchValue}`)
        window.location.href = `https://www.telunjuk.com/jual?q=${this.searchValue}`;
      } else {
        alert("Search value cannot be null!");
      }
    },
    backAction(){
      this.$emit('backAction')
    },
    openCamera(){
      this.isCameraOpen = true;
      this.$bvModal.show('show-camera');
      this.createCameraElement();
    },
    closeCamera(){
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.stopCameraStream();
      }
    },
    createCameraElement() {
      const constraints = (window.constraints = {
        audio: false,
        video: true
      });
      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
          this.$refs.camera.srcObject = stream;
        })
        .catch(error => {
          alert("May the browser didn't support or there is some errors.");
        });
        this.$nextTick(() => {
          setTimeout(()=>{
            this.videoWidth =  this.$refs.camera.clientWidth;
            this.videoHeight = this.$refs.camera.clientHeight;
          }, 1000)
        })
    },
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
      this.$bvModal.hide('show-camera')
    },
    takePhoto() {
      if(!this.isPhotoTaken) {
        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      // context.translate(100, 0);
      // context.scale(-1, 1);
      context.drawImage(this.$refs.camera, 0, 0, this.$refs.camera.clientWidth, this.$refs.camera.clientHeight);
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/styles/scss/_mixins";
.header-search {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: var(--gray);
  padding: 0.3em;
  height: 60px;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.12);

  &__body{
    @include align-center;

    &_searchBox {
      display: inline-block;
      background-color: #e4e4e4;
      width: 70vw;
      border-radius: 8px;
      height: 31px;
      @include align-center;

      &-searchBtn{
        background-color: transparent;
        border: none;
        outline: none;
        font-family: var(--font-default);
        transition: 0.2s all ease;

        &:hover {
          background-color: var(--light-gray);
        }
      }

      &-Input{
        background-color: transparent;
        border: none;
        outline: none;
        font-family: var(--font-default);
        font-size: 12px;
        flex: 1;
        padding: 0  0.5em 0  0.5em;
      }
    }

    &-Video{
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1041;
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    &-Canvas{
      transform: scaleX(-1);
    }
  }
}
</style>
