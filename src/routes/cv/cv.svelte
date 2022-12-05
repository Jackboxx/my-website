<script lang="ts">
	import ImagePanel from './imagePanel.svelte';

	type Panel = {
		url: string;
		isShown: boolean;
	};

	let windowHeight = 0;
	let transitionDirection = 1;

	const headingUrl = '';
	const skillsUrl = '/skills.jpg';
	const workHistoryUrl = '/workHistory.jpg';
	const educationUrl = '/education.jpg';

	let panels: Panel[] = [
		{
			url: headingUrl,
			isShown: true
		},
		{
			url: skillsUrl,
			isShown: false
		},
		{
			url: workHistoryUrl,
			isShown: false
		},
		{
			url: educationUrl,
			isShown: false
		}
	];

	let headingElement: HTMLDivElement;
	let skillsElement: HTMLDivElement;
	let workHistoryElement: HTMLDivElement;
	let educationElement: HTMLDivElement;

	let currentElement: HTMLElement;

	const onClick = (e: Event) => {
		matchElement(e.target as HTMLElement);
	};

	const onMouseEnter = (e: MouseEvent) => {
		matchElement(e.target as HTMLElement);
	};

	const matchElement = (element: HTMLElement) => {
		transitionDirection = element.offsetTop - currentElement?.offsetTop > 0 ? 1 : -1;
		currentElement = element;
		switch (element) {
			case headingElement:
				panels = panels.map((p) => {
					return { url: p.url, isShown: p.url === headingUrl };
				});
				break;
			case skillsElement:
				panels = panels.map((p) => {
					return { url: p.url, isShown: p.url === skillsUrl };
				});
				break;
			case workHistoryElement:
				panels = panels.map((p) => {
					return { url: p.url, isShown: p.url === workHistoryUrl };
				});
				break;
			case educationElement:
				panels = panels.map((p) => {
					return { url: p.url, isShown: p.url === educationUrl };
				});
				break;
		}
	};
</script>

<svelte:window bind:innerHeight={windowHeight} />

<div class="container">
	<div class="cvContainer">
		<div
			class="section"
			bind:this={headingElement}
			on:click={onClick}
			on:keypress={() => undefined}
			on:mouseenter={onMouseEnter}
		>
			<div class="headingTextLarge">Lucy Gschwantner</div>
			<ul>
				<li class="bodyTextMedium">email: lucygschwantner@gmail.com</li>
				<li class="bodyTextMedium">github: https://github.com/Jackboxx</li>
			</ul>
		</div>
		<div
			class="section"
			bind:this={skillsElement}
			on:click={onClick}
			on:keypress={() => undefined}
			on:mouseenter={onMouseEnter}
		>
			<div class="headingTextMedium">Skills</div>
			<ul>
				<li class="bodyTextMedium">JavaScript and Typescript programming in Node and React</li>
				<li class="bodyTextMedium">Experience in creating REST APIs</li>
				<li class="bodyTextMedium">
					Rust development, mainly with web sockets and server-client communication
				</li>
				<li class="bodyTextMedium">Experienced in creating video games with C#</li>
				<li class="bodyTextMedium">Knowledge of Java for Android</li>
				<li class="bodyTextMedium">Know-how for databases (MySQL, postgreSQL)</li>
			</ul>
		</div>
		<div
			class="section"
			bind:this={workHistoryElement}
			on:click={onClick}
			on:keypress={() => undefined}
			on:mouseenter={onMouseEnter}
		>
			<div class="headingTextMedium">Work History</div>
			<ul>
				<li class="bodyTextMedium">
					September 2022 - now: Software engineer at TimeTac GmbH, working on a React App that
					intrefaces with an internal API to create a time management plug-in for Jira
				</li>
				<li class="bodyTextMedium">
					July 2022 - August 2022: Employed as a software engineering intern at TimeTac GmbH working
					on the release of their updated web app
				</li>
			</ul>
		</div>
		<div
			class="section"
			bind:this={educationElement}
			on:click={onClick}
			on:keypress={() => undefined}
			on:mouseenter={onMouseEnter}
		>
			<div class="headingTextMedium">Education</div>
			<ul>
				<li class="bodyTextMedium">2020 - now: HTBLA-Kaindorf (IT branch)</li>
				<li class="bodyTextMedium">2016 - 2020: MS1 Leibnitz</li>
			</ul>
		</div>
	</div>
	{#each panels as panel}
		{#if panel.isShown}
			<ImagePanel url={panel.url} distance={1.5 * windowHeight * transitionDirection} />
		{/if}
	{/each}
</div>

<style>
	* {
		color: #232427;
	}

	:root {
		--color: #fff;
	}

	.container {
		position: relative;
		margin: 0;
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: start;
	}

	.cvContainer {
		width: 50%;
		min-height: 100vh;
		background: var(--color);
		padding: 12px;
	}

	.section {
		margin-top: 16px;
	}
</style>
