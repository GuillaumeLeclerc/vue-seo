<script>
  import _ from 'lodash'
  import Writer from '../mixins/writer.js'

  export default {
    name: 'Breadcrumbs',
    mixins: [Writer],
    props: {
      position: {
        required: false,
        type: Number
      },
      url: {
        required: true,
        type: String
      },
      name: {
        required: true,
        type: String
      }
    },
    computed: {
      keys () {
        return {
          'breadcrumbs': ['position', 'url', 'name']
        }
      }
    }
  }

</script>
