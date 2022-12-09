<script lang="ts">
	export let phrase = 'Lucy Gschwantner';

	let distance = 0;

	let containerParent: HTMLElement;
	let containerChild: HTMLElement;

	const calculateDistance = (inner: HTMLElement, outer: HTMLElement) => {
		const outerLeft = outer?.getBoundingClientRect().left;
		const innerLeft = inner?.getBoundingClientRect().left;

		distance = Math.min(innerLeft - outerLeft, 500);
	};

	$: calculateDistance(containerChild, containerParent);
</script>

<svelte:window on:resize={() => calculateDistance(containerChild, containerParent)} />

<div
	bind:this={containerParent}
	class="flex justify-center items-center w-full h-full bg-zinc-800"
	style="--distance: {Math.max(distance, 50)}px; --degree: 5deg"
>
	<div class="flex absolute fancyContainerTop" bind:this={containerChild}>
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
