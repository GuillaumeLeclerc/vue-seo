<script>

  import JsonLD from '../mixins/ldDisplayer.js'
  import _ from 'lodash'

  const header = {
    "@context": "http://schema.org",
    "@type": "Website"
  };

  export default {
    name: 'WebsiteDisplayer',
    mixins: [JsonLD],
    props: {
      value: {
        require: true,
        type: Object
      }
    },

    computed: {
      ld () {
        const data =  _.merge(header,  this.value.webInfo);
        return data;
      }
    },

    wantsKey (key) {
      return key === 'website'
    }
  }
</script>
