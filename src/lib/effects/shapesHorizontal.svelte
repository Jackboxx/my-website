<div class="flex h-full w-full max-w-[1200px] flex-col gap-1 sm:gap-2 md:gap-3">
	<div class="flex gap-1 sm:gap-2 md:gap-3">
		<div class="panel-parent aspect-video w-[68%]">
			<div class="panel h-full rounded bg-primary-light dark:bg-primary-dark" />
		</div>
		<div class="flex w-[15%] flex-col gap-1 sm:gap-2 md:gap-3">
			<div class="panel-parent h-[30%]">
				<div class="panel h-full rounded bg-accent-light dark:bg-accent-dark" />
			</div>
			<div class="panel-parent h-[70%]">
				<div
					class="panel h-full flex-grow rounded bg-secondary-light dark:bg-secondary-dark"
				/>
			</div>
		</div>
		<div class="panel-parent w-[15%]">
			<div class="panel h-full rounded bg-secondary-light dark:bg-secondary-dark" />
		</div>
		<div class="panel-parent w-[3%]">
			<div class="panel h-full rounded bg-primary-light dark:bg-primary-dark" />
		</div>
	</div>
	<div class="flex h-[60px] gap-1 sm:gap-2 md:gap-3">
		<div class="panel-parent w-[20%]">
			<div class="panel h-full rounded bg-secondary-light dark:bg-secondary-dark" />
		</div>
		<div class="panel-parent w-[80%]">
			<div class="panel h-full rounded bg-accent-light dark:bg-accent-dark" />
		</div>
	</div>
</div>

<style>
	.panel-parent:hover > .panel {
		transform: rotate3D(1, 0, 0, 180deg);
		transition: 400ms;
	}
</style>
