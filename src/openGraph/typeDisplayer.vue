<template>
  <meta property="og:type" :content="value.value">
</template>

<script>
  export default {
    name: 'OGTypeDisplayer',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    wantsKey (key) {
      return key === 'type';
    }
  }
</script>
