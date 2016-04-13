<template>
  {{dd | json}}
  <component v-if="dd.length > 0" :is="component" :value="val"></component>
</template>

<script>

import _ from 'lodash'
import {toWatch, get} from '../utils/store.js'

import Breadcrumbs from '../components/breadcrumbs.vue'
import Title from '../components/title.vue'
import Hreflang from '../components/hreflang.vue'
import VueStore from '../utils/vueStore.js'
import Meta from '../components/meta.vue'

const emptyComponent = {
  _seo_displayer: {
    template: '<link></link>'
  },
  _seo_isKey: () => true
}

const supportedDisplayers = [
  Breadcrumbs,
  Title,
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
