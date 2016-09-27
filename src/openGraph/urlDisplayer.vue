<template>
  <meta property="og:url" :content="value.href">
</template>
<script>
export default {
  name: 'OGUrlDisplayer',

  props: {
    value: {
      required: true,
      type: Object
    }
  },

  wantsKey(key) {
    return key === 'href'
  }
}
</script>
