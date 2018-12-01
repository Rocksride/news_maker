<template>
	<section class=" flex-center content-section">
    <button 
      ref='tr-3'
      class="add-articles-button translated"
    >+</button>

 <!--    <portal to="modals">
      <NewArticleForm />
    </portal> -->

		<div ref='tr-1' class="translated articles-list left">
      <div class="articles-list__header">
          <UnderlineHeading style='font-size: 5rem'>articles</UnderlineHeading>
      </div>
      <articles-list>
        <ScrollProgress :passedRefs='$refs' slot='progress-indicator' />
      </articles-list>

    </div>
    <div ref='tr-2' class="translated right">
      <article class='post' ref='post'>
        <header class="post__header">
          <h4 class='post__info'>10 14 2018 | BY VICTOR XING | CAPITAL MARKETS</h4>
          <h3 class='post__title'>Roundabout path in the snap-back of long-term bond</h3>
        </header>

          <p class="post__text">
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur consequatur facere, tempore minus quo perspiciatis sed, exercitationem quam ex dolore vel assumenda beatae autem voluptatibus quibusdam aliquid. Numquam, molestiae, impedit.</span>
            <span>Accusamus earum reiciendis vitae veniam eaque architecto expedita, debitis aut eveniet odit voluptatum sunt saepe consequatur asperiores nisi omnis repudiandae repellat excepturi dolorum molestiae officia, cum a fugit! Eveniet, atque.</span>
            <span>Veritatis perspiciatis quam quas laborum doloribus incidunt beatae, voluptatibus sit ipsa repudiandae eaque, dolore voluptate, aliquam commodi iste ut, et ipsam itaque. Magni similique sint, debitis totam reprehenderit excepturi ab.</span>
            <span>Incidunt dolor dignissimos inventore, quaerat quasi aliquam molestias placeat similique ipsam. A dolores recusandae voluptatum repudiandae, mollitia sit molestiae vitae reiciendis laudantium? Quis enim optio, distinctio. Expedita eos, voluptatibus corrupti.</span>
            <span>Aperiam excepturi enim cum, iste aut vero optio corporis molestias eveniet sequi sed aspernatur quae veniam, consequuntur quia delectus distinctio repellat nobis doloremque! Sunt voluptas, vel expedita, molestias eos quidem?</span>
        </p>

      </article>
    </div>
	</section>
</template>

<script>

const pkg = require('@/package')
import ScrollProgress from '@/components/ScrollProgress'
import ArticlesList from '@/components/ArticlesList'
import NewArticleForm from '@/components/NewArticleForm'
import translateMixin from '@/mixins/translateMixin.js'
import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
export default {
  head: () => ({
    title: `${pkg.name} - Articles`
  }),
  layout: 'layout1',
  name: 'articles',
  components: {
  	UnderlineHeading,
    ArticlesList,
    NewArticleForm,
    ScrollProgress
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
.post {
  overflow-y: scroll;

  min-height: 100vh;
  height: 100vh;

  @include media($mSmall) {
     padding: 1rem;
  }
  @include media($tablet) {
      & > * {
       margin-top: 6rem;
      }
  }
  @include media($tablet) {
    padding: 15rem var(--sidebar-width);
  }
  &__info {
    font-size: 1.6rem;
    color: var(--c-small-title);
  }

  &__title {

    font-size: 4rem;
    color: var(--c-text-light);
    font-weight: bold;
    line-height: 5rem;
  }

  &__text {
  }
}
.add-articles-button {
  @include show;
  @include translateTransition;
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
