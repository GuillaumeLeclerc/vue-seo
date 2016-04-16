import Head from './components/head.vue'
import Title from './components/title.vue'
import Hreflang from './components/hreflang.vue'
import Organization from './components/organization.vue'
import Breadcrumb from './components/breadcrumbs.vue'
import VueStore from './utils/vueStore.js'
import Meta from './components/meta.vue'
import SeoImage from './components/image.vue'
import {policies} from './utils/store.js'
import _ from 'lodash'

module.exports = {
  policies,
  install (Vue, options = {}) {
    VueStore.Vue = Vue;
    _.merge(VueStore.options, {
      openGraph: true,
      html: true,
      schemaOrg: true,
    },options, {
      policies: {
        breadcrumbs: policies.identity,
        'meta-og:locale:alternate': policies.repeat,
        'image': policies.repeat
      }
    });

    Vue.component('seoTitle', Title);
    Vue.component('seoOrganization', Organization);
    Vue.component('seoBreadcrumb', Breadcrumb);
    Vue.component('seoMeta', Meta);
    Vue.component('seoHreflang', Hreflang);
    Vue.component('seoImage', SeoImage);

    Head.el = 'head'
    new Vue(Head);
  }
}
