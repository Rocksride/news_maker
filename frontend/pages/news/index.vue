<template>
	<section class=" flex-center content-section">
		<div ref='tr-1' class="translated news-list left">
      <div class="news-list__header">
          <UnderlineHeading style='font-size: 5rem'>News</UnderlineHeading>
      </div>
      <ul class="news-list__content">
        <li v-for='i in 20' :key='i' class="news-list__post">
          <h4 class="news-list__content-info">
            {{i}} 14 2018 | BY VICTOR XING | CAPITAL MARKETS
          </h4>
          <h3 class="news-list__content-title">
            Roundabout path in the snap-back of long-term bond yields
          </h3>
        </li>
      </ul>
    </div>
    <div ref='tr-2' class="translated right">
      <article class='post'>
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
import translateMixin from '@/mixins/translateMixin.js'
import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
export default {
  head: () => ({
    title: `${pkg.name} - Articles`
  }),
  layout: 'layout1',
  name: 'news',
  components: {
  	UnderlineHeading
  },
  data() {
    return {

    };
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

  @include show;
  @include translateTransition;

  &.translated {
    @include hide;
    transform: translateX(-100%);
  }
}
.news-list {
  height: 100vh;
  display: flex;
  // align-items: stretch;
  // justify-content: flex-start;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    @include image-darken('/static/img/figures/figure9.jpg', 0.3);
  }

  &__content {
    overflow-y: scroll;
    min-height: 80vh;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }

  &__post {
    padding: 2rem 6rem;
    width: 100%;

    &:nth-child(odd) {
      background-color: var(--c-delimiter);
    }
    &:nth-child(even) {
      background-color: var(--c-background-light);
    }
  }

  &__content-info {
    font-size: 1rem;
    color: var(--c-small-title);
  }

  &__content-title {
    font-size: 1.6rem;
    color: var(--c-text-light);
    font-weight: bold;
  }

}

.right {
  height: 100vh;
  flex: 5;

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
  padding: 15rem var(--sidebar-width);
  & > * {
    margin-top: 6rem;
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
</style>
