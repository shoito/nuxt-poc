module.exports = {
  head: {
    mode: "universal",
    render: {
      injectScripts: true
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/jquery.lazyload/1.9.1/jquery.lazyload.min.js"
      }
    ],
    link: [
      {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/static/favicon.ico"
      }
    ]
  },
  srcDir: ".",
  serverMiddleware: [],
  build: {},
  buildModules: ["@nuxt/typescript-build"],
  modules: ["@nuxtjs/axios"]
};
