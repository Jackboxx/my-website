<script lang="ts">
	export let text: string;
</script>

<div
	class="m-5 flex
    items-center justify-center bg-bg-light dark:bg-bg-dark"
>
	<span
		class="bg-gradient-to-bl from-primary-light to-secondary-light bg-clip-text text-center font-sans
        text-3xl font-bold text-[#00000000] dark:from-primary-dark dark:to-secondary-dark
        md:text-5xl">{text}</span
	>
</div>
