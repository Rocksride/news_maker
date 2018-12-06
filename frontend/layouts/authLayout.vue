<template>
  <section>
     <b-loading :is-full-page="true" :active="showLoader" :can-cancel="true"></b-loading>
    <nuxt />
  </section>
</template>

<script>
  export default {
    computed: {
      showLoader() {
        return this.$store.getters.loaderVisibility
      }
    }
  }
</script>
<style lang='scss'>
 @import '@/assets/scss/main.scss';
</style>