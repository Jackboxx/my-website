<script lang="ts">
	export let header = '';
	export let points: string[] = [];
</script>

<div class="text-xl text-text-dark lg:text-3xl">{header}</div>
<div class="flex flex-col sm:items-center">
	{#each points as point}
		<div class="m-2 text-left text-lg sm:-w-half-full lg:text-xl">
			{point}
		</div>
	{/each}
</div>
