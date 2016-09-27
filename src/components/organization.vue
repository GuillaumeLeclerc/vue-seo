<template>
  <div></div>
</template>
<script>

import Writer from '../mixins/writer.js'

import _ from 'lodash'

export default {
  name: 'Organization',
  mixins: [Writer],
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
  computed: {
    keys () {
      const keys = {};
      if (this.enableWebsite) {
        keys.website = ['webInfo']
      }
      if (this.enableOrganization) {
        keys.organization = ['orgInfo']
      }
      return keys;
    },
    webInfo () {
      const data = {
        "name" : this.name,
        "url" : this.url,
        "image": this.logo
      }

      if (this.alternateName) {
        data.alternateName = this.alternateName;
      }

      return data;
    },
    orgInfo () {
      const data = {};

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
        data.contactPoint = this.contacts;
      }

      if (this.socialAccounts && this.socialAccounts.length > 0) {
        data.sameAs = this.socialAccounts;
      }

      return data;
    }
  }
}

</script>
