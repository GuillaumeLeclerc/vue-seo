<script>

  import JsonLD from '../mixins/ldDisplayer.js'
  import _ from 'lodash'

  const header = {
    "@context": "http://schema.org",
    "@type": "Organization"
  };

  export default {
    name: 'OrganizationDisplayer',

    mixins: [JsonLD],
    props: {
      value: {
        require: true,
        type: Object
      }
    },

    computed: {
      ld () {
        const data =  _.merge(header,  this.value.orgInfo);
        data.contactPoint = _.each(data.contactPoint, (o) => {
          o["@type"] = "ContactPoint"
        });
        return data;
      }
    },

    wantsKey (key) {
      return key === 'organization'
    }
  }
</script>
