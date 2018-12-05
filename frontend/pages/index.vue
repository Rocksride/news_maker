<template>
  <section class='content-section'>
  <div class="row row-1">
    <div class="left flex-center-column">
      <div class="overflow-wrapper">
        <div ref='tr-1' class="text-wrapper translated">
          <nuxt-link to='/articles'>
            <UnderlineHeading  class='latest-news__heading heading'>Latest Articles</UnderlineHeading>
          </nuxt-link>
        </div>
        <div 
          v-if='Boolean(latestArticle)'
          ref='tr-2' 
          class="news-post  translated">
          <p class="news-post__info">{{date}} | {{loginName}} | {{rubric}}</p>
          <h3 class="news-post__title">
            {{latestArticle.title}}
          </h3>
           <div class="button-wrapper">
          <!--    <BorderedLink style='font-size: 1rem' to='/news/:1'>READ THE POST</BorderedLink> -->
          <nuxt-link  :to='articlePath'>
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
    <div class="right flex-center-column" >
      <div class="overflow-wrapper">
        <div ref='tr-5' class="translated text-wrapper">
          <nuxt-link to='/tags'>
            <UnderlineHeading class='heading' style='font-size: 5rem'>Tags</UnderlineHeading>
          </nuxt-link>
        </div>
      </div>
    </div>

  </div>
  <div class="row row-3">
    <div class="left flex-center-column" >
      <div class="overflow-wrapper">
       <div ref='tr-6' class="translated text-wrapper">
          <nuxt-link to='/about'>
            <UnderlineHeading  
            class='about heading'
            style='font-size: 5rem'
            >About us</UnderlineHeading>
          </nuxt-link>
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
    computed: {
      loginName(id) {
        return this.$store.getters.getLoginName(Number(this.latestArticle.authorId))
      },
      date() {
        return this.latestArticle.createDate.slice(0, 10).split('-').reverse().join(' ')
      },
      rubric() {
        return this.$store.getters.getRubric(this.latestArticle.rubricId).title
      },
      latestArticle() {
        return this.$store.getters.latestArticle
      },
      articlePath() {
        return `articles/${this.latestArticle.id || ''}`
      }
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
      flex: 5;
      position: relative;
      @include media($laptop) {
        flex: 5;
        // left: calc(var(--sidebar-width) / 2);
      }
      @include media($laptopL) {
        flex: 5;
        // left: var(--sidebar-width);
      }
      
    }
    .right {
      flex: 3;
      @include media($laptop) {
        flex: 3;
      }
      .image {
        @include image('/static/img/gazets/gazet11-zipped.jpg');
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
        flex: 5;
      }
      .image {
        @include image('/static/img/gazets/gazet13-zipped.jpg');
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
        flex: 3;
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
        flex: 3;
      }
    }
    .right {
      flex: 5;
      @include media($laptop) {
        flex: 5;
      }
      .image {
        @include image('/static/img/gazets/gazet10-zipped.jpg');
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
      @include media($tablet) {
        margin: 2rem 0;
      }
    }

    &__info {
      color: var(--c-small-title);
    }

    &__title {
      line-height: 4.5rem;
      width: 50%;
      font-weight: 700;
      font-size: 4rem;
      text-align: center;

      @include media($tablet) {
        text-align: left;
      }
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