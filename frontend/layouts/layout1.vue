<template>
  <div class='layout'>
    <TheNavbar />
    <div  class="lines ">
      <div  class="line  line-1"></div>
      <div  class="line  line-2"></div>
      <div  class="line  line-3"></div>
      <div  class="line  line-4"></div>
      <div  class="line  line-5"></div>
      <div  class="line  line-6"></div>
      <div  class="line  line-7"></div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import renderTranslateMixin from '@/mixins/renderTranslateMixin.js'
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    TheNavbar
  },
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
  .lines {
    z-index: -100;
    // background-color: grey;
    min-height: 100vh;
    height: 100%;
    width: calc(100vw - var(--sidebar-width));
    // width: calc(100% - $sidebarWidth);
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @include media($tablet) {
      // top: 60px;
      left: var(--sidebar-width);

    }

  }
    .line {
      z-index: 1000;
      position: absolute;
      width: 1px;
      // width: 20%;
      height: 100%;
      background-color: var(--c-delimiter);

      @include translateTransition;

      &.translated {
        left: 0;
        position: static;
      }

    }
    .line-1 {
      left: calc(var(--sidebar-width) * 1);
    }
    .line-2 {
      left: calc(var(--sidebar-width) * 2);
    }
    .line-3 {
      left: calc(var(--sidebar-width) * 3);
    }
    .line-4 {
      left: calc(var(--sidebar-width) * 4);
    }
    .line-5 {
      left: calc(var(--sidebar-width) * 5);
    }
    .line-6 {
      left: calc(var(--sidebar-width) * 6);
    }
    .line-7 {
      left: calc(var(--sidebar-width) * 7);
    }



</style>
