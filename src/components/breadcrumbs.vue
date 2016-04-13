<script>
  import _ from 'lodash'
  import StoreAccessor from '../mixins/storeAccess.js'
  import JsonldDisplayer from './jsonldWriter.vue'

  const key = 'breadcrumbs';

  const renderComponent = {
    template: '<jsonld-displayer :content="converted"></jsonld-displayer>',
    components: {JsonldDisplayer},
    props: ['value'],
    data () {
      return {
        converted: this.convert()
      };
    },
    watch: {
      value: {
         handler  () {
           this.converted = this.convert();
        }, deep: true
      }
    },
    methods : {
      convert () {
        return {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": _.map(this.value, (val, index) => {
            if (typeof val.position === 'undefined') {
              val.position = index + 1;
            }
            return val;
          })
        };
      }
    }
  }

  export default {
    mixins: [StoreAccessor],
    _seo_displayer: renderComponent,
    _seo_isKey (k) {
      return k === key;
    },
    props: {
      position: {
        required: false,
        type: Number
      },
      url: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String
      }
    },
    ready() {
      this.setInStore(key, this.description())
    },
    watch: {
      "description()" () {
        this.setInStore(key, this.description())
      }
    },
    destroyed () {
      this.removeFromStore(key);
    },
    methods : {
      description  () {
        return {
          "@type": "ListItem",
          "position": this.position,
          "item": {
            "@id": this.url,
            "name": this.name
          }
        }
      }
    }
  }

</script>
