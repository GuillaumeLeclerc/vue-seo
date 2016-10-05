<template>
  <meta property="og:image" :content="value.url">
  <meta v-if="value.width" property="og:image:width" :content="value.width">
  <meta v-if="value.height" property="og:image:height" :content="value.height">
</template>
<script>

  export default {
    name: 'OGImageDisplayer',
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
