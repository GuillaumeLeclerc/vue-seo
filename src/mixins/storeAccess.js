var lastAccessorId = 0;

import {set, remove} from '../utils/store.js'

export default {
  created () {
    this._seoaid = lastAccessorId++;
  },

  methods: {
    setInStore (key, value) {
      set(this._seoaid, key, value);
    },
    removeFromStore (key) {
      remove(this._seoaid, key);
    }
  }
}
