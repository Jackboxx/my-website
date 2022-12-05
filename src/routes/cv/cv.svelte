<script lang="ts">
	const positionMap = new Map();
	positionMap.set('header', { x: 0, y: 0 });
	positionMap.set('skills', { x: 100, y: 100 });
	positionMap.set('workHistory', { x: 500, y: -500 });
	positionMap.set('education', { x: -200, y: 300 });

	let currentPosition: { x: number; y: number } = { x: 0, y: 0 };
	let cvWidth = 0;

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
		switch (element) {
			case headingElement:
				currentPosition = positionMap.get('header');
				break;
			case skillsElement:
				currentPosition = positionMap.get('skills');
				break;
			case workHistoryElement:
				currentPosition = positionMap.get('workHistory');
				break;
			case educationElement:
				currentPosition = positionMap.get('education');
				break;
		}
	};
</script>

<div
	class="container"
	style="--positionX: {currentPosition.x + cvWidth}px; --positionY: {currentPosition.y}px"
>
	<div class="cvContainer" bind:clientWidth={cvWidth}>
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
		background-image: url('/stars.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		background-size: 400%;
		background-position-x: var(--positionX);
		background-position-y: var(--positionY);
		transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
	}

	.cvContainer {
		width: 50%;
		min-height: 90vh;
		background: var(--color);
		padding: 12px;
		margin: 8px;
		border-radius: 8px;
	}

	.section {
		margin-top: 16px;
	}
</style>
