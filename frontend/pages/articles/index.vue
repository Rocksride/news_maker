<template>
	<section class=" flex-center content-section">
    <button
      @click='$router.push("/new-article")'
      ref='tr-3'
      class="add-articles-button translated"
    >+</button>
		<div ref='tr-1' class="translated articles-list left">
      <div class="articles-list__header">
          <UnderlineHeading style='font-size: 5rem'>articles</UnderlineHeading>
      </div>
      <articles-list />

    </div>
    <div ref='post' class="translated right">
       <transition 
        appear
        name='article-switch'
        mode='out-in'
       >
        <nuxt-child :key='$route.params.id'/>
       </transition>
    </div>
	</section>
</template>

<script>

const pkg = require('@/package')
import ArticlesList from '@/components/ArticlesList'
import translateMixin from '@/mixins/translateMixin.js'
import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
export default {
  head: () => ({
    title: `${pkg.name} - Articles`
  }),
  layout: 'layout1',
  data: () => ({
    deleteMeAfter: true
  }),
  name: 'articles',
  components: {
  	UnderlineHeading,
    ArticlesList,
  },
  mixins: [translateMixin] 
};
</script>

<style lang="scss" scoped>
.content-section {
}
.left {
  height: 100%;
    flex: 3;
  
  // @include media($laptop) {
  //   flex: 2;
  // }
  @include media($laptopL) {
    flex: 3;
  }

  @include show;
  @include translateTransition;

  &.translated {
    @include hide;
    transform: translateX(-100%);
  }
}


.right {
  height: 100vh;
    flex: 5;
  
  // @include media($laptop) {
  //   flex: 3;
  // }
  @include media($laptopL) {
    flex: 5;
  }

  @include show;
  @include translateTransition;

  &.translated {
    @include hide;
    transform: translateY(100%);
  }
}


.add-articles-button {
  z-index: 1000;
  $transitionDefault: $translateTime $translateFunction;
  $transitionFaster: $translateTime/4 $translateFunction;

  @include show;
  transition: transform $transitionDefault,
              top $transitionFaster,
              right $transitionFaster,
              font-weight $transitionFaster,
              border $transitionFaster;
  border: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 3rem;
  padding: 1rem;
  background-color: var(--c-background-light);
  color: var(--c-active);
  border: 1px dashed var(--c-active);
  border-radius: 50%;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.6rem;

  &:hover {
    font-weight: 700;
    border-width: 4px;
    top: 0.8rem;
    right: 2.8rem;
  }

  &:active {
    background-color: var(--c-active);
    color: var(--c-background-light);
  }

  &.translated {
    @include hide;
    transform: translate(0%, -200%);
  }
}


</style>
