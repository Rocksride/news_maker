<template>
  <articles-provider>
    <sortable-list
     v-if='items.length > 0'
     slot-scope='{items, openItemPage}'
     v-model='items'>
      <ul class="articles-list__content" slot-scope='{items}'>
        
        <sortable-item v-for='(item, index) in items' :key='item'>
          <li  class="articles-list__post">
          <div class="articles-list__post-wrapper">
              <h4 @click='openItemPage(item)' class="articles-list__content-info">
            14 2018 | BY VICTOR XING | {{item.title}}
            </h4>
            <sortable-handle>
              <h3 class="articles-list__content-title">
               {{item.content && item.content.slice(0, 100) + '...'}}
              </h3>
            </sortable-handle>
          </div>
        <slot v-if='index==1' name="progress-indicator">Here goes progress</slot>
        </li>
        </sortable-item>
      </ul>
  </sortable-list>
  <h3 class="title">Be first to add new article</h3>
</articles-provider>
</template>
<script>

  import SortableList from './SortableList.js'
  import SortableItem from './SortableItem.js'
  import SortableHandle from './SortableHandle.js'
  import ArticlesProvider from './ArticlesProvider.js'
  export default {
    components: {
      SortableList,
      SortableItem,
      SortableHandle,
      ArticlesProvider,
    },
    props: ['articles'],
    data() {
      return {
        
      }
    },
    methods: {
      
    },
  }
</script>

<style lang="scss">
.articles-list {
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
    position: relative;
    width: 100%;

    &:nth-child(odd) {
      background-color: var(--c-delimiter);
    }
    &:nth-child(even) {
      background-color: var(--c-background-light);
    }
  }

  &__post-wrapper {
    padding: 2.6rem;
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