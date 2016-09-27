<template>
  <meta :property="property" :content="value.code">
</template>

<script>

  export default {
    name: 'OGLangDisplayer',

    props: {
      value: {
        required: true,
        type: Object
      }
    },

    computed: {
      property () {
        if (this.value.current) {
          return 'og:locale';
        } else {
          return 'og:locale:alternate';
        }
      }
    },

    wantsKey (key) {
      return key === 'lang'
    }
  }

</script>
