<template>
  <div>
    <seo-meta 
      v-if="seoOptions.openGraph"
      :property="ogProp"
      :content="lang"
    ></seo-meta>
  </div>
</template>

<script>
  import StoreAccessor from '../mixins/storeAccess.js'
  import OptionAccessor from '../mixins/optionAccess.js'

  const key = 'hreflang';

  const displayComponent = {
    template:  '<link rel="alternate" :hreflang="value.lang" :href="value.url"></meta>',
    props: ['value'],
  }

  export default {
    replace: false,
    mixins: [StoreAccessor, OptionAccessor],
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
      },

      current: {
        required: false,
        type: Boolean,
        default: false
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
    },
    computed: {
      ogProp () {
        if (this.current) {
          return 'og:locale'
        } else {
          return 'og:locale:alternate'
        }
      }
    }
  }

</script>
