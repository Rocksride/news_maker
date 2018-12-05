<template>
  <articles-provider>
    <sortable-list
     slot-scope='{items, openItemPage}'
     v-model='items'
    >
      <ul class="articles-list__content" slot-scope='{items}'>
        
        <template v-if='items.length'>
          <sortable-item v-for='(item) in items' :key='item.id'>
              <nuxt-link
                :to='/articles/+item.id'
                exact
                nuxt-link
                active-class='omit-class'
                class='articles-list__post article-current'
                exact-active-class='article-current-active'
              >

                <div class="articles-list__post-wrapper">
                    <h4 class="articles-list__content-info">
                         {{getDate(item)}} | by {{loginName(item)}} | {{rubric(item)}}
                    </h4>
                    <sortable-handle>
                      <h3 class="articles-list__content-title">
                       {{formatText(item.title)}}
                      </h3>
                    </sortable-handle>
                </div>
               <!--  <ScrollProgress 
                 v-if='articleId === item.id'
                /> -->
              </nuxt-link>

        </sortable-item>
 
        </template>
        <FilterControllers></FilterControllers>
      </ul>
  </sortable-list>
</articles-provider>
</template>


<script>
  
  import {mapGetters} from 'vuex'
  import SortableList from './SortableList.js'
  import SortableItem from './SortableItem.js'
  import SortableHandle from './SortableHandle.js'
  import ArticlesProvider from './ArticlesProvider.js'
  import ScrollProgress from '@/components/ScrollProgress'
  import FilterControllers from '@/components/FilterControllers'

  export default {
    components: {
      SortableList,
      SortableItem,
      SortableHandle,
      ArticlesProvider,
      ScrollProgress,
      FilterControllers
    },
    props: ['articles'],
    data() {
      return {
        
      }
    },
    computed: {
    },
    methods: {
      checkForCurrentId(id) {
        console.group('123')
        console.log(id);
        console.log(this.articleId)
        console.groupEnd('123')
        return this.articleId === id
      },
       loginName(item) {
        return this.$store.getters.getLoginName(Number(item.authorId))
      },
      getDate(item) {
        console.log(item);
        return item.createDate.slice(0, 10).split('-').reverse().join(' ')
      },
      rubric(item) {
        console.log('*********\n' + this.$store.getters.rubrics + '\n**************')
        return this.$store.getters.getRubric(item.rubricId).title
      },
      formatText(text) {
        return text.length >= 100
        ? text.slice(0, 100) + '...'
        : text
      }
    },
  }
</script>

<style lang="scss">
.articles-list {
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  // align-items: stretch;
  // justify-content: flex-start;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 15vh;
    @include image-darken('/static/img/figures/figure9-zipped.jpg', 0.3);
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
    background-color: var(--c-background-light);
    border-bottom: 1px solid var(--c-delimiter);
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

.article-current {
  
  &-active {
    display: block;
    padding: 0;
    background-color: var(--c-delimiter);
  }
}

</style>