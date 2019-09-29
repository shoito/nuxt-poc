<template>
  <div class="side">
    <p>LeftSide</p>
    <ul class="nav-list">
      <li v-for="(item, index) in menuItems" v-bind:key="index">
        <a :href="item.to">{{ item.label }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

export type MenuItem = {
  label: String;
  to: String;
};

@Component({})
export default class LeftSide extends Vue {
  @Prop({ type: Array, default: () => [] })
  menuItems!: MenuItem[];
}
</script>

<style>
.side {
  min-width: 32vh;
}
</style>
