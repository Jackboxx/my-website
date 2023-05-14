<script lang="ts">
	export let title: string;
	export let link: string;
	export let image: string;
	export let reverse = false;
</script>

<div
	class={`tmp m-4 my-24 flex h-full flex-col-reverse items-center gap-2 sm:justify-around sm:gap-0`}
	style={`--direction: ${reverse ? 'row-reverse' : 'row'}`}
>
	<div
		class="aspect-[4/3] w-full min-w-[300px] rounded bg-bg-light p-4 text-lg text-text-light
            shadow-2xl dark:bg-bg-dark dark:text-text-dark sm:w-[40%] 2xl:text-3xl"
	>
		<slot />
	</div>
	<div
		class="relative aspect-[4/3] w-full min-w-[300px] rounded-sm border-2 border-accent-light shadow-2xl
        dark:border-accent-dark sm:w-[40%]"
	>
		<a class="absolute z-10 h-full w-full cursor-pointer" target="_blank" href={link}>
			<span
				class="absolute left-[50%] z-10 translate-x-[-50%] translate-y-[-60%]
                    bg-gradient-to-bl from-primary-light to-secondary-light
                    bg-clip-text text-xl font-bold text-[#00000000] sm:text-2xl
                    md:text-3xl lg:text-5xl">{title}</span
			>
			<img class="shimmer h-full w-full object-cover" src={image} alt={title} />
		</a>
	</div>
</div>

<style>
	.shimmer {
		-webkit-mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/500% 100%;
		mask: linear-gradient(-60deg, #000 30%, #0005, #000 70%) right/500% 100%;
	}

	.shimmer:hover {
		animation: shimmer 750ms;
	}

	@keyframes shimmer {
		100% {
			-webkit-mask-position: left;
			mask-position: left;
		}
	}

	@media (min-width: 640px) {
		.tmp {
			flex-direction: var(--direction);
		}
	}
</style>
