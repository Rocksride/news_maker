<template>
  <section class="about content-section">
    <div class="img-wrapper overflow-wrapper">
      <img ref='t1' class='translated' src="@/static/img/gazets/gazet17-zipped.jpg" alt="about image">
    </div>
    <div class="text-wrapper overflow-wrapper">
      <div ref='t2' class="title translated">
        <UnderlineHeading style='font-size: 6rem'>About us</UnderlineHeading>
      </div>
    </div>
    <div class="info-wrapper overflow-wrapper">
      <div ref='t3' class="info translated">
        <h3 class="title">
          Newswell
        </h3>
        <p class="text">
          News portal made by <a href="https://gitlab.com/rocksride" class="nuxt-link" style='display: inline;'>Rocksride</a> and <a href="https://gitlab.com/vitvickiy" class='nuxt-link' style='display: inline;'>Dmitry</a>. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo illum suscipit itaque. At in inventore numquam, porro, doloremque vero nulla expedita necessitatibus aliquid iure facere aut alias aperiam quis, qui, quia. Et dicta reprehenderit ea, maiores enim quidem consequuntur quos aut, labore error quas nostrum consequatur id, in beata
        </p>
      </div>
    </div>
  </section>
</template>

<script>
const pkg = require('@/package')
import UnderlineHeading from '~/components/UI/UnderlineHeading.vue'
import translateMixin from '@/mixins/translateMixin.js'
export default {
  layout: 'layout1',
  components: {
    UnderlineHeading    
  },
  head: () => ({
    title: `${pkg.name} - About`
  }),
  name: 'about',
  mixins: [translateMixin]
};
</script>

<style lang="scss" scoped>
.about {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.overflow-wrapper {
  overflow: hidden;
}
.text-wrapper {
  position: absolute;
  top: 30%;
  left: 50%;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  opacity: 1;
  visibility: visible;
  transform:  translate(-50%, -50%);
  .title {
     @include translateTransition;
     
     &.translated {
      opacity: 0;
      visibility: hidden;
      transform:  translate(-80%, -50%);
     }
  }
}
.img-wrapper {
  height: 70%;
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    width: 100%;
    height: 100%;
    @include translateTransition;
    opacity: 1;
    visibility: visible;
    transform: none;
    &.translated {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%);
    }
    // @include image('/static/img/gazets/gazet17.jpg');  
  }
}
.info-wrapper {
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.info {
  position: relative;
  top: 6rem;
  padding: 12rem;
  @include translateTransition;
  opacity: 1;
  visibility: visible;
  transform: none;
  &.translated {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%);
    }
}
</style>
