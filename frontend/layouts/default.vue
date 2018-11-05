<template>
      <div class='default-wrapper'>
      <portal-target name="modals"> </portal-target>
      <TheHeader />
      <LoaderCircle :show='circleLoaderVisibility'/>
      <LoaderTransition  :show='transitionLoaderVisibility'/>
      <nuxt/>
    </div>
</template>


<script>
import LoaderTransition from '@/components/UI/LoaderTransition'
import TheHeader from '@/components/TheHeader'
import LoaderCircle from '@/components/UI/LoaderCircle'
import ButtonWithColoredBorders from '@/components/UI/ButtonWithColoredBorders'
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    LoaderTransition,
    ButtonWithColoredBorders,
    LoaderCircle,
    TheHeader,
  },
  computed: {
    ...mapGetters(['circleLoaderVisibility', 'transitionLoaderVisibility'])
  },
  methods: {
    async initApp() {
      this.initColorTheme();
    },
    ...mapActions(['initColorTheme'])
  },
  created() {
    // this.initApp();
  }
}
</script>

<style lang="scss" scoped>
  .default-wrapper {
    min-height: 100vh;
    width: 100vw;
    background-color: var(--c-background-dark);
  }

</style>
