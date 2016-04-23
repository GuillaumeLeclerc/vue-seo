<template>
  <div></div>
</template>
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
        return {
          title: ['value']
        }
      },
    },
  }

</script>
