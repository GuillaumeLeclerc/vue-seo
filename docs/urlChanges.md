# Url changes

Some components such as `seo-auto-lang`, needs to know when the url change to update the content. If you use hashes there will no problem. But if you are using html5 history features then there is no event to listen that will tell the component when the url ha changed.

Since it's considered bad practise to just poll the content of the url bar regulary. We are giving you a way to warn `vue-seo` that the url has changed.

`VueSEO` is exposing a function you need to call when the url change

- __VueSEO.urlChangedNotify__

## Example (with vue-router)

```javascript

import Vue from 'vue'
import VueSEO from 'vue-seo'
import Router form 'vue-router'

Vue.use(Router)
Vue.use(VueSEO)

const router = new Router({
  history: true
})

router.afterEach(function() {
  VueSEO.urlChangedNotify()
})
```
