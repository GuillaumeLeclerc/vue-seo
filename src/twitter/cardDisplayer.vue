<template>
  <meta v-if="value.type" name="twitter:card" :content="value.type">
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
      return key === 'type';
    }
  }
</script>
