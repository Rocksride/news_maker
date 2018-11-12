<template>
    <nuxt-link  class="link" v-bind='$attrs'>
    <span class="border l"></span>
    <span class="border t"></span>
    <span class="border r"></span>
    <span class="border b"></span>
    <slot></slot>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'borderedLink'
  }
</script>
<style lang="scss" scoped>

  .link {
    // overflow: hidden;
    box-sizing: border-box;
    position: relative;
    margin: 0;
    color: #202020;
    font-size: 23px;
  /*   font-weight: 700; */
    letter-spacing: 5px;
    text-decoration: none;
    padding: 1.4rem 1.6rem;
    display: inline-block;
    width: 80%;
    display: flex;
    transition: all .4s ease;
    // transition-delay: .2s;
    align-items: center;
   justify-content: center;
   white-space: nowrap;
  }
  .link:hover {
    // background-color: $color-secondary;
    // letter-spacing:6px;
  }
  .link .border {
    display: inline-block;
    position: absolute;
    background-color: #202020;
    transition: all .4s ease;


  }
  .l {
    top: 0;
    transform: scale(0);
    left: 0;
    width: 1px;
    height: 100%;
    transform-origin: top;
  }
  .r {
    top: 0;
    transform: scale(0);
    left: calc(100% - 1px);
    width: 1px;
    height: 100%;
    transform-origin: bottom;

  }
  .t {
    top: 0;
    transform: scale(0);
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: right;

  }
  .b {
    top: calc(100% - 1px);
    transform: scale(0);
    left: 0;
    width: 100%;
    height: 1px;
    transform-origin: left;

  }
  .link:hover .l {
    // transform: translateY(-100%);
    transform: scaleY(1.001);
    transform-origin: bottom;
  }
  .link:hover .r {
    // transform: translateY(100%);
    transform: scaleY(1.001);
    transform-origin: top;
  }
  .link:hover .b {
    // transform: translateX(-100%);
    transform: scaleX(1.001);
    transform-origin: right;
  }
  .link:hover .t {
      // transform: translateX(100%);
    transform: scaleY(1.001);
    transform-origin: left;
  }
</style>
