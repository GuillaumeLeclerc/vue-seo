import Head from './components/head.vue'
import Title from './components/title.vue'
import Organization from './components/organization.vue'
import Breadcrumb from './components/breadcrumbs.vue'
import VueStore from './utils/vueStore.js'
import Type from './components/type.vue'
import Lang from './components/lang.vue'
import Description from './components/description.vue'
import SeoImage from './components/image.vue'
import AutoLang from './components/autoLang.vue'
import TwitterCard from './components/twitterCard.vue'
import {policies} from './utils/store.js'
import Google from './google/displayer.vue'
import OpenGraph from './openGraph/displayer.vue'
import Twitter from './twitter/displayer.vue'
import Middlewares from './middlewares/displayer.vue'
import _ from 'lodash'
import {notify as urlChangedNotify} from './utils/urlChanged.js'

module.exports = {
  policies,
  install (Vue, options = {}) {

    const titleChild = document.head.childNodes;
    const originalTitle = _.find(titleChild, (el) => {
      return el.tagName === 'TITLE';
    });
    if (originalTitle) {
      document.head.removeChild(originalTitle);
    }
    VueStore.Vue = Vue;
    _.merge(VueStore.options, {
      openGraph: true,
      html: true,
      schemaOrg: true,
    },options, {
      policies: {
        breadcrumbs: policies.identity,
        'lang': policies.repeat,
        'image': policies.repeat
      }
    });

    Vue.component('seoTitle', Title);
    Vue.component('seoOrganization', Organization);
    Vue.component('seoBreadcrumb', Breadcrumb);
    Vue.component('seoImage', SeoImage);
    Vue.component('seoType', Type);
    Vue.component('seoLang', Lang);
    Vue.component('seoDescription', Description);
    Vue.component('seoAutoLang', AutoLang);
    Vue.component('seoTwitterCard', TwitterCard);

    Head.el = 'head'
    Head.comps.push(Vue.extend(Google));
    Head.comps.push(Vue.extend(OpenGraph));
    Head.comps.push(Vue.extend(Twitter));
    Head.comps.push(Vue.extend(Middlewares));
    new Vue(Head);
  },
  urlChangedNotify
}
