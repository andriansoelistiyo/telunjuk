<template>
  <div>
    <b-tabs nav-class="bottom-line my-16px fs-14px flex-mobile" active-nav-item-class="active" lazy>
      <b-tab v-for="item in items" :key="item.id" :title="item.tabName" active title-link-class="nav-link">
        <b-card-text>{{item.tabContent}}</b-card-text>
      </b-tab>
    </b-tabs>
<!--    <ul :class="[-->
<!--      'nav bottom-line my-16px flex-mobile',-->
<!--      fullwidth === 'fullwidth' ? 'nav-justified' : ''-->
<!--    ]">-->
<!--      <li v-for="item in items" :key="item.id"  class="nav-item fs-14px text-center ">-->
<!--        <a :class="item.tabClass" :id="item.tabId + 'tab'" data-toggle="tab"  :href="`#${item.tabId}`">{{ item.tabName }}</a>-->
<!--      </li>-->
<!--    </ul>-->

<!--    <div class="tab-content" id="myTabContent">-->
<!--      <div v-for="item in items" :key="item.id" class="[tab-pane fade, ]" :id="item.tabId" role="tabpanel" aria-labelledby="home-tab">-->
<!--        ...-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script>
export default {
    name: "tBanner",
    props: {
        items: {
            type: Array,
            required: true,
        },
        fullwidth: String,
    }
}
</script>

<style scoped>
.nav-item a {
    color: var(--gray);
    font-weight: 500;
}

.nav-item .active {
    color: var(--red);
    border-bottom: 2px solid var(--red);
    font-weight: 500;
}

.bottom-line {
    border-bottom: 1px solid var(--light-gray);
}


</style>

<style scoped lang="scss">
@import "assets/styles/scss/_helper";
@import "assets/styles/scss/_badge";


</style>
