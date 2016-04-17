<script>
  import Writer from '../mixins/writer.js'

  export default {
    mixins: [Writer],
    props: {
      code: {
        type: String,
        required:true
      },
      url: {
        type: String,
        required: false
      },
      current: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      keys () {
        return {
          lang: ['code', 'url', 'current']
        };
      }
    }
  }

</script>
