<script>
  import Writer from '../mixins/writer.js'

  export default {
    mixins: [Writer],
    props: {
      property: {
        required: true,
        type: String
      },

      content: {
        required: true,
        type: String
      }
    },
    created () {
      this.propsToSave = [
        'property',
        'content'
      ]
    },
    methods: {
      getKey () {
        return 'meta-' + this.property;
      },
    },
  }

</script>
