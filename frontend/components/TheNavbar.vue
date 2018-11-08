<template>
  <nav class='nav'>
    <div class="nav__logo">Newswell</div>
    <ul class="nav__links">
      <template v-if='isAuthenticated'>
        <TheLink to='/user'>User</TheLink>
      </template>
      <nuxt-link class='nav__list-item' to="/tags">Categories</nuxt-link>
      <nuxt-link class='nav__list-item' to="/news">News</nuxt-link>
      <nuxt-link class='nav__list-item' to="/">Other</nuxt-link>
      <footer class="nav__footer">
        <nuxt-link class='nav__list-item' to="/about">Services</nuxt-link>
        <nuxt-link class='nav__list-item' to="/about">Other</nuxt-link>
      </footer>
    </ul>
      <nuxt-link  class='nav__contact-button' to="/about">Contact us</nuxt-link>

  </nav>
</template>

<script>
import TheLink from '@/components/UI/TheLink'
import {mapGetters} from 'vuex'
export default {
  name: 'the-navbar',
  components: {
        TheLink
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
    width: $sidebarWidth;
    height: 100%;
    border-right: 1px solid lavender;
    &__logo {
      height: 25%;
      letter-spacing: 4px;
      text-shadow: 3px 7px 10px rgba(0, 0, 0, 0.3);
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-size: 3rem;
      white-space: nowrap;
      // letter-spacing: 1rem;
      font-weight: 700;
      position: relative;
      // transform: perspective(400px) rotateY(50deg);
      &:before {
        position: absolute;
        top: 70%;
        left: -20%;
        content: '';
        width: 80%;
        height: 3px;
        background-color: var(--c-text-active);
        transform:  rotate(-45deg);
        z-index: -2;
      }
    }

    &__links {
      height: 60%;
      margin-left: auto;
      width: 90%;
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
    }
    &__list-item {

      // margin: 3rem !important;
      position: relative;
      padding: 1rem;
      color: #333;
      font-size: 1.6rem;
      // transition: all .3s ease-in;
      display: block;
      // width: 80%;
      &:before {
        transition: all .3s ease;
        content: '';
        top: 90%;
        height: 3px;
        width: 0;
        background-color: var(--c-text-active);
        position: absolute;
      }
      &:hover:before {
        width: 130%;

      }
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
      color: var(--c-text-light);
      font-size: 1.6rem;
      font-weight: 700;
      // letter-spacing: 7px;
      text-decoration: none;
      padding: calc(3vh - 13.3795px) 2.6rem;
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
      background-color: var(--c-background-dark);
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
      background-color: var(--c-background-light);
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
</style>

