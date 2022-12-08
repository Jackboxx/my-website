<script lang="ts">
	import ImageSlideShow from './imageSlideShow.svelte';

	const images = [
		'/img/heading.jpg',
		'/img/skills.jpg',
		'/img/workHistory.jpg',
		'/img/education.jpg'
	];

	let cvElement: HTMLElement;
	let percentage = 0;

	const onMouseMove = (event: MouseEvent) => {
		const topOffset = cvElement.getBoundingClientRect().top;
		percentage = (event.clientY - topOffset) / cvElement.clientHeight;
	};
</script>

<div class="container">
	<div class="cvContainer" on:mousemove={onMouseMove} bind:this={cvElement}>
		<div class="section">
			<div class="headingTextLarge">Lucy Gschwantner</div>
			<ul>
				<li class="bodyTextMedium">email: lucygschwantner@gmail.com</li>
				<li class="bodyTextMedium">github: https://github.com/Jackboxx</li>
			</ul>
		</div>
		<div class="section">
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
		<div class="section">
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
		<div class="section">
			<div class="headingTextMedium">Education</div>
			<ul>
				<li class="bodyTextMedium">2020 - now: HTBLA-Kaindorf (IT branch)</li>
				<li class="bodyTextMedium">2016 - 2020: MS1 Leibnitz</li>
			</ul>
		</div>
	</div>
	<div class="slideContainer">
		<ImageSlideShow {images} {percentage} />
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

	@media screen and (max-width: 1000px) {
		.cvContainer {
			width: 100%;
		}

		.slideContainer {
			display: none;
		}
	}
</style>
