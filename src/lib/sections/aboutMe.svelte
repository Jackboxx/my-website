<script>
	import ShapesHorizontal from '$lib/effects/shapesHorizontal.svelte';
</script>

<div class="m-4 mt-2 p-4 shadow-2xl lg:m-16">
	<div class="flex flex-grow flex-col items-start justify-between gap-2 lg:flex-row">
		<div class="flex w-full justify-center lg:w-[50%]">
			<div
				class="max-w-[1200px] text-lg text-text-light
                dark:text-text-dark lg:text-xl 2xl:text-3xl"
			>
				I'm a software developer currently based in Styria. I love working on software
				related projects and tinkering with my development environment in my free time.
				<br />
				At the moment I am working at TimeTac (a time management software company) as a frontend
				web developer using TypeScript, React, and Redux. Since I work fully remote at this
				job my communication abilities are key to a successful business relationship.
				<br />
				Lastly, I've been enjoying using Rust
				<img class="inline h-7 2xl:h-9" alt="" src="/img/ferris-happy.svg" />
				to write development tools (you can see some of those in the "Projects" section below).
			</div>
		</div>
		<div class="flex w-full justify-end lg:w-[50%]">
			<ShapesHorizontal />
		</div>
	</div>
</div>
