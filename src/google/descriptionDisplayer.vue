<template>
  <meta name="description" :content="value.value">
</template>

<script>
  export default {
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
