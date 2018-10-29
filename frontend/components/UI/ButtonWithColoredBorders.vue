<template>
  <a href="#" class="button">
    <span class="border l"></span>
    <span class="border t"></span>
    <span class="border r"></span>
    <span class="border b"></span>
    <slot>add text</slot>
  </a>
</template>

<style lang="scss" scoped>
  $delay-time: .2s;

  a {
    overflow: hidden;
    box-sizing: border-box;
    color: ivory;
    font-size: 20px;
  // /*   font-weight: 700; */
    letter-spacing: 7px;
    text-decoration: none;
    padding: 24px 26px;
    display: flex;
    background: #111;
    width: auto;
  }
  .button .border {
    display: inline-block;
    position: absolute;
  }
  .t {
    background-color: yellow;
    top: 0;
    transform: scale(0);
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: right;
      transition: all $delay-time linear;
  }
  .r {
    background-color: blueviolet;
    top: 0;
    transform: scale(0);
    left: calc(100% - 2px);
    width: 2px;
    height: 100%;
    transform-origin: top;
    transition: all $delay-time linear;
    transition-delay: $delay-time / 2 * 1;
  }
  .b {
    background-color: crimson;
    top: calc(100% - 2px);
    transform: scaleX(0);
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: left;
      transition: all $delay-time linear;
    transition-delay: $delay-time / 2 * 2;
  }
  .l {
    background-color: mintcream;
    top: 0;
    transform: scale(0);
    left: 0;
    width: 2px;
    height: 100%;
    transform-origin: bottom;
    transition: all $delay-time linear;
    transition-delay: $delay-time / 2 * 3;
  }
  .button:hover .l {
    transform: scale(2);
    transform-origin: bottom;
  }
  .button:hover .r {
    transform: scale(2);
    transform-origin: top;
  }
  .button:hover .b {
    transform: scale(2);
    transform-origin: right;
  }
  .button:hover .t {
    transform: scale(2);
    transform-origin: left;
  }
</style>
