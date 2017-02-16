<template v-if="dd.length > 0 && component">
     <component v-for="current in val" :is="component" :value="current"></component>
</template>

<script>

import _ from 'lodash'
import {toWatch, get} from '../utils/store.js'
import VueStore from '../utils/vueStore.js'


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
    return {
      dd: toWatch(this.key),
      val: this.computeVal(),
      component: null
    }
  },

  ready () {
    //find the component responsible for displaying the content
    const selectedComponent = _.find(this.supportedDisplayers, ({wantsKey: checker}) => {
      return checker(this.key);
    });


    if (selectedComponent)  {
      this.component = VueStore.Vue.extend(selectedComponent);
    } else {
      this.component = false;
    }
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
};

</script>
