<template>
  <div class="pl-6px">
    <a v-for="list in lists" :key="list.id" :href="list.link" class="small-nav-link">
<!--      <i :class="list.icon" aria-hidden="true"></i>-->
      <font-awesome-icon :icon="getPrefixAndIcon(list.icon)"/>
      <span>{{ list.label }}</span>
    </a>
  </div>
</template>

<script>
import fontAwesome from "@/mixins/font-awesome";
export default {
  name: "smallNavbarList",
  props: {
    lists: {
      type: Array,
      required: true,
    },
  },
  mixins: [fontAwesome]
};
</script>


<style scoped>
.small-nav-link {
  color: var(--black);
  margin-left: 1em;
  margin-right: 1em;
  font-family: var(--font-default);
  transition: 0.2s opacity ease;
}
.small-nav-link:first-child {
  margin-left: 0;
}
.small-nav-link:last-child {
  margin-right: 0;
}

.small-nav-link > span {
  margin-left: 0.5em;
}
.small-nav-link:hover {
  text-decoration: none;
  color: var(--red);
}

.pl-6px {
  padding-left: 6px;
}
</style>
