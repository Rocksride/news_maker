<template functional>
  <div v-if='props.show'>
    <div class="backdrop"></div>
        <div class="wrapper" >
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
      <div class='hexagon'>
        <span></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $size: 150px;
  $circle-count: 50;
  $speed: 2.4s;
  $blendModes: (normal, multiply, screen, exclusion, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, saturation, color, luminocity);
  *,*:after,*:before{
    position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;
  }
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100vw;
    height: 100vh;
  }
  .wrapper {
    z-index: 200;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    // background-color: hsla(100, 100%, 50%, 0.5);
  }
  .hexagon{
    // mix-blend-mode: luminosity;
    width: $size;
    height: $size / 2;
    &, span,span:after,span:before{
      border-top-left-radius: $size;
      border-bottom-right-radius: $size;
    }
    span{
      animation: hexagon $speed linear infinite;
        background-image: url(https://www.freepngimg.com/thumb/newspaper/6-2-newspaper-png-clipart-thumb.png);

      &:after,&:before{
        content: '';
        background-color: currentColor;
        width: 15px;
        height: 15px;
        border-radius: 50%;
      }
      &:before{
        transform: translate($size / 2, -$size / 4);
      }
      &:after{
        transform: translate(-$size / 2, $size / 4);
      }
    }
    @for $i from 1 through $circle-count{
      &:nth-child(#{$i}){
        // $len: length($blendModes);
        // $index: $i % $len + 1;
        // $mode: nth($blendModes, $index);
        // mix-blend-mode: #{$mode};
        $color: $i * 360 / $circle-count;
        transform: rotate(-$i * 360deg / $circle-count) translate($size + 40px);
        color: hsla($color,100%,50%,1);
        span{
          animation-delay: -$i * $speed * 3 / $circle-count;
          background-color: hsla($color,100%,50%,0.5);
        }
      }
    }
  }
  @keyframes hexagon {
    100%{
      transform: rotate(360deg);

    }
  }
</style>
