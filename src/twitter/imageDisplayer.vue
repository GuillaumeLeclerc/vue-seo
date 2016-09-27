<template>
  <meta property="twitter:image" :content="value.url">
</template>

<script>
  export default {
    name: 'TwitterImageDisplayer',

    props: {
      value: {
        type: Object,
        required: true
      }
    },

    wantsKey (key) {
      return key === 'image';
    }
  }
</script>
