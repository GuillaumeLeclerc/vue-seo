<script>
  import StoreAccessor from '../mixins/storeAccess.js'
  import OptionAccessor from '../mixins/optionAccess.js'

  const key = 'image';

  var dTemplate = '<meta v-if="seoOptions.openGraph" property="og:image" :content="value.url"></meta>';
  dTemplate += '<meta v-if="value.width && seoOptions.openGraph" property="og:image:width" :content="value.width"></meta>';
  dTemplate += '<meta v-if="value.height && seoOptions.openGraph" property="og:image:height" :content="value.height"></meta>';

  const displayComponent = {
    mixins: [OptionAccessor],
    template: dTemplate,
    props: ['value'],
  }

  export default {
    replace: false,
    mixins: [StoreAccessor],
    _seo_isKey: (k) => k.startsWith(key),
    _seo_displayer: displayComponent,
    props: {
      url: {
        required: true,
        type: String
      },

      width: {
        required: false,
        type: String
      },

      height: {
        required: false,
        type: String
      }
    },
    methods: {
      getKey () {
        return key;
      },
      save ()  {
        this.setInStore(this.getKey(), {
          url: this.url,
          width: this.width,
          height: this.height
        });
      }
    },
    ready() {
      this.save();
      this.$watch('url', this.save);
      this.$watch('width', this.save);
      this.$watch('height', this.save);
    },
    destroyed () {
      this.removeFromStore(this.getKey());
    }
  }

</script>
