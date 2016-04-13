<script>
  import StoreAccessor from '../mixins/storeAccess.js'

  const key = 'title';

  const displayComponent = {
    template: '<title>{{value}}</title>',
    props: ['value'],
  }

  export default {
    mixins: [StoreAccessor],
    _seo_isKey: (k) => k === key,
    _seo_displayer: displayComponent,
    props: {
      value: {
        required: true,
        type: String
      }
    },
    ready() {
      this.setInStore(key, this.value)
    },
    watch: {
      value () {
        this.setInStore(key, this.value)
      }
    },
    destroyed () {
      this.removeFromStore(key);
    }
  }

</script>
