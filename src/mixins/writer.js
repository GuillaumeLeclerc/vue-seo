import StoreAcess from './storeAccess.js'
import _ from 'lodash'
export default {
  mixins: [StoreAcess],

  ready () {
    _.each(this.keys, (values) => {
      _.each(values, (toWatch) => {
        this.$watch(toWatch, this.save);
      });
    });
    this.save();
  },

  methods: {
    save () {
      _.each(this.keys, (propsToSave, key) => {
        const data = {};
        _.each(propsToSave, (prop) => {
          data[prop] = this[prop];
        });
        this.setInStore(key, data);
      });
    }
  },

  beforeDestroy () {
    _.each(this.keys, (props, key) => {
      this.removeFromStore(key);
    });
  }
}
