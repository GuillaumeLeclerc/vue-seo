<script>
  import Writer from '../mixins/writer.js'

  export default {
    mixins: [Writer],
    props: {
      value: {
        required: true,
        type: String
      }
    },
    computed: {
      keys () {
        console.log('hoho');
        return {
          description: ['value']
        }
      },
    },
  }

</script>
