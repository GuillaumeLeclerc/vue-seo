<template>
  <meta name="twitter:description" :content="value.value">
</template>

<script>
  export default {
    name: 'TwitterDescriptionDisplayer',

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
