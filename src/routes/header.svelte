<script lang="ts">
	export let text: string;
</script>

<div
	class="box flex h-[350px] items-center justify-center bg-gradient-to-r from-pink-600 to-orange-600 sm:h-[500px]"
>
	<span class="select-none text-center text-6xl font-bold">{text}</span>
</div>

<style>
	.box {
		--mask: radial-gradient(134.16px at 50% 180px, #000 99%, #0000 101%) calc(50% - 120px)
				0/240px 51% repeat-x,
			radial-gradient(134.16px at 50% -120px, #0000 99%, #000 101%) 50% 60px/240px
				calc(51% - 60px) repeat-x,
			radial-gradient(134.16px at 50% calc(100% - 180px), #000 99%, #0000 101%)
				calc(50% - 120px) 100%/240px 51% repeat-x,
			radial-gradient(134.16px at 50% calc(100% + 120px), #0000 99%, #000 101%) 50%
				calc(100% - 60px) / 240px calc(51% - 60px) repeat-x;
		-webkit-mask: var(--mask);
		mask: var(--mask);
	}

	@media screen and (max-width: 600px) {
		.box {
			--mask: radial-gradient(67.08px at 50% 90px, #000 99%, #0000 101%) calc(50% - 60px)
					0/120px 51% repeat-x,
				radial-gradient(67.08px at 50% -60px, #0000 99%, #000 101%) 50% 30px/120px
					calc(51% - 30px) repeat-x,
				radial-gradient(67.08px at 50% calc(100% - 90px), #000 99%, #0000 101%)
					calc(50% - 60px) 100%/120px 51% repeat-x,
				radial-gradient(67.08px at 50% calc(100% + 60px), #0000 99%, #000 101%) 50%
					calc(100% - 30px) / 120px calc(51% - 30px) repeat-x;
			-webkit-mask: var(--mask);
			mask: var(--mask);
		}
	}
</style>
