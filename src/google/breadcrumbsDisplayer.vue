<script>

  import JsonLD from '../mixins/ldDisplayer.js'
  import _ from 'lodash'

  const header = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList"
  };

  export default {
    mixins: [JsonLD],
    props: {
      value: {
        require: true,
        type: Array
      }
    },

    computed: {
      ld () {
        const data = _.clone(header);
        data.itemListElement = _.map(this.value, (item, pos) => {
          return {
            "@type": "ListItem",
            "position": item.position || pos + 1,
            "item": {
              "@id": item.url,
              "name": item.name
            }
          }
        });
        return data;
      }
    },

    wantsKey (key) {
      return key === 'breadcrumbs'
    }
  }
</script>
