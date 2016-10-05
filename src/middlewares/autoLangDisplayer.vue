<template>
  <seo-lang v-for="lang in langs" :code="lang.code" :url="lang.url" :current="lang.current"></seo-lang>
</template>

<script>
  import _ from 'lodash'
  import langCodes from 'iso-639-1'
  import UrlChanged from '../utils/urlChanged.js'

  const domainGenerator = (code, def) => {
    const host = window.location.hostname;
    const hostParts = host.split('.');
    const first = hostParts[0];
    let curr = null;
    if (langCodes.validate(first)) {
      curr = hostParts.shift();
    }
    hostParts.unshift(code);
    const current = (curr === null) ? code === def : code === curr;
    if (hostParts[0] === def) {
      hostParts.shift();
    }
    return {
      url: window.location.href.replace(host, hostParts.join('.')),
      current,
      code
    };
  }

  const dirGenerator = (code, def) => {
    throw "Not Implemented";
  }

  export default {
    name: 'AutoLangDisplayer',
    props: {
      value: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        langs: []
      };
    },
    ready () {
      const recomp = this.compute.bind(this);
      UrlChanged(recomp);
      this.$watch('value', recomp, {
        deep: true
      });
      recomp();
    },
    methods: {
      compute () {
        const allLangs = this.value.langs;
        let generator = null;
        switch (this.value.mode) {
          case 'domain':
            generator = domainGenerator;
            break;
          default:
            generator = dirGenerator;
        }
        this.langs = _.map(allLangs, (code) => {
          return generator(code, this.value.default)
        });
      }
    },
    wantsKey (key) {
      return key === 'autoLang';
    }
  }
</script>
