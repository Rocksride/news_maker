<template>
  <news-provider>
    <sortable-list slot-scope='{items, openItemPage}' v-model='items'>
      <ul class="news-list__content" slot-scope='{items}'>
        <sortable-item v-for='i in items' :key='i'>
          <li  class="news-list__post">
          <h4 @click='openItemPage(i)' class="news-list__content-info">
            {{i}} 14 2018 | BY VICTOR XING | CAPITAL MARKETS
          </h4>
          <sortable-handle>
            <h3 class="news-list__content-title">
             Roundabout path in the snap-back of long-term bond yields
            </h3>
          </sortable-handle>
        </li>
        </sortable-item>
      </ul>
  </sortable-list>
</news-provider>
</template>
<script>
  import SortableList from './SortableList.js'
  import SortableItem from './SortableItem.js'
  import SortableHandle from './SortableHandle.js'
  import NewsProvider from './NewsProvider.js'
  export default {
    components: {
      SortableList,
      SortableItem,
      SortableHandle,
      NewsProvider
    },
    props: ['news'],
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
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
</style>