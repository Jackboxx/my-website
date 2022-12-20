<script lang="ts">
	export let phrase = 'Lucy Gschwantner';
	export let textColor = '#fff';

	let distance = 0;

	let containerParent: HTMLElement;
	let containerChild: HTMLElement;

	const calculateDistance = (inner: HTMLElement, outer: HTMLElement) => {
		const outerLeft = outer?.getBoundingClientRect().left;
		const innerLeft = inner?.getBoundingClientRect().left;

		distance = Math.min(innerLeft - outerLeft, 600);
	};

	$: calculateDistance(containerChild, containerParent);
</script>

<svelte:window on:resize={() => calculateDistance(containerChild, containerParent)} />

<div
	bind:this={containerParent}
	class="relative w-full h-full bg-zinc-800 rounded"
	style="--distance: {Math.max(distance * 1.6, 50)}px; --degree: 5deg;"
>
	<div class="z-20 absolute w-full h-full flex justify-center items-center cont">
		<div
			class="flex absolute fancyContainerTop"
			style="--textColor: {textColor};"
			bind:this={containerChild}
		>
			{#each phrase.split('') as letter}
				{#if letter === ' '}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterTop">&nbsp;</div>
				{:else}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterTop">{letter}</div>
				{/if}
			{/each}
		</div>

		<div class="flex absolute fancyContainerBottom" style="--textColor: {textColor};">
			{#each phrase.split('') as letter}
				{#if letter === ' '}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterBottom">&nbsp;</div>
				{:else}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterBottom">{letter}</div>
				{/if}
			{/each}
		</div>
	</div>

	<div class="cont2 z-10 absolute w-full h-full flex justify-center items-center">
		<div class="flex absolute fancyContainerTop" style="--textColor: {'#000'};">
			{#each phrase.split('') as letter}
				{#if letter === ' '}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterTop">&nbsp;</div>
				{:else}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterTop">{letter}</div>
				{/if}
			{/each}
		</div>

		<div class="flex absolute fancyContainerBottom" style="--textColor: {'#000'};">
			{#each phrase.split('') as letter}
				{#if letter === ' '}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterBottom">&nbsp;</div>
				{:else}
					<div class="text-4xl sm:text-6xl text-center font-bold fancyLetterBottom">{letter}</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.cont {
		user-select: none;
		-webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
		clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
	}

	.cont2 {
		user-select: none;
	}

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

	.cont:hover > .fancyContainerTop {
		transform: rotate(var(--degree)) translateX(calc(var(--distance) * -1));
	}

	.cont:hover > .fancyContainerBottom {
		transform: rotate(var(--degree)) translateX(var(--distance));
	}

	.cont:hover ~ .cont2 > .fancyContainerTop {
		transform: rotate(var(--degree)) translateX(calc(var(--distance) * -1));
	}

	.cont:hover ~ .cont2 > .fancyContainerBottom {
		transform: rotate(var(--degree)) translateX(var(--distance));
	}

	.fancyLetterTop {
		background: linear-gradient(to bottom, var(--textColor) 56%, transparent 45%);
	}

	.fancyLetterBottom {
		background: linear-gradient(to bottom, transparent 55%, var(--textColor) 45%);
	}

	.fancyLetterTop,
	.fancyLetterBottom {
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
	}
</style>
