<template>
    <section class='section '>
       <form ref='tr-1' class='form translated'>
          <b-field label="Name">
            <b-input 
              size='is-large'
              v-model="name"></b-input>
        </b-field>

        <b-field label="Email"
            type="is-danger"
            message="This email is invalid">
            <b-input 
              size='is-large'
              type="email"
                value="john@"
                maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Username"
            type="is-success"
            message="This username is available">
            <b-input 
              size='is-large'
              value="johnsilver" maxlength="30"></b-input>
        </b-field>

        <b-field label="Password">
            <b-input 
              size='is-large'
              type="password"
                value="iwantmytreasure"
                password-reveal>
            </b-input>
        </b-field>
        <!-- <buttonWithColoredBorders style='background-color: #fff; color: var(--c-active);'>Login</buttonWithColoredBorders> -->
        <!-- <BorderedLink>Login</BorderedLink> -->
        <button class='button is-large is-primary' type='submit' @click.prevent='auth'>Login</button>
       </form>

    </section>
</template>

<script>
  const pkg = require('@/package')
  import ButtonWithColoredBorders from '@/components/UI/ButtonWithColoredBorders'
  import BorderedLink from '@/components/UI/BorderedLink'
  import UnderlineHeading from '@/components/UI/UnderlineHeading'
  import translateMixin from '@/mixins/translateMixin.js'

  export default {
    layout: 'authLayout',
    head: () => ({
      title: `${pkg.name} - auth`
    }),
    data: () => ({
      name: 'John Silver'
    }),
    components: {
      ButtonWithColoredBorders,
      UnderlineHeading,
      BorderedLink,
    },
    methods: {
      auth() {
        console.log('authing');
        this.$store.dispatch('auth');
      },
    },
    mixins: [translateMixin]
  }
</script>

<style lang="scss" scoped>
  .section {

    font-size: 2rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .form {
      @include show;
      @include translateTransition;

      height: 50%;
      width: 50%;

      &.translated {
        @include hide;
        transform: translate(-100%, 0);
      }
    }
  }
  .button {
    // padding: 1.4rem 2rem;
    // display: flex;
    // align-items: center;
    // justify-content: center;  
    // background-color: var(--c-background-light);
    // color: var(--c-text-light);
  }
</style>