import VueStore from '../utils/vueStore.js'

export default {
  created () {
    this.seoOptions = VueStore.options;
  }
}
