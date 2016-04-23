<template>
  <meta property="og:site_name" :value="value.orgInfo.name">
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
      return key === 'organization'
    }
  }
</script>
