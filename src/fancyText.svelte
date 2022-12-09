<script lang="ts">
	export let phrase = 'fancy text';

	let screenWidth = Number.MAX_VALUE;
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
	class="flex justify-center items-center w-full h-full bg-gray-800 duration-150 hover:bg-gray-900"
	style="--distance: {Math.min(300, screenWidth / 3)}px; --degree: 15deg"
>
	<div class="flex absolute fancyContainerTop">
		{#each phrase.split('') as letter}
			{#if letter === ' '}
				<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterTop">&nbsp;</div>
			{:else}
				<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterTop">{letter}</div>
			{/if}
		{/each}
	</div>

	<div class="flex absolute fancyContainerBottom">
		{#each phrase.split('') as letter}
			{#if letter === ' '}
				<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterBottom">&nbsp;</div>
			{:else}
				<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterBottom">{letter}</div>
			{/if}
		{/each}
	</div>
</div>

<style>
	.fancyContainerTop,
	.fancyContainerBottom {
		transition: ease-out 0.4s;
	}

	.fancyContainerTop {
		transform: rotate(var(--degree));
	}

	.fancyContainerBottom {
		transform: rotate(var(--degree));
	}

	div:hover > .fancyContainerTop {
		transform: rotate(var(--degree)) translateX(calc(var(--distance) * -1));
	}

	div:hover > .fancyContainerBottom {
		transform: rotate(var(--degree)) translateX(var(--distance));
	}

	.fancyLetterTop {
		background: linear-gradient(to bottom, white 56%, transparent 45%);
	}

	.fancyLetterBottom {
		background: linear-gradient(to bottom, transparent 55%, white 50%);
	}

	.fancyLetterTop,
	.fancyLetterBottom {
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
