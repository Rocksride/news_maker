<template>
  <section class='section-wrapper'>
    <div class="row row-1">
      <article ref='test' class="latest-news translated">
          <div class="left">
          <UnderlineHeading>
            Latest Articles
          </UnderlineHeading>
          <div class="post">
            <h3 class="data-heading">
              10 14 2018 | BY VICTOR XING | CAPITAL MARKETS
            </h3>
            <h3 class="post-heading">
              Bond market term premium and wolves of Yellowstone
            </h3>
            <nuxt-link to='/news/:1'>READ THE POST</nuxt-link>
          </div>
        </div>
      </article>
      <div class="img-wrapper">
        <div  ref='testImg' class="img-1 translated">
      </div>
      </div>
    </div>
    <div class="row row-2">
      <div class="img-2">
        <img src="../static/img/gazets/gazet1.jpg" alt="img">
        
      </div>
      <article class="categories">
         <div class="text-wrapper">
           <UnderlineHeading  class='article-heading'>
          Explore Categories
        </UnderlineHeading>
         </div>
      </article>

    </div>
    <div class="row row-3">
      <article class="about-us">
        <div class="img-3">
          <img src="../static/img/gazets/gazet6.jpg" alt="">
        </div>
         <div class="right">
           <UnderlineHeading class='about-heading'>
            About us
          </UnderlineHeading>
         </div>
      </article>
    </div>
  </section>
</template>

<script>
import UnderlineHeading from '~/components/UI/UnderlineHeading.vue'
import Logo from '~/components/Logo.vue'
import translateMixin from '@/mixins/translateMixin.js'
export default {
  layout: 'layout1',
  mounted () {
    this.$nextTick(this.pinContainerScene)
  },
  destroyed () {
    // Destroy ScrollMagic when our component is removed from DOM
    this.$ksvuescr.$emit('destroy')
  },
  components: {
    UnderlineHeading,
    Logo,
  },
  data: () => ({
    showModal: false,
  }),
  methods: {
    pinContainerScene() {
      const tl = new this.$gsap.TimelineMax()
        // .fromTo(`.row-2`, 1, {x: '-100%'}, {x: '0%', y: '0%', ease: Linear.easeNone})
        .from(`.row-2`, 1, {x: '100%',  opacity: 0, ease: Linear.easeInOut})
        .from(`.article-heading`,1, {x: '100%',  opacity: 0, ease: Linear.easeInOut}, )
        .from(`.row-3`,1, {x: '100%',  opacity: 0, ease: Linear.easeInOut})
        .from(`.about-heading`,0.5, {x: '-100%', opacity:0,  ease: Linear.easeInOut})
        // .fromTo(`.row-3`, 1, {x: '-100%'}, {x: '0%', y: '0%', ease: Linear.easeNone})
       const scene = new this.$scrollmagic.Scene({
        triggerElement: '.row-1',
        triggerHook: 0,
        duration: '150%',
        reverse: false
       })
       // .setPin('.row-2')
       // .addIndicators()
       .setTween(tl)
       this.$ksvuescr.$emit('addScene', 'pinContainerScene', scene)
    },
  },
  mixins: [translateMixin]
}
</script>

<style lang='scss' scoped>
.post {
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
section {
  position: absolute;
  right: 0;
  width: calc(100vw - #{$sidebarWidth});
  height: 100vh;

}

.row-2 {
  z-index: 1;
}
.row {
  width: 100%;
  height: 94%;
  display: flex;
  
}
.left {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .post {
    margin-top: 8rem;
  }
}
.latest-news {
  @include translateTransition;
  left: 0;
  opacity: 1;
  visibility: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 3;
  position: relative;
  height: 100%;
  &.translated {
    visibility: hidden;
    opacity: 0;
    left: -30%;
  }
}
.categories {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 2;
  height: 100%;
  position: relative;
  .text-wrapper {
    right: 3rem;
   position: absolute;
  }
}
img {
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 1;
  visibility: visible;
  @include translateTransition;
  opacity: 1;
  &.translated {
    visibility: hidden;
    opacity: 0;
      background-position: right;
      width: 30%;
  }
}
.img-wrapper {
    flex: 2;
    overflow: hidden;
}
.img-1 {
  @include translateTransition;
  
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  background-image: url("../static/img/gazets/gazet6.jpg");
  transform: none;
  background-position: left;

    opacity: 1;
  &.translated {
    opacity: 0;
  transform: translateX(-90%);
  }
}
.img-2 {
  flex: 3;
}
.img-3 {
  height: 100%;
  flex: 3;
}
.about-us {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  .right {
    flex: 2;
  }
}
</style>
