<script lang="ts">
	import ShapesVertical from '$lib/effects/shapesVertical.svelte';

	let skills: { skill: string; subSkills: string[] }[] = [
		{ skill: 'Frontend', subSkills: ['TypeScript', 'React', 'Redux', 'Svelte'] },
		{ skill: 'Linux/Development', subSkills: ['Git', 'Ansible', 'shell scripts'] },
		{
			skill: 'Rust',
			subSkills: [
				'API programming (actix_web, tokio)',
				'CLI tool development (clap, tui-rs)'
			]
		},
		{
			skill: 'Golang',
			subSkills: ['REST API development']
		},
        {
            skill: 'Databases', subSkills: ['MySQL', 'PostgreSQL', 'MongoDB']
        },
	];
</script>

<div class="m-4 mt-2 p-4 shadow-2xl lg:m-16">
	<div
		class="flex flex-grow flex-col items-start justify-between gap-2 lg:flex-row-reverse"
	>
		<div class="w-full lg:w-[50%]">
			<div
				class="grid max-w-[1200px] grid-cols-1 text-lg
                text-text-light dark:text-text-dark sm:grid-cols-2 lg:text-xl 2xl:text-3xl"
			>
				{#each skills as skill}
					<div class="m-4">
						<div class="w-fit rounded px-4 py-1 font-bold">
							{skill.skill}
						</div>
						<ul class="list-inside list-disc">
							{#each skill.subSkills as subSkill}
								<li
									class="text-md ml-4 lg:text-lg
                                    2xl:text-xl"
								>
									{subSkill}
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex w-full justify-start lg:w-[50%]">
			<ShapesVertical />
		</div>
	</div>
</div>
