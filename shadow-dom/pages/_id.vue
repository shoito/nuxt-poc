<template>
  <div class="container">
    <LeftSide :menuItems="menuItems" />
    <div id="main"></div>
    <RightSide :rightItems="rightItems" />

    <Wrapper id="inner-content" :template="innerContent" />
    <Wrapper id="inner-script" :template="innerScript" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Wrapper from "~/components/Wrapper.vue";
import LeftSide from "~/components/LeftSide.vue";
import RightSide from "~/components/RightSide.vue";
import { Context } from "@nuxt/types";

@Component({
  components: {
    Wrapper,
    LeftSide,
    RightSide
  },
  async asyncData(ctx: Context): Promise<any> {
    return {
      menuItems: [
        { label: "メニュー0", to: "0" },
        { label: "メニュー1", to: "1" }
      ],
      rightItems: [{ label: "アイテム1" }],
      innerContent: await (await fetch(
        `http://localhost:3000/${ctx.params.id}.html.tmpl`
      )).text(),
      innerScript: await (await fetch(
        `http://localhost:3000/${ctx.params.id}.js.tmpl`
      )).text()
    };
  }
})
export default class PageIndex extends Vue {
  mounted() {
    const contentNode = document.querySelector(
      "#inner-content template"
    ) as HTMLTemplateElement;

    const scriptNode = document.querySelector(
      "#inner-script template"
    ) as HTMLTemplateElement;

    const shadowRoot = document
      .querySelector("#main")!
      .attachShadow({ mode: "open" });
    shadowRoot.appendChild(contentNode.content);

    const src = document.createElement("script");
    src.textContent = scriptNode.content.textContent;
    shadowRoot.appendChild(src);
    // Shadow DOMにscript追加してもCSSと違いglobalになるので、documentを差し替えて操作する。
    // const _document = document.querySelector("#main").shadowRoot;
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  text-align: center;
}
</style>
