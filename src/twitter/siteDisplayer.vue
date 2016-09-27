<template>
  <meta name="twitter:site" :content="value.site">
</template>

<script>
  export default {
    name: 'TwitterSiteDisplayer',

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
