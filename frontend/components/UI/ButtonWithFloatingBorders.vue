<template>
    <a href="#" class="button">
      <span class="border l"></span>
      <span class="border t"></span>
      <span class="border r"></span>
      <span class="border b"></span>
      <slot>Add some text</slot>
    </a>
</template>

<script>
export default {
  name: 'button-with-borders'
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  $main-color: green;
  $color-primary: lighten($main-color, 20%);
  $color-secondary: darken($main-color, 10%);

  a {
    // border: 0.5px dashed white;
    // overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    color: ivory;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 7px;
    text-decoration: none;
    padding: 24px 26px;
    position: absolute;
    display: inline-block;
    display: flex;
    background-color: var(--c-background-dark);
    transition: all .4s ease;
    // transition-delay: .2s;
  /*   align-items: center; */
  /*   justify-content: center; */
  }
  a:hover {
    // background-color: $color-secondary;
    letter-spacing:8px;
  }
  .button .border {
    display: inline-block;
    position: absolute;
    background-color: ivory;
    transition: all .3s ease;


  }
  .l {
    top: 0;
    transform: scale(0);
    left: 0;
    width: 2px;
    height: 100%;
    transform-origin: top;
  }
  .r {
    top: 0;
    transform: scale(0);
    left: calc(100% - 2px);
    width: 2px;
    height: 100%;
    transform-origin: bottom;

  }
  .t {
    top: 0;
    transform: scale(0);
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: right;

  }
  .b {
    top: calc(100% - 2px);
    transform: scaleX(0);
    left: 0;
    width: 100%;
    height: 2px;
    transform-origin: left;

  }
  .button:hover .l {
    // transform: translateY(-100%);
    transform: scaleY(1);
    transform-origin: bottom;
  }
  .button:hover .r {
    // transform: translateY(100%);
    transform: scaleY(1);
    transform-origin: top;
  }
  .button:hover .b {
    // transform: translateX(-100%);
    transform: scaleX(1);
    transform-origin: right;
  }
  .button:hover .t {
      // transform: translateX(100%);
    transform: scaleY(1);
    transform-origin: left;
  }
</style>

