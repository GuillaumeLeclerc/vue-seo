<template>
  <meta property="description" :content="value.value">
</template>

<script>
  export default {
    name: 'DescriptionDisplayer',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    wantsKey (key) {
      return key === 'description';
    }
  }
</script>
