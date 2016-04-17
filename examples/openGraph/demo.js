// With this option set to true open graph meta tags will be added automatically
// according to the data you already provide to vue-seo
Vue.use(VueSEO, {
  policies: {
    title: VueSEO.policies.join(' - ', true)
  }
});

new Vue({
  el: 'body',
})

