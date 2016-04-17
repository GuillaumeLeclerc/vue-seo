<template>
  <link rel="alternate" :hreflang="value.code" :href="value.url"></link>
</template>

<script>
  export default {
    props: {
      value: {
        required: true,
        type: Object
      }
    },

    wantsKey (key) {
      return key === 'lang'
    }
  }
</script>
