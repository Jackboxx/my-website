<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	export let distance = 1000;
</script>

<div class="overflowContainer">
	<div
		in:fly={{ y: distance, duration: 1200 }}
		out:fly={{ y: distance, duration: 1200 }}
		class="imageContainer"
		style="--img-url: url({url});"
	/>
</div>

<style>
	.overflowContainer {
		width: 50%;
		height: 100%;
		left: 50%;
		overflow: hidden;
		position: absolute;
	}
	.imageContainer {
		width: 100%;
		height: 100%;
		background-image: var(--img-url);
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.5;
		filter: blur(3px);
		transition: 0.5s;
	}
</style>
