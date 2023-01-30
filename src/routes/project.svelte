<script lang="ts">
	export let title: string;
	export let link: string;
	export let image: string;
</script>

<a
	class="project flex items-center justify-center w-96 h-96 bg-transparent
    duration-300 cursor-pointer relative rounded hover:shadow-[1px_1px_1px_1px] hover:shadow-orange-600"
	href={link}
>
	<img src={image} class="w-full h-full object-cover duration-300 rounded" alt="Project" />
	<div
		class="absolute top-0 left-0 w-full h-full flex items-center justify-center 
        font-bold text-white text-center pointer-events-none
        text-4xl p-8"
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
