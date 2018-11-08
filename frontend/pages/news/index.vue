<template>
	<section class="wrapper">
		<div ref='left' class="left translated flex-center">
			<header class="list-header flex-center flex-column">
				<UnderlineHeading style='height 20vh;font-size: 4.6rem; position: relative'>
					News
				<sup class="list-quantity-number" style='font-size: 3rem;'>46</sup>
				</UnderlineHeading>
			</header>

			<section class="list-section">
			<ul>
				<li>
					<div class="post flex-center flex-column"><div class="title">Lorem ipsum dolor sit amet.</div>
				<div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing.</div></div>
				</li>					
				<li>
					<div class="post flex-center flex-column"><div class="title">Lorem ipsum dolor sit amet.</div>
				<div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing.</div></div>
				</li>
				<li>
					<div class="post flex-center flex-column"><div class="title">Lorem ipsum dolor sit amet.</div>
				<div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing.</div></div>
				</li>					
				<li>
					<div class="post flex-center flex-column"><div class="title">Lorem ipsum dolor sit amet.</div>
				<div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing.</div></div>
				</li>					
				<li>
					<div class="post flex-center flex-column"><div class="title">Lorem ipsum dolor sit amet.</div>
					<div class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing.</div></div>
				</li>
			</ul>
			</section>
		</div>
		<div ref='right' class="right translated ">
			<header>
					<h4 class='subtitle is-4'>10 14 2018 | BY VICTOR XING | CAPITAL MARKETS</h4>
					<h3 class='title is-2'>Roundabout path in the snap-back of long-term bond</h3>
				
			</header>
      <section class="post-content">
          Executive Summary
BIS’s Shin noted that the “snap-back” in long-term interest rates represents the biggest risk in the global economy
A decade of policy-induced yield-chasing not only directly lowered long-term rates but also begot further demand
As term premium decompress amid waning policy support, higher long-term bond yields will induce further selling
The rise in long-term real interest rates (the discount rate that affects all risk assets) would threaten risk sentiment
Higher long-term rates first triggered a de-leveraging wave, but flight-to-quality flows subsequently eased the rout
Bond yields will “snap-back” under a roundabout path as stabilizing risk sentiment leads to further sell-off in bonds
d again allow bond yields to “snap higher” and renew the bearish risk-parity cycle;
rates represents the biggest risk in the global economy A decade of policy-induced yield-chasing not only directly lowered long-term rates but also begot further demand As term premium decompress amid waning policy support, higher long-term bond yields will induce further selling The rise in long-term real interest rates (the discount rate that affects all risk assets) would threaten risk sentiment Higher long-term rates first triggered a de-leveraging wave, but flight-to-quality flows subsequently eased the rout Bond yields will “snap-back” under a roundabout path as stabilizing risk sentiment leads to further sell-off in bonds d again allow bond yields to “snap higher” and renew the bearish risk-parity cycle
rates represents the biggest risk in the global economy A decade of policy-induced yield-chasing not only directly lowered long-term rates but also begot further demand As term premium decompress amid waning policy support, higher long-term bond yields will induce further selling The rise in long-term real interest rates (the discount rate that affects all risk assets) would threaten risk sentiment Higher long-term rates first triggered a de-leveraging wave, but flight-to-quality flows subsequently eased the rout Bond yields will “snap-back” under a roundabout path as stabilizing risk sentiment leads to further sell-off in bonds d again allow bond yields to “snap higher” and renew the bearish risk-parity cycle
rates represents the biggest risk in the global economy A decade of policy-induced yield-chasing not only directly lowered long-term rates but also begot further demand As term premium decompress amid waning policy support, higher long-term bond yields will induce further selling The rise in long-term real interest rates (the discount rate that affects all risk assets) would threaten risk sentiment Higher long-term rates first triggered a de-leveraging wave, but flight-to-quality flows subsequently eased the rout Bond yields will “snap-back” under a roundabout path as stabilizing risk sentiment leads to further sell-off in bonds d again allow bond yields to “snap higher” and renew the bearish risk-parity cycle
        </section>
		</div>
	</section>
</template>

<script>
const pkg = require('@/package')
import translateMixin from '@/mixins/translateMixin.js'
import UnderlineHeading from '@/components/UI/UnderlineHeading.vue'
export default {
  head: () => ({
    title: `${pkg.name} - Articles`
  }),
  layout: 'layout1',
  name: 'news',
  components: {
  	UnderlineHeading
  },
  data() {
    return {

    };
  },
  mixins: [translateMixin] 
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: absolute;
  right: 0;
  width: calc(100vw - #{$sidebarWidth});
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.left header {
	width: 100%;
	height: 20vh;
	@include image-darken('/static/img/gazets/gazet9.jpg', 0.5);	
}
.left.translated {
  opacity: 0;
  visibility: hidden;
  transform: translateX(-100%);
}
.left {
  transform: none;
  @include translateTransition;
  
  opacity: 1;
  visibility: visible;
	flex: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.right {
  @include translateTransition;
  opacity: 1;
  visibility: visible;
	height: 100vh;
	overflow-y: scroll;
	flex: 7;
	padding: 15rem;
  transform: none;
	& header {
    height: 30%;
    padding-top: 3rem;
		margin-top: 3rem;
	}
  & .post-content {
    margin-top: auto;
  }
  &.translated {
    transform: translateY(30%);
    opacity: 0;
    visibility: hidden;
  }
}
.post {
	width: 550px;
	height: 200px;
}
ul {
	height: 80vh;
	overflow-y: scroll;
	// overflow-x: hidden;
}
li:nth-child(even) {
	background-color: #f5f5f5;
}

</style>
