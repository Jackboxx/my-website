<script lang="ts">
	export let header = '';
	export let points: string[] = [];
</script>

<div class="text-white text-xl lg:text-3xl">{header}</div>
<div class="flex sm:items-center flex-col">
	{#each points as point}
		<div class="sm:-w-half-full text-left text-white text-lg lg:text-xl m-2">
			{point}
		</div>
	{/each}
</div>
