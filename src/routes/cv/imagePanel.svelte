<script>
	import { fly } from 'svelte/transition';
	export let url = '';
	export let distance = 800;
</script>

<div
	in:fly={{ y: distance, duration: 800 }}
	out:fly={{ y: distance, duration: 800 }}
	class="imageContainer"
	style="--img-url: url({url});"
/>

<style>
	.imageContainer {
		width: 50%;
		height: 100%;
		left: 50%;
		position: absolute;
		background-image: var(--img-url);
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.5;
		filter: blur(3px);
		transition: 0.5s;
	}
</style>
