<script lang="ts">
	export let phrase = 'Lucy Gschwantner';
	export let textColor = '#ffffff';
	export let textClipColor = '#ff533f';

	let distance = 0;

	let containerParent: HTMLElement;
	let containerChild: HTMLElement;

	const calculateDistance = (inner: HTMLElement, outer: HTMLElement) => {
		const outerLeft = outer?.getBoundingClientRect().left;
		const innerLeft = inner?.getBoundingClientRect().left;

		distance = Math.min(innerLeft - outerLeft, 1000);
	};

	$: calculateDistance(containerChild, containerParent);
</script>

<svelte:window on:resize={() => calculateDistance(containerChild, containerParent)} />

<div class="z-10 m-8 h-48 w-full max-w-2xl sm:m-16 lg:h-64">
	<div
		bind:this={containerParent}
		class="relative h-full w-full rounded bg-bg-dark dark:bg-bg-dark"
		style="--distance: {Math.max(distance * 1.6, 50)}px; --degree: 5deg;"
	>
		<div class="cont absolute z-20 flex h-full w-full items-center justify-center">
			<div
				class="fancyContainerTop absolute flex"
				style="--textColor: {textColor};"
				bind:this={containerChild}
			>
				{#each phrase.split('') as letter}
					{#if letter === ' '}
						<div class="fancyLetterTop text-center text-4xl font-bold sm:text-6xl">
							&nbsp;
						</div>
					{:else}
						<div class="fancyLetterTop text-center text-4xl font-bold sm:text-6xl">
							{letter}
						</div>
					{/if}
				{/each}
			</div>

			<div class="fancyContainerBottom absolute flex" style="--textColor: {textColor};">
				{#each phrase.split('') as letter}
					{#if letter === ' '}
						<div class="fancyLetterBottom text-center text-4xl font-bold sm:text-6xl">
							&nbsp;
						</div>
					{:else}
						<div class="fancyLetterBottom text-center text-4xl font-bold sm:text-6xl">
							{letter}
						</div>
					{/if}
				{/each}
			</div>
		</div>

		<div class="cont2 absolute z-10 flex h-full w-full items-center justify-center">
			<div class="fancyContainerTop absolute flex" style="--textColor: {textClipColor};">
				{#each phrase.split('') as letter}
					{#if letter === ' '}
						<div class="fancyLetterTop text-center text-4xl font-bold sm:text-6xl">
							&nbsp;
						</div>
					{:else}
						<div class="fancyLetterTop text-center text-4xl font-bold sm:text-6xl">
							{letter}
						</div>
					{/if}
				{/each}
			</div>

			<div
				class="fancyContainerBottom absolute flex"
				style="--textColor: {textClipColor};"
			>
				{#each phrase.split('') as letter}
					{#if letter === ' '}
						<div class="fancyLetterBottom text-center text-4xl font-bold sm:text-6xl">
							&nbsp;
						</div>
					{:else}
						<div class="fancyLetterBottom text-center text-4xl font-bold sm:text-6xl">
							{letter}
						</div>
					{/if}
				{/each}
			</div>
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
