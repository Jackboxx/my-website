<script>
	import ShapePile from '$lib/effects/shapePile.svelte';
</script>

<div class="m-16 flex flex-col p-4 shadow-2xl">
	<div class="m-4 text-center text-3xl text-text-light dark:text-text-dark md:text-5xl">
		About Me
	</div>
	<div class="flex flex-grow items-center justify-around">
		<div class="flex-grow text-text-light dark:text-text-dark">hi I me</div>
		<div class="flex-grow">
			<ShapePile />
		</div>
	</div>
</div>
