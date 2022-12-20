<script lang="ts">
	export let title: string;
	export let link: string;
</script>

<a
	class="project flex items-center justify-center w-128 bg-transparent
        duration-300 cursor-pointer relative rounded"
	href={link}
>
	<img src="/img/blog.png" class="w-full h-full object-cover duration-300 rounded" alt="Project" />
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
		margin: -8px 0 0 -8px;
		box-shadow: 7px 7px 2px 2px darkgray, 14px 14px 2px 2px gray;
	}

	img {
		opacity: 0.82;
	}

	img:hover {
		opacity: 1;
	}

	@media (pointer: none), (pointer: coarse), (hover: none) {
		img {
			opacity: 1;
		}
	}
</style>
