<template>
  <meta v-if="value.value" name="twitter:card" :content="value.value">
  <meta v-else name="twitter:card" content="summary_large_image">
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
      return key === 'card';
    }
  }
</script>
