<template>
  <section class='content-section'>
	     <hgroup>
	        <h1 ref='test' class="title translated">news with id</h1>
	        <h2 ref='testImg' class="subtitle translated">{{$route.params.id}}</h2>
	     </hgroup>
  </section>
  	
</template>

<script>
  import translateMixin from '@/mixins/translateMixin.js'
export default {
	layout: 'layout1',
  name: 'index',

  data() {
    return {

    };
  },
   mixins: [translateMixin]
};
</script>

<style lang="scss" scoped>
section {
  position: absolute;
  right: 0;
  width: calc(100vw - var(--width));
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
hgroup {
	
	width: 30%;
	overflow: hidden;
	display: flex;
	height: 20%;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

}
.title {
	font-size: 5rem;
	transform: none;
  @include translateTransition;
	
}
.title.translated {
	transform: translate(-100%);
}
.subtitle {
	font-size: 5rem;
	transform: none;
  @include translateTransition;
	
}
.subtitle.translated {
	transform: translateY(-300%);
}
</style>
