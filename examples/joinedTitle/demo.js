// We can set the policies for a given key in vue-seo
//
// The available policies are available in the docs

Vue.use(VueSEO, {
  policies: {
    'title': VueSEO.policies.join(' - ', true)
  }
});

new Vue({
  el: 'body',
  data () {
    return {
      inner: false,
      inner2: false
    }
  }
})

