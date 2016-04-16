<template>
  <slot></slot>
  <displayer
    v-for="key in allKeys"
    :key="key"
    :policy="policyForKey(key)"
  ></displayer>

  <seo-meta
    v-if="seoOptions.openGraph" 
    property="og:url"
    :content="href"
  ></seo-meta>

</template>

<script>
import {get, setKeysListener}  from '../utils/store.js'
import Displayer from './headDisplayer.vue'
import _ from 'lodash'
import LocationBar from 'location-bar'
import OptionAcessor from '../mixins/optionAccess.js'

const locationBar = new LocationBar()

export default {
  mixins: [OptionAcessor],
  replace:false,

  components: {
    Displayer
  },

  created () {
    locationBar.onChange((path) => {
      
    });
    setKeysListener((keys) => {
      this.allKeys = keys;
    });
  },

  data () {
    return {
      allKeys: [],
      href: window.location.href
    }
  },

  methods: {
    policyForKey (key) {
      if (_.has(this.seoOptions, 'policies') && _.has(this.seoOptions.policies, key)) {
        return this.seoOptions.policies[key]
      } else {
        return undefined;
      }
    }
  }

}
</script>
