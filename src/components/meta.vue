<script>
  import StoreAccessor from '../mixins/storeAccess.js'

  const key = 'meta';

  const displayComponent = {
    template: '-{{ value.json }}-<meta :property="value.property" :content="value.content"></meta>',
    props: ['value'],
  }

  export default {
    mixins: [StoreAccessor],
    _seo_isKey: (k) => k.startsWith(key),
    _seo_displayer: displayComponent,
    props: {
      property: {
        required: true,
        type: String
      },

      content: {
        required: true,
        type: String
      }
    },
    methods: {
      getKey () {
        return key + '-' + this.property;
      },
      save ()  {
        this.setInStore(this.getKey(), {
          property: this.property,
          content: this.content
        });
          
      }
    },
    ready() {
      this.save();
      this.$watch('property', this.save);
      this.$watch('content', this.save);
    },
    destroyed () {
      this.removeFromStore(this.getKey());
    }
  }

</script>
