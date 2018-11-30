<template>
	<p class="heading" v-bind='$attrs'>
		<slot></slot>
	</p>
</template>

<style lang="scss" scoped>
	.heading {
		// mix-blend-mode: difference;
    margin: 3rem 0;
		z-index: 10;
		font-family: aktiv-grotesk, sans-serif;
		font-style: normal;
		font-weight: 200;
		width: auto;
		font-size: 9rem;
		color: var(--c-active);
		display: inline-block;
		font-weight: 700;
		white-space: nowrap;
		position: relative;
		text-transform: none;
    text-shadow: 0 0.3rem 0.6rem transparentize(whitesmoke, 0.3);
		&:before {
			content: '';
			width: 100%;
			height: 0.1em;
			background-color: currentColor;
			position: absolute;
			bottom: 0.1em;
			left: 0;
		}
	}
</style>