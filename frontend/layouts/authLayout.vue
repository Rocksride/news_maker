<template>
  <section>
     <NotificationBar />
     <b-loading :is-full-page="true" :active="showLoader" :can-cancel="true"></b-loading>
    <nuxt />
  </section>
</template>

<script>
  import NotificationBar from '@/components/NotificationBar.vue'
  export default {
    computed: {
      showLoader() {
        return this.$store.getters.loaderVisibility
      }
    },
    components: {
      NotificationBar
    }
  }
</script>
<style lang='scss'>
 @import '@/assets/scss/main.scss';
</style>