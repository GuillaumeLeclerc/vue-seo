<script>
  import Writer from '../mixins/writer.js'

  export default {
    mixins: [Writer],
    props: {
      url: {
        required: true,
        type: String
      },

      width: {
        required: false,
        type: String
      },

      height: {
        required: false,
        type: String
      }
    },
    computed: {
      keys () {
        return {
          image: ['url', 'width', 'height']
        }
      },
    },
  }

</script>
