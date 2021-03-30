<template>
  <div class="telunjukSearch">
    <div class="telunjukSearch__backdrop">
      <t-serach-header @backAction="$emit('backAction')" />
      <div class="container">
        <div class="mt-16px">
          <p class="telunjukSearch__backdrop-title">
            Riwayat pencarianmu
            <span @click="seeMore" class="float-right text-primary-red">
              {{textSeeMore}}
            </span>
          </p>
          <div v-for="(text, index) in latest.slice(0, limit)" :key="index" class="mt-16px">
            <font-awesome-icon :icon="['fas', 'clock']" aria-hidden="true" tabindex="-1" size="sm" fixed-width :style="{ color: '#707070' }"/>
            {{text}}
            <div class="float-right">
              <font-awesome-icon :icon="['fas', 'times']" aria-hidden="true" v-on:click="deleteHistory(index)" tabindex="-1" size="lg" fixed-width :style="{ color: '#000000' }"/>
            </div>
          </div>
          <div class="mt-32px">
            <p class="telunjukSearch__backdrop-title mb-0">Paling banyak dicari</p>
            <div class="row">
              <div v-for="(item, index) in mostSearch" :key="index" :class="index % 2 === 0 ? 'pr-0' : 'pl-0'" class="col-6 d-inline mt-16px">
                <div :class="index % 2 === 0 ? 'mr-4px' : 'ml-4px'" class="card p-1">
                  <div class="row">
                    <div class="col-4 pr-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" display="inline" viewBox="0 0 39 39">
                        <rect id="Background_Image" data-name="Background Image" width="39" height="39" rx="8" fill="#e4e4e4"/>
                      </svg>
                    </div>
                    <div class="col-6 pr-0 text-truncate">
                      <span class="fs-12px font-weight-bold">{{item.name}}</span>
                      <div class="fs-10px">{{item.total}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components:{
    tSerachHeader: ()=> import('./t-search-header')
  },
  data: ()=>{
    return{
      latest: ['Samsung Galaxy S20', 'HRS Velg', 'Kiwami Velg', 'United Bike', 'Win Cycle', 'Bom Bom Car', 'Yamaha Guitar'],
      mostSearch: [
        {
          name: 'Vans Old Skool',
          total: '1.4rb Produk'
        },
        {
          name: 'iPhone 11 Max Pro',
          total: '1.4rb Produk'
        },
        {
          name: 'Samsung Galaxy A51',
          total: '1.4rb Produk'
        },
        {
          name: 'Kiwami Velg',
          total: '1.4rb Produk'
        },
        {
          name: 'HRS Velg',
          total: '1.4rb Produk'
        },
        {
          name: 'Vans Slip On OG Blogspot',
          total: '1.4rb Produk'
        },
        {
          name: 'Xiaomi Redmi Note 9 pro',
          total: '1.4rb Produk'
        },
        {
          name: 'Macbook Air 2020',
          total: '1.4rb Produk'
        }
      ],
      limit: 4,
    }
  },
  methods:{
    deleteHistory(val){
      this.latest.splice(val, 1);
    },
    seeMore(){
      if(this.limit === 4){
        this.limit = this.latest.length;
      }else{
        this.limit = 4;
      }
    }
  },
  computed:{
    textSeeMore(){
      return this.limit === 4 ? 'Lihat Semua' : 'Sembunyikan';
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/styles/scss/_helper";
.telunjukSearch{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: block;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
  overflow-y: auto;
  font-family: var(--font-default);

  &__backdrop{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #ffffff;
    &-title{
      font-size: 14px;
      font-weight: bold;
    }
  }
}

</style>
