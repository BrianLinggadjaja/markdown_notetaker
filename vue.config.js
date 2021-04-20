module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/scss/_helpers.scss";
          @import "@/scss/_variables.scss";
        `
      }
    }
  }
}
