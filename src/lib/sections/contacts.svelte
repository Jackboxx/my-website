<script lang="ts">
	export let email: string;
	export let github: string;
	export let linkedIn: string;
</script>

<div class="m-4 flex justify-around bg-bg-light p-4 shadow-2xl dark:bg-bg-dark lg:m-16">
	<div class="mb-4 flex w-[50%] flex-col items-center gap-4">
		<a
			class="w-48 rounded border-2 border-[#00000000] bg-primary-light p-4 text-center text-lg font-bold text-text-dark duration-150 hover:border-primary-light hover:bg-[#00000000] hover:text-primary-light dark:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-primary-dark lg:w-80 lg:rounded-lg
            lg:text-3xl"
			href={`mailto:${email}`}>Email</a
		>
		<a
			class="w-48 rounded border-2 border-[#00000000] bg-primary-light p-4 text-center text-lg font-bold text-text-dark duration-150 hover:border-primary-light hover:bg-[#00000000] hover:text-primary-light dark:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-primary-dark lg:w-80 lg:rounded-lg
            lg:text-3xl"
			href={github}
			target="_blank">GitHub</a
		>
		<a
			class="w-48 rounded border-2 border-[#00000000] bg-primary-light p-4 text-center text-lg font-bold text-text-dark duration-150 hover:border-primary-light hover:bg-[#00000000] hover:text-primary-light dark:bg-primary-dark dark:hover:border-primary-dark dark:hover:text-primary-dark lg:w-80 lg:rounded-lg
            lg:text-3xl"
			href={linkedIn}
			target="_blank">LinkedIn</a
		>
	</div>
</div>
