<script lang="ts">
	export let title: string;
	export let link: string;
	export let image: string;
</script>

<a
	class="project relative flex h-64 w-64 cursor-pointer items-center justify-center bg-transparent
    duration-300 sm:h-96 sm:w-96"
	href={link}
>
	<img src={image} class="h-full w-full rounded-2xl object-cover duration-300" alt="Project" />
	<div
		class="pointer-events-none absolute top-0 left-0 flex h-full w-full items-center 
        justify-center p-8 text-center text-4xl
        font-bold text-white"
	>
		{title}
	</div>
</a>

<style>
	.project:hover {
		transform: scale(1.1);
	}

	img {
		opacity: 0.82;
		filter: blur(3px);
	}

	img:hover {
		opacity: 1;
		filter: blur(2px);
	}

	@media (pointer: none), (pointer: coarse), (hover: none) {
		img {
			opacity: 1;
		}
	}
</style>
