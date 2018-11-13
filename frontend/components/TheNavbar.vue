<template>
  <nav class='nav'>
    <div class="nav__logo"><nuxt-link active-class='' class='logo-link' exact to="/">Newswell</nuxt-link></div>
    <ul class="nav__links">
      <nuxt-link class='nuxt-link' exact to="/">Home</nuxt-link>
      <nuxt-link class='nuxt-link' exact to="/news">News</nuxt-link>
      <nuxt-link class='nuxt-link' exact to="/tags">Tags</nuxt-link>
      <nuxt-link class='nuxt-link' exact to="/about">About</nuxt-link>
      <nuxt-link class='nuxt-link' exact to="/news/:1">Last article</nuxt-link>
      <a @click='$store.dispatch("logout")' class='nuxt-link'>Logout</a>
    </ul>
    <nuxt-link  class='nav__contact-button' exact to="/about">Contact us</nuxt-link>

  </nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'the-navbar',
  components: {
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  }

}

</script>
<style lang="scss" scoped>
// @import '@/assets/scss/abstract/_variables.scss';
@import '@/assets/scss/main.scss';

  .nav {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    // @include media($mSmall) {
    //    width: $sidebarWidth-sm;
    // }
    // @include media($laptop) {
    //    width: $sidebarWidth-md;
    // }
    // @include media($laptopL) {
    //   width: $sidebarWidth-lg;
    // }
    width: var(--sidebar-width);
    height: 100%;
    border-right: 1px solid lavender;
    &__logo {
      height: 25%;
      letter-spacing: 1px;
      text-shadow: 3px 7px 10px rgba(0, 0, 0, 0.3);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 2.4rem;
      white-space: nowrap;
      // letter-spacing: 1rem;
      font-weight: 700;
      position: relative;
      // transform: perspective(400px) skewY(-50deg);
      &:before {
        position: absolute;
        top: 70%;
        left: -20%;
        content: '';
        width: 80%;
        height: 3px;
        background-color: var(--c-active);
        transform:  rotate(-45deg);
        z-index: -2;
      }
    }

    &__links {
      margin-left: -4rem;
      height: 60%;
      // width: 90%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }

    &__footer {
      // width: 100%;
      margin: 0;
      border-top: 1px solid lavender;
      .nav__list-item {
        font-weight: bold;
      }
      // align-self: flex-end;
      // width: 100%;
      margin-top: 7rem;
    }

    &__contact-button{
      z-index: 1;
      text-align: center;
      background-color: transparent;
      border: none;
      // border: 0.5px dashed white;
      // overflow: hidden;
      box-sizing: border-box;
      margin: 0;
      color: var(--c-background-light);
      font-size: 1.6rem;
      font-weight: 700;
      // letter-spacing: 7px;
      text-decoration: none;
      padding: calc(3vh - 5px) 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: relative;
      display: flex;
      transition: all .4s ease;
      // transition-delay: .2s;
    /*   align-items: center; */
    /*   justify-content: center; */
    }
    &__contact-button::before {
      content: '';
      position: absolute;
      z-index: -1;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--c-active);
    }
    &__contact-button::after {
      content: '';
      position: absolute;
      z-index: -1;
      transform: scaleX(0);
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background-color: var(--c-background-dark);
      transition: transform .5s cubic-bezier(0.6, 0.05, 0.01, 0.99);
      transform-origin:  right;
    }
    &__contact-button:hover::after {
      transform: scaleX(1);
      transform-origin:  left;

    }
    &__contact-button .border {
      display: inline-block;
      position: absolute;
      background-color: #202020;
      transition: all .3s ease;
    }

  }
  .logo-link {
    color: var(--c-text-dark) !important;
  }
</style>

