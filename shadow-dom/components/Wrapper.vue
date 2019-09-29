<template>
  <div v-html="template"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";

@Component({})
export default class Wrapper extends Vue {
  @Prop({ type: String, default: "" })
  template!: String;
}
</script>
