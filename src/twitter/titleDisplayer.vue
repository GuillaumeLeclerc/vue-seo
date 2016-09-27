<template>
  <meta name="twitter:title" :content="value.value">
</template>

<script>
  export default {
    name: 'TwitterTitleDisplayer',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    wantsKey (key) {
      return key === 'title';
    }
  }
</script>
