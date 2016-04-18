<script>
  import Writer from '../mixins/writer.js'

  export default {
    mixins: [Writer],
    props: {
      langs: {
        type: Array,
        required: true
      },
      mode: {
        type: String, // either directory or domain
      },
      default: {
        type: String,
        required: false,
        default: null
      }
    },

    computed: {
      keys () {
        return {
          autoLang: ['langs', 'mode', 'default']
        }
      }
    }
  }
</script>
