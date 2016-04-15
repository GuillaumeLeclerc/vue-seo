// We can set the policies for a given key in vue-seo
//
// The available policies are
//
// - VueSEO.policies.last - (default) - take the last defined value
// - VueSEO.policies.first - take the first defined value
// - VueSEO.policies.join(glue, reversed) - join all defined values using the glue and potentially reverse the order of values
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

