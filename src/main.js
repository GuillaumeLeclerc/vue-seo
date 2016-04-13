import Head from './components/head.vue'
import Title from './components/title.vue'
import Hreflang from './components/hreflang.vue'
import Organization from './components/organization.vue'
import Breadcrumb from './components/breadcrumbs.vue'
import VueStore from './utils/vueStore.js'
import Meta from './components/meta.vue'
import {policies} from './utils/store.js'
import _ from 'lodash'
module.exports = {
  policies,
  install (Vue, options = {}) {
    VueStore.Vue = Vue;
    _.merge(Head._seo_opts, options, {
      policies: {
        breadcrumbs: policies.identity
      }
    });

    Vue.component('seoTitle', Title);
    Vue.component('seoOrganization', Organization);
    Vue.component('seoBreadcrumb', Breadcrumb);
    Vue.component('seoMeta', Meta);
    Vue.component('seoHreflang', Hreflang);

    Head.el = 'head'
    new Vue(Head);
  }
}
