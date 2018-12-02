<template>
     <section class='section'>
        <form
         @submit.prevent='addArticle'
         class='article-form'
        >
          <label for="article-title">Add Title</label>
          <input
           class='form-input'
           type="text"
           id="article-title"
           v-model='article.title'
          >    
    
          <label for="article-title">Add Content</label>
          <textarea
           cols='100'
           class='form-input form-textarea'
           id="article-title"
           v-model='article.content'
           placeholder='Enter the content'
           >
          </textarea>
          <b-field label="Select tags">
            <b-taginput
                v-model="article.selectedTags"
                :data="tags"
                autocomplete
                field="title"
                icon="label"
                :allow-new="false"
                placeholder="Add a tag"
                @typing="getFilteredTags">
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.title}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>
          <b-field label="Select rubrics">
            <b-taginput
                v-model="article.selectedRubrics"
                :data="rubrics"
                autocomplete
                field="title"
                icon="label"
                :allow-new="false"
                placeholder="Add a tag"
                @typing="getFilteredRubrics">
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.title}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>
          <button
           type='submit'
           class="button-reset nuxt-link my-button"
          >Add New Article</button>
      </form>
     </section>
</template>
<script>
  export default {
    layout: 'layout1',
    props: [],
    data: () => ({
      article: {
        title: null,
        content: null,
        selectedTags: [],
        selectedRubrics: [],
      },
      isSelectOnly: false,
    }),
    computed: {
      tags() {
        return this.$store.getters.tags
      },
      rubrics() {
        return this.$store.getters.rubrics
      }
    },
    methods: {
      addArticle() {
        const dataToSend = {
          title: this.article.title,
          content: this.article.content,
          tags: this.article.selectedTags.map(e => e.id),
          rubrics: this.article.selectedRubrics.map(e => e.id)
        }
        console.log(dataToSend)
        this.$store.dispatch('addArticle', dataToSend)
      },
      getFilteredTags(text) {
          this.filteredTags = this.tags.filter((option) => {
              return option.title
                  .toString()
                  .toLowerCase()
                  .indexOf(text.toLowerCase()) >= 0
          })
      },
      getFilteredRubrics(text) {
          this.filteredRubrics = this.rubrics.filter((option) => {
              return option.title
                  .toString()
                  .toLowerCase()
                  .indexOf(text.toLowerCase()) >= 0
          })
      }
    },
  }
</script>

<style lang="scss" scoped>
  .section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--c-background-light);
   
  }
  .article-form {
    width: 50%;
    height: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
     & > * {
      margin-bottom: 10px;
    }
  }

.my-button {
  width: 100%;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 500;
  cursor: pointer;
}

.form-textarea {
  height: 20rem;
}

</style>