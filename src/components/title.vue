<script>
  import StoreAccessor from '../mixins/storeAccess.js'
  import OptionsAccessor from '../mixins/optionAccess.js'
  import VueStore from '../utils/vueStore.js'
  const options = VueStore.options;


  const key = 'title';

  var displayerTemplate = '<title>{{value}}</title>';
  displayerTemplate += '<seo-meta v-if="seoOptions.openGraph" property="og:title" :content="value"></seo-meta>';

  const displayComponent = {
    mixins: [OptionsAccessor],
    template: displayerTemplate,
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
