<template>
  <component v-if="dd.length > 0" v-for="current in val" :is="component" :value="current"></component>
</template>

<script>

import _ from 'lodash'
import {toWatch, get} from '../utils/store.js'

import Breadcrumbs from '../components/breadcrumbs.vue'
import Title from '../components/title.vue'
import Hreflang from '../components/hreflang.vue'
import VueStore from '../utils/vueStore.js'
import Meta from '../components/meta.vue'
import SeoImage from '../components/image.vue'

const emptyComponent = {
  _seo_displayer: {
    template: '<link src="Error: displayer for this key"></link>'
  },
  _seo_isKey: () => true
}

const supportedDisplayers = [
  Breadcrumbs,
  Title,
  SeoImage,
  Meta,
  Hreflang,
  emptyComponent
]

export default {
  props: {
    key: {
      type: String,
      required: true
    },
    policy: {
    }
  },

  data () {
    //find the component responsible for displaying the content
    this.component = VueStore.Vue.extend(_.find(supportedDisplayers, ({_seo_isKey: checker}) => {
      return checker(this.key);
    })._seo_displayer);

    return {
      dd: toWatch(this.key),
      val: this.computeVal(),
    }
  },

  ready () {
    this.$watch('dd', () => {
      console.log('ch');
    });
  },


  watch: {
    dd: {
      handler () {
        this.val = this.computeVal();
      },
      deep: true
    }
  },

  methods: {
    computeVal () {
      return get(this.key, this.policy);
    }
  },
}

</script>
