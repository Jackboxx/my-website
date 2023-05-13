<script lang="ts">
	export let text: string;
</script>

<div
	class="flex
    h-[130px] items-center justify-center bg-secondary-dark dark:bg-secondary-dark md:h-[220px]"
>
	<span
		class="bg-gradient-to-bl from-primary-light to-accent-light bg-clip-text text-center
        text-3xl font-bold text-[#00000000] dark:from-primary-dark dark:to-accent-dark
        md:text-5xl">{text}</span
	>
</div>
