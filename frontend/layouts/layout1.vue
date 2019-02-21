<template>
  <div class='layout'>
    <NotificationBar />
    <TheNavbar />
    <b-loading :is-full-page="true" :active="showLoader" :can-cancel="true"></b-loading>
    <TheLinesGrid />
    <nuxt />
  </div>
</template>

<script>

// import renderTranslateMixin from '@/mixins/renderTranslateMixin.js'
import NotificationBar from '@/components/NotificationBar.vue'
import TheNavbar from '@/components/TheNavbar'
import TheLinesGrid from '@/components/TheLinesGrid'
export default {
  components: {
    TheNavbar,
    NotificationBar,
    TheLinesGrid
  },
  computed: {
    showLoader() {
      return this.$store.getters.loaderVisibility
    }
  }
  // mixins: [renderTranslateMixin]
}
</script>

<style lang="scss">
  .layout {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }

</style>
