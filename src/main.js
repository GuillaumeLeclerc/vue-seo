import Head from './components/head.vue'
import Title from './components/title.vue'
import Organization from './components/organization.vue'
import Breadcrumb from './components/breadcrumbs.vue'
import VueStore from './utils/vueStore.js'
import Meta from './components/meta.vue'
import {policies} from './utils/store.js'
import merge from 'lodash'
export default {
  policies,
  install (Vue, options = {}) {
    VueStore.Vue = Vue;
    _.merge(Head._seo_opts, options, {
      policies: {
        breadcrumbs: policies.identity
      }
    });
    Vue.component('head', Head);
    Vue.component('seoTitle', Title);
    Vue.component('seoOrganization', Organization);
    Vue.component('seoBreadcrumb', Breadcrumb);
    Vue.component('seoMeta', Meta);
  }
}
