<script lang="ts" context="module">
	async function wait(delayMs: number) {
		return new Promise((resolve) => {
			setTimeout(resolve, delayMs);
		});
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let parentWidthPx: number;
	export let parentHeightPx: number;
	export let speed = 5;

	let x = 0;
	let y = 0;

	const trail = [
		{ x: 0.0, y: 0.0 },
		{ x: 0.0, y: 0.0 },
		{ x: 0.0, y: 0.0 },
		{ x: 0.0, y: 0.0 },
		{ x: 0.0, y: 0.0 },
		{ x: 0.0, y: 0.0 },
		{ x: 0.0, y: 0.0 }
	];

	onMount(() => {
		x = Math.floor(Math.random() * parentWidthPx + parentWidthPx);
		y = Math.floor(Math.random() * -parentHeightPx * 0.5);
		trail.forEach((_, i) => {
			trail[i] = { x: x, y: y };
		});
	});

	setInterval(async () => {
		x -= speed;
		y += speed;
		updateTrail();

		if (x < -500 || y > parentHeightPx) {
			x = Math.floor(Math.random() * 2 * parentWidthPx);
			y = Math.floor(
				Math.random() * parentHeightPx * 2 - parentHeightPx * (x >= parentWidthPx ? 1 : 2)
			);
			trail.forEach((_, i) => {
				trail[i] = { x: x, y: y };
			});

			await wait(Math.floor(Math.random() * 500));
		}
	}, 10);

	function updateTrail() {
		let nx = x;
		let ny = y;
		trail.forEach((_, i) => {
			trail[i] = { x: nx, y: ny };

			const nextTrail = trail[i + 1];
			if (nextTrail) {
				nx += (nextTrail.x - x) * 0.3;
				ny += (nextTrail.y - y) * 0.3;
			}
		});
	}

	function onMouseDown(e: MouseEvent) {
		const mx = e.clientX;
		const my = e.clientY;

		const repellingX = x + 100 - mx;
		const repellingY = y + 100 - my;

		const length = Math.sqrt(repellingX * repellingX + repellingY * repellingY);

		const normalX = repellingX / length;
		const normalY = repellingY / length;

		const repellyingMultiplier = 20;

		x += normalX * repellyingMultiplier;
		y += normalY * repellyingMultiplier;
		updateTrail();
	}
</script>

<div
	on:mouseover={onMouseDown}
	on:focus={undefined}
	class="absolute h-[200px] w-[200px]"
	style={`top: ${y}px; left: ${x}px`}
>
	{#each Array(trail.length) as _, i}
		<div
			class="shootingStar absolute h-[5px] w-[5px] rounded-[50%]"
			style={`top: ${trail[i].y - y + 100}px; left: ${
				trail[i].x - x + 100
			}px; --shadow-size: 4px; transform: scale(${
				((trail.length - i) / trail.length) * 100
			}%)`}
		/>
	{/each}
</div>

<style>
	.shootingStar {
		background-color: white;
		box-shadow: 0 0 0 calc(var(--shadow-size)) rgba(255, 255, 255, 0.1),
			0 0 0 calc(var(--shadow-size) * 2) rgba(255, 255, 255, 0.1),
			0 0 calc(var(--shadow-size) * 5) rgba(255, 255, 255, 1);
	}
</style>
