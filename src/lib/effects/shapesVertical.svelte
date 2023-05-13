<div class="flex h-full w-full max-w-[800px] gap-1 sm:gap-2 md:gap-3">
	<div class="flex w-[60%] flex-col gap-1 sm:gap-2 md:gap-3">
		<div class="flex h-[85%] flex-col gap-1 sm:gap-2 md:gap-3">
			<div class="panel-parent h-[80%]">
				<div class="panel h-full rounded-sm bg-primary-light dark:bg-primary-dark" />
			</div>
			<div class="flex h-[20%] gap-1 sm:gap-2 md:gap-3">
				<div class="panel-parent w-[60%]">
					<div
						class="panel h-full rounded-sm bg-secondary-light dark:bg-secondary-dark"
					/>
				</div>
				<div class="panel-parent w-[40%]">
					<div class="panel h-full rounded-sm bg-accent-light dark:bg-accent-dark" />
				</div>
			</div>
		</div>
		<div class="panel-parent h-[15%]">
			<div class="panel h-full rounded-sm bg-secondary-light dark:bg-secondary-dark" />
		</div>
	</div>
	<div class="flex aspect-[1/2] w-[40%] flex-col gap-1 sm:gap-2 md:gap-3">
		<div class="flex h-[30%] gap-1 sm:gap-2 md:gap-3">
			<div class="panel-parent w-[20%]">
				<div class="panel h-full rounded-sm bg-accent-light dark:bg-accent-dark" />
			</div>
			<div class="panel-parent w-[80%]">
				<div class="panel h-full rounded-sm bg-secondary-light dark:bg-secondary-dark" />
			</div>
		</div>
		<div class="panel-parent h-[70%]">
			<div class="panel h-full rounded-sm bg-primary-light dark:bg-primary-dark" />
		</div>
	</div>
</div>

<style>
	.panel-parent:hover > .panel {
		transform: rotate3D(0, 1, 0, 180deg);
		transition: 400ms;
	}
</style>
