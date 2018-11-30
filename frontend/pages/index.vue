<template>
  <section class='content-section'>
  <div class="row row-1">
    <div class="left flex-center-column">
      <div class="overflow-wrapper">
        <div ref='tr-1' class="text-wrapper translated">
          <UnderlineHeading  class='latest-news__heading heading'>Latest Articles</UnderlineHeading>
        </div>
        <div ref='tr-2' class="news-post  translated">
          <p class="news-post__info">10 14 2018 | BY VICTOR XING | CAPITAL MARKETS</p>
          <h3 class="news-post__title">
            Roundabout path in the snap-back of long-term bond yields
          </h3>
           <div class="button-wrapper">
          <!--    <BorderedLink style='font-size: 1rem' to='/news/:1'>READ THE POST</BorderedLink> -->
          <nuxt-link  to="/news/:1">
             <UnderlineHeading style='font-size: 1.8rem !important; color: var(--c-text-dark)'>Read the post</UnderlineHeading>
          </nuxt-link>
           </div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="image-wrapper">
        <div ref='tr-3' class="image translated"></div>
      </div>
    </div>
  </div>
  <div class="row row-2">
    <div class="left">
      <div class="image-wrapper">
        <div ref='tr-4' class="translated image"></div>
      </div>
    </div>
    <div class="right flex-center-column" style='align-items: flex-start'>
      <div class="overflow-wrapper">
        <div ref='tr-5' class="translated text-wrapper">
          <UnderlineHeading class='heading'>Tags</UnderlineHeading>
        </div>
      </div>
    </div>

  </div>
  <div class="row row-3">
    <div class="left flex-center-column" style='align-items: flex-start'>
      <div class="overflow-wrapper">
       <div ref='tr-6' class="translated text-wrapper">
          <UnderlineHeading  class='about heading'>About us</UnderlineHeading>
       </div>
      </div>
    </div>
    <div class="right">
      <div class="image-wrapper">
        <div ref='tr-7' class=" translated image"></div>
      </div>
    </div>
  </div>
  <footer class="footer flex-center">Awesome footer</footer>
</section>
</template>

<script>
  import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
  import BorderedLink from '@/components/UI/BorderedLink'
  import translateMixin from '@/mixins/translateMixin.js'
  export default {
    layout: 'layout1',
    components: {
      UnderlineHeading,
      BorderedLink
    },
    mixins: [translateMixin]
  }
</script>
<style lang='scss' scoped>
  .image {
    width: 100%;
    height: 100%;
  }
  .row {
    width: 100%;
    height: $sectionHeight;

    @include media($mSmall) {
      flex-direction: column;
    }

    @include media($tablet) {
      flex-direction: row !important;
    }
  }

  .row-1 {
    display: flex;
    
    @include media($mSmall) {
     flex-direction: column-reverse;
    }

    .button-wrapper {
      width: 30%;
    }
    .left {
      position: relative;


      @include media($laptop) {
        flex: 3;
        left: calc(var(--sidebar-width) / 2);
      }
      @include media($laptopL) {
        flex: 5;
        left: var(--sidebar-width);
      }
      
    }
    .right {
      flex: 3;
      @include media($laptop) {
        flex: 2;
      }
      .image {
        @include image('/static/img/gazets/gazet11.jpg');
      }
    }
    .text-wrapper {

      text-align: center;
      @include media($tablet) {
          text-align: left;
      }
      @include translateTransition;
      @include show;

      &.translated {
        @include hide;
        transform: translateY(-100%);
      }
    }

    .image {
      @include show;
      @include translateTransition;
      &.translated {
        transform: scale(0);
        transform-origin: top right;
        @include hide;
      }
    }
  }

  .row-2 {

    display: flex;

    .left {
      flex: 5;
      @include media($laptop) {
        flex: 3;
      }
      .image {
        @include image('/static/img/gazets/gazet13.jpg');
        @include show;
        @include translateTransition;

        &.translated {
          @include hide;
          transform: translateX(-100%);
        }
      }
    }
    .right {
      flex: 3;
      @include media($laptop) {
        flex: 2;
      }
      position: relative;
      .overflow-wrapper {
        position: absolute;

        @include media($tablet) {
          right: calc(var(--sidebar-width) / 2);
        }
        // right: 0;
      }
      // margin-left: calc(-1 * var(--sidebar-width) / 2);
    }
    .text-wrapper {
      text-align: center;
      @include media($tablet) {
          text-align: left;
      }
      @include show;
      @include translateTransition;
  
      &.translated {
        @include hide;
        transform: translateX(100%);
      }
    }
  }

  .row-3 {
    display: flex;
    
    @include media($mSmall) {
     flex-direction: column-reverse;
    }

    .left {
      position: relative;
      @include media($tablet) {
        left: var(--sidebar-width);
      }
      flex: 3;
      @include media($laptop) {
        flex: 2;
      }
    }
    .right {
      flex: 5;
      @include media($laptop) {
        flex: 3;
      }
      .image {
        @include image('/static/img/gazets/gazet10.jpg');
      }
    }
    .text-wrapper {
      @include show;
      @include translateTransition;
      @include media($tablet) {
          text-align: left;
      }

      text-align: center;

      &.translated {
        @include hide;
        transform: translate(-100%, 30%);
      }
    }
    .image {
      @include show;
      @include translateTransition;

      &.translated {
        @include hide;
        transform: translate(-100%, 30%);
      }
    }
  }

  .overflow-wrapper {
    width: auto;
    height: auto;
    overflow: hidden;
  }
  .image-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .news-post {
    @include translateTransition;
    @include show;
    
    @include media($mSmall) {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    @include media($tablet) {
      display: block;
    }
    &.translated {
      transform: translate(-100%, -20%);
      @include hide;
    }

    & > * {
      margin: 2rem 0;
    }

    &__info {
      color: var(--c-small-title);
    }

    &__title {
      line-height: 4.5rem;
      width: 50%;
      font-weight: 700;
      font-size: 4rem;
    }
  }
  .footer {
    width: 100%;
    height: $footerHeight;
    background-color: var(--c-background-dark);
    color: var(--c-active);

  }
  .latest-news {
    
    
    &__heading {
      // @include media($laptop) {
        font-size: 5rem !important,
      // }
    }

  
  }
  .heading {
    @include media($laptopL) {
      font-size: 9rem !important;
    }
    @include media($laptop) {
      font-size: 5rem !important;
    }
  }
</style>