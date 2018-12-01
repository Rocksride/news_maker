<template>
  <articles-provider>
    <sortable-list
     v-if='items.length > 0'
     slot-scope='{items, openItemPage}'
     v-model='items'>
      <ul class="articles-list__content" slot-scope='{items}'>
        
        <sortable-item v-for='(item) in items' :key='item.id'>
              <li
                @click='openArticle(item.id)'
                class='articles-list__post article-current'
                :class='{"article-current-active": articleId === item.id}'
              >

                <div class="articles-list__post-wrapper">
                    <h4 class="articles-list__content-info">
                         14 2018 | BY VICTOR XING | {{item.title}}
                    </h4>
                    <sortable-handle>
                      <h3 class="articles-list__content-title">
                       {{item.content && item.content.slice(0, 100) + '...'}}
                      </h3>
                    </sortable-handle>
                </div>
                <ScrollProgress 
                 v-if='articleId === item.id'
                />
              </li>

        </sortable-item>
      </ul>
  </sortable-list>
  <h3 class="title">Be first to add new article</h3>
</articles-provider>
</template>
<script>

  import {mapGetters} from 'vuex'
  import SortableList from './SortableList.js'
  import SortableItem from './SortableItem.js'
  import SortableHandle from './SortableHandle.js'
  import ArticlesProvider from './ArticlesProvider.js'
  import ScrollProgress from '@/components/ScrollProgress'

  export default {
    components: {
      SortableList,
      SortableItem,
      SortableHandle,
      ArticlesProvider,
      ScrollProgress
    },
    props: ['articles'],
    data() {
      return {
        
      }
    },
    mounted() {
      console.dir({route: this.$route.params.id})
    },
    computed: {
      ...mapGetters(['articleId'])
    },
    methods: {
      checkForCurrentId(id) {
        console.group('123')
        console.log(id);
        console.log(this.articleId)
        console.groupEnd('123')
        return this.articleId === id
      },
      openArticle(id) {
        this.$store.dispatch('updateCurrentId', id)
        this.$router.push({
          path: `/articles/${id}`
        })
      }
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