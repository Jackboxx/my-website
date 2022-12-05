<script lang="ts">
	const transitionSeconds = 0.5;
	let currentUrl = '';
	let transitionClass: 'transition' | '' = '';
	let timeout: ReturnType<typeof setTimeout> | undefined = undefined;

	let headingElement: HTMLDivElement;
	let skillsElement: HTMLDivElement;
	let workHistoryElement: HTMLDivElement;
	let educationElement: HTMLDivElement;

	const onClick = (e: Event) => {
		matchElement(e.target as HTMLElement);
	};

	const onMouseEnter = (e: MouseEvent) => {
		matchElement(e.target as HTMLElement);
	};

	const matchElement = (element: HTMLElement) => {
		transitionClass = 'transition';
		switch (element) {
			case headingElement:
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					currentUrl = '';
					transitionClass = '';
				}, transitionSeconds * 1000);
				break;
			case skillsElement:
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					currentUrl = '/skills.jpg';
					transitionClass = '';
				}, transitionSeconds * 1000);
				break;
			case workHistoryElement:
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					currentUrl = './workHistory.jpg';
					transitionClass = '';
				}, transitionSeconds * 1000);
				break;
			case educationElement:
				clearTimeout(timeout);
				timeout = setTimeout(() => {
					currentUrl = '/education.jpg';
					transitionClass = '';
				}, transitionSeconds * 1000);
				break;
			default:
				transitionClass = '';
				break;
		}
	};
</script>

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

	<div
		class="backgroundContainer {transitionClass}"
		style="--img-url: url({currentUrl}); --transition-duration: {transitionSeconds}s;"
	/>
</div>

<style>
	* {
		color: #232427;
	}

	:root {
		--color: #fff;
	}

	.container {
		margin: 0;
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: start;
	}

	.backgroundContainer {
		flex: 50%;
		background-image: var(--img-url);
		background-size: cover;
		background-repeat: no-repeat;
		opacity: 0.5;
		transition: var(--transition-duration) opacity cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.backgroundContainer.transition {
		background-position-y: 100vh;
		opacity: 0;
		transition: var(--transition-duration) cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.cvContainer {
		flex: 50%;
		min-height: 100vh;
		background: var(--color);
		padding: 12px;
	}

	.section {
		margin-top: 16px;
	}
</style>
