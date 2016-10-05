<template>
  <slot></slot>
  <component
    v-for="possib in cartesian"
    :key="possib.key"
    :policy="policyForKey(possib.key)"
    :is="possib.comp"
  ></component>
</template>

<script>
import {setKeysListener}  from '../utils/store.js'
import OptionAccessor from '../mixins/optionAccess.js'
import Writer from '../mixins/writer.js'
import UrlChange from '../utils/urlChanged.js'
import _ from 'lodash'

const comps = []

export default {
  name: 'Head',
  mixins: [OptionAccessor, Writer],
  replace:false,
  comps,

  created () {
    setKeysListener((keys) => {
      this.allKeys = keys;
    });
    const update = () => {
      this.href = window.location.href;
    }
    UrlChange(update);
  },

  data () {
    return {
      allKeys: [],
      href: window.location.href
    }
  },

  computed: {
    keys() {
      return {
        href: ['href']
      }
    },
    cartesian () {
      return _.flatten(_.map(this.allKeys, (key) => {
        return _.map(comps, comp => {
          return {
            key,
            comp
          }
        });
      }));
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
