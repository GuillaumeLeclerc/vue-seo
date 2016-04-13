<script>
  import StoreAccessor from '../mixins/storeAccess.js'

  const key = 'hreflang';

  const displayComponent = {
    template: '<link rel="alternate" :hreflang="value.lang" :href="value.url"></meta>',
    props: ['value'],
  }

  export default {
    replace: false,
    mixins: [StoreAccessor],
    _seo_isKey: (k) => k.startsWith(key),
    _seo_displayer: displayComponent,
    props: {
      lang: {
        required: true,
        type: String
      },

      url: {
        required: true,
        type: String
      }
    },
    methods: {
      getKey () {
        return key + '-' + this.lang;
      },
      save ()  {
        this.setInStore(this.getKey(), {
          lang: this.lang,
          url: this.url
        });
      }
    },
    ready() {
      this.save();
      this.$watch('lang', this.save);
      this.$watch('url', this.save);
    },
    destroyed () {
      this.removeFromStore(this.getKey());
    }
  }

</script>
