<template>
     <section class='section overflow-hidden'>
        <form
         ref='tr-1'
         @submit.prevent='addArticle'
         class='article-form translated'
        >
          <label for="article-title">Add Title</label>
          <template v-if='$v.article.title.$error'>
            <p 
              class='errorMessage'
              v-if='!$v.article.title.required'>Please fill title field</p>
          </template>
          <input
           class='form-input'
           :class="{ error: $v.article.title.$error }"
           type="text"
           id="article-title"
           v-model='article.title'
           @blur='$v.article.title.$touch()'
          >    
      
          <label for="article-title">Add Content</label>
          <template v-if='$v.article.content.$error'>
            <p 
              class='errorMessage'
              v-if='!$v.article.content.required'>Please add content</p>
          </template>          
          <textarea
             cols='100'
             class='form-input form-textarea'
             :class="{ error: $v.article.content.$error }"
             id="article-title"
             v-model='article.content'
             placeholder='Enter the content'
             @blur='$v.article.content.$touch()'
           >
          </textarea>
          <template v-if='$v.article.selectedTags.$error'>
            <p 
              class='errorMessage'
              v-if='!$v.article.selectedTags.required'>Please select tags</p>
          </template>
          <b-field label="Select tags">
            <b-taginput
                v-model="article.selectedTags"
                :data="tags"
                autocomplete
                @blur='$v.article.selectedTags.$touch()'
                field="title"
                icon="label"
                :allow-new="false"
                placeholder="Add a tag"
                @typing="getFilteredTags"
            >
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.title}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>
          <template v-if='$v.article.selectedRubrics.$error'>
            <p 
              class='errorMessage'
              v-if='!$v.article.selectedRubrics.required'>Please select rubrics</p>
          </template>
          <b-field label="Select rubrics">
            <b-taginput
                v-model="article.selectedRubrics"
                :data="rubrics"
                autocomplete
                field="title"
                icon="label"
                :maxtags='1'
                :allow-new="false"
                placeholder="Add a tag"
                @typing="getFilteredRubrics"
                @blur='$v.article.selectedRubrics.$touch()'
            >
                <template slot-scope="props">
                    <strong>{{props.option.id}}</strong>: {{props.option.title}}
                </template>
                <template slot="empty">
                    There are no items
                </template>
            </b-taginput>
        </b-field>
        <p 
              class='errorMessage'
          v-if='$v.$error'>Please fill all fields</p>
          <button
           :disabled='$v.$error'
           type='submit'
           class="button-reset nuxt-link my-button"
          >Add New Article</button>
      </form>
     </section>
</template>
<script>

  import translateMixin from '@/mixins/translateMixin.js'
  import { required } from 'vuelidate/lib/validators'
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
    validations: {
      article: {
        title: { required },
        content: { required },
        selectedTags: { required },
        selectedRubrics: { required }
      }
    },
    computed: {
      tags() {
        return this.$store.getters.tags.filter(el => el.title)
      },
      rubrics() {
        return this.$store.getters.rubrics.filter(el => el.title)
      }
    },
    methods: {
      addArticle() {
        this.$v.$touch()

        if (!this.$v.$error) {

          const dataToSend = {
            title: this.article.title,
            content: this.article.content,
            authorId: this.$store.getters.user.userId,
            tagsIds: this.article.selectedTags.map(e => e.id),
            rubricId: this.article.selectedRubrics[0].id
          }
          console.log(dataToSend)

          this.$store.dispatch('addArticle', dataToSend)
          this.article =  {
          title: null,
          content: null,
          selectedTags: [],
          selectedRubrics: [],
          }
          this.$router.push('/articles')
        }

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
    mixins: [translateMixin]

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
    @include show;
    @include translateTransition;
    width: 50%;
    height: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;

    & > * {
      margin-bottom: 10px;
    }

    &.translated {
      @include hide;
      transform: translateY(-100%);
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