<template>
  <jsonld-writer :content="content"></jsonld-writer>
</template>

<script>

import JsonldWriter from './jsonldWriter.vue'
import _ from 'lodash'

export default {
  props: {
    url: String,
    logo: String,
    name: String,
    contacts: Array,
    socialAccounts: Array
  },
  components: {
    JsonldWriter
  },
  computed: {
    content () {
      const data = {
      "@context" : "http://schema.org",
      "@type" : "Organization",
      };

      if (this.url) {
        data.url = this.url;
      }

      if (this.name) {
        data.name = this.name;
      }

      if (this.logo) {
        data.logo = this.logo;
      }

      if (this.contacts && this.contacts.length > 0) {
        data.contactPoint = _.map(this.contacts, (contact) => {
          return _.assign({
            "@type" : "ContactPoint",
          }, contact)
        });
      }

      if (this.socialAccounts && this.socialAccounts.length > 0) {
        data.sameAs = this.socialAccounts;
      }

      return data;
    }
  }
}

</script>
