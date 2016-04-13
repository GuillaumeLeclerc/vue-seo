<template>
  <slot></slot>
  <displayer
    v-for="key in allKeys"
    :key="key"
    :policy="policyForKey(key)"
  ></displayer>

</template>

<script>
import {get, setKeysListener}  from '../utils/store.js'
import Displayer from './headDisplayer.vue'
import _ from 'lodash'

const options = {}
export default {
  replace:false,

  components: {
    Displayer
  },

  _seo_opts: options,

  created () {
    setKeysListener((keys) => {
      this.allKeys = keys;
    });
  },

  data () {
    return {
      allKeys: []
    }
  },

  methods: {
    policyForKey (key) {
      if (_.has(options, 'policies') && _.has(options.policies, key)) {
        return options.policies[key]
      } else {
        return undefined;
      }
    }
  }

}
</script>
