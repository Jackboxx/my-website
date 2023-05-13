<script lang="ts">
	import { onMount } from 'svelte';
	import FancyText from './fancyText.svelte';
	import ShootingStar from './shootingStar.svelte';

	let maxStars = 12;
	let screenW: number;
	let screenH: number;

	let shootingStars: { speed: number }[] = [];

	onMount(() => {
		shootingStars = [
			{ speed: Math.floor(Math.random() * 3 + 5) },
			{ speed: Math.floor(Math.random() * 3 + 5) },
			{ speed: Math.floor(Math.random() * 3 + 5) }
		];

		const resulutions = [400, 3840];
		const startCounts = [6, 24];

		maxStars = Math.round(
			((screenW - resulutions[0]) * (startCounts[1] - startCounts[0])) /
				(resulutions[1] - resulutions[0]) +
				startCounts[0]
		);
	});

	setInterval(() => {
		if (shootingStars.length >= maxStars) return;
		shootingStars = [...shootingStars, { speed: Math.floor(Math.random() * 3 + 5) }];
	}, 2000);
</script>

<div
	bind:clientWidth={screenW}
	bind:clientHeight={screenH}
	class="flex h-screen items-center justify-center overflow-hidden bg-[#000]"
>
	<FancyText />

	{#each shootingStars as star}
		<ShootingStar parentWidthPx={screenW} parentHeightPx={screenH} speed={star.speed} />
	{/each}
</div>

<style>
</style>
