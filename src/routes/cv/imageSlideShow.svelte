<script lang="ts">
	export let images: string[] = [];
	export let percentage = 0;

	let slideElement: HTMLElement;

	const onPercentageChange = (percentage: number) => {
		if (!slideElement) return;
		slideElement.scrollTop = slideElement.scrollHeight * percentage;
	};

	$: onPercentageChange(percentage);
</script>

<div class="overflowContainer" bind:this={slideElement}>
	{#each images as image}
		<div class="imageContainer" style="--img-url: url({image});" />
	{/each}
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
