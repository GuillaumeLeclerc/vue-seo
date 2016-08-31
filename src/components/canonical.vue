<script>
  import Writer from '../mixins/writer.js'

  export default {
    mixins: [Writer],
    props: {
      value: {
        type: String,
        required: false
      }
    },
    computed: {
      keys () {
        return {
          canonical: ['value']
        };
      }
    }
  }

</script>
