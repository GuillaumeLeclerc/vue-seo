<template>
  <meta name="twitter:card" :content="value.type">
</template>

<script>
  export default {
    name: 'TwitterCardDisplayer',

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
