<template>
  <div class='layout'>
    <TheNavbar />
    <div class="lines">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
      <div class="line line-4"></div>
    </div>
    <nuxt />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
export default {
  components: {
    TheNavbar
  }
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
    width: 100%;
    // width: calc(100% - $sidebarWidth);
    position: fixed;
    top: 0;
    left: $sidebarWidth;
    display: flex;
    align-items: center;
    justify-content: center;

  }
    .line {
      z-index: 1000;
      position: absolute;
      width: 1px;
      // width: 20%;
      height: 100%;
      background-color: lavender;
    }
    @for $i from 1 through 5 {
    .line-#{$i} {
      left: $i * $sidebarWidth;
    }
  }

</style>
