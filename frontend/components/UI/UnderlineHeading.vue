<template>
	<p class="heading">
		<slot></slot>
	</p>
</template>
<script>
	export default {
		 inheritAttrs: false,
	}
</script>

<style lang="scss" scoped>
	.heading {
		// mix-blend-mode: difference;
		z-index: 10;
		font-family: aktiv-grotesk, sans-serif;
		font-style: normal;
		font-weight: 200;
		width: auto;
		font-size: 9rem;
		color: var(--c-text-active);
		display: inline-block;
		font-weight: 700;
		white-space: nowrap;
		position: relative;
		text-transform: none;
		&:before {
			content: '';
			width: 100%;
			height: 8px;
			background-color: currentColor;
			position: absolute;
			bottom: 1rem;
			left: 0;
		}
	}
</style>