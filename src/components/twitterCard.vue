<script>
  import Writer from '../mixins/writer.js'

  export default {
    name: 'SeoTwitterCard',

    mixins: [Writer],

    props: {
      type: {
        type: String,
        required: true
      },

      site: {
        type: String,
        required: true
      }
    },

    computed: {
      keys () {
        return {
          card: ['type', 'site']
        }
      }
    }
  }
</script>
