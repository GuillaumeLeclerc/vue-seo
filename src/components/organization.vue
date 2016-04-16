<template>
  <div>
    <jsonld-writer v-if="enableOrganization" :content="orgInfo"></jsonld-writer>
    <jsonld-writer v-if="enableWebsite" :content="webInfo"></jsonld-writer>
    <seo-meta
      v-if="seoOptions.openGraph && name && name.length > 0"
      property="og:site_name"
      :content="name"
    ></seo-meta>
  </div>
</template>

<script>

import OptionAccessor from '../mixins/optionAccess.js'
import JsonldWriter from './jsonldWriter.vue'
import _ from 'lodash'

export default {
  mixins: [OptionAccessor],
  props: {
    url: String,
    logo: String,
    name: String,
    alternateName: String,
    contacts: Array,
    socialAccounts: Array,
    enableWebsite: {
      type: Boolean,
      required: false,
      default: true
    },
    enableOrganization: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  components: {
    JsonldWriter
  },
  computed: {
    webInfo () {
      const data = {
        "@context" : "http://schema.org",
        "@type" : "WebSite",
        "name" : this.name,
        "url" : this.url
      }
      
      if (this.alternateName) {
        data.alternateName = this.alternateName;
      }

      return data;
    },
    orgInfo () {
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
