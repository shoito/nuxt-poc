<template>
  <div class="side">
    <p>RightSide</p>
    <ul class="nav-list">
      <li v-for="(item, index) in rightItems" v-bind:key="index">{{ item.label }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

export type RightItem = {
  label: String;
};

@Component({})
export default class RightSide extends Vue {
  @Prop({ type: Array, default: () => [] })
  rightItems!: RightItem[];
}
</script>

<style>
.side {
  min-width: 32vh;
}
</style>