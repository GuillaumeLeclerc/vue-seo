<script>
  import Writer from '../mixins/writer.js'

  export default {
    name: 'Type',

    mixins: [Writer],

    props: {
      value: {
        type: String,
        required: true
      }
    },

    computed: {
      keys () {
        return {
          type: ['value']
        }
      }
    }
  }

</script>
