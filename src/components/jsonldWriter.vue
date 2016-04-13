<template>
  <script type="application/ld+json" v-el:scr>
  </script>
</template>

<script>
  export default {

    props: {
      content: {
        required: true,
        type: Object
      }
    },

    ready() {
      const update = () => {
        this.$els['scr'].innerHTML = JSON.stringify(this.content);
      }

      this.$watch('content', update);
      update();
    }

  }

</script>
