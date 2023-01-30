<script lang="ts">
	export let text: string;
</script>

<div class="bg-neutral-900 h-full bg-opacity-90 flex justify-center items-center">
	<span class="glow text-center font-bold text-6xl select-none">{text}</span>
</div>

<style>
	.glow {
		-webkit-animation: glow 1s ease-in-out infinite alternate;
		-moz-animation: glow 1s ease-in-out infinite alternate;
		animation: glow 1s ease-in-out infinite alternate;
	}

	@keyframes glow {
		from {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ea580c, 0 0 40px #ea580c,
				0 0 50px #ea580c, 0 0 30px #ea580c, 0 0 40px #ea580c;
		}
		to {
			text-shadow: 0 0 20px #fff, 0 0 30px #ea580c, 0 0 40px #ea580c, 0 0 50px #ea580c,
				0 0 30px #ea580c, 0 0 40px #ea580c, 0 0 50px #ea580c;
		}
	}

	@-moz-keyframes glow {
		from {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ea580c, 0 0 40px #ea580c,
				0 0 50px #ea580c, 0 0 30px #ea580c, 0 0 40px #ea580c;
		}
		to {
			text-shadow: 0 0 20px #fff, 0 0 30px #ea580c, 0 0 40px #ea580c, 0 0 50px #ea580c,
				0 0 30px #ea580c, 0 0 40px #ea580c, 0 0 50px #ea580c;
		}
	}

	@-webkit-keyframes glow {
		from {
			text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #ea580c, 0 0 40px #ea580c,
				0 0 50px #ea580c, 0 0 30px #ea580c, 0 0 40px #ea580c;
		}
		to {
			text-shadow: 0 0 20px #fff, 0 0 30px #ea580c, 0 0 40px #ea580c, 0 0 50px #ea580c,
				0 0 30px #ea580c, 0 0 40px #ea580c, 0 0 50px #ea580c;
		}
	}
</style>
