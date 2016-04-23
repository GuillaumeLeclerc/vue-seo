<template>
  <meta property="og:url" :content="value.href">
</template>
<script>
export default {
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
