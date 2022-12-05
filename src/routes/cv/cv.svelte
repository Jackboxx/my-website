<script lang="ts">
	export let distancePercentage = 0;

	let element: HTMLDivElement;

	const onMouserOver = (e: MouseEvent) => {
		const distanceInElement = e.pageY - element.offsetTop;
		distancePercentage = distanceInElement / element.clientHeight;
	};
</script>

<div class="cvContainer" on:focus={() => {}} on:mouseover={onMouserOver} bind:this={element}>
	<div>
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
			<li class="bodyTextMedium">Experienced in creating video games with C#</li>
			<li class="bodyTextMedium">Knowledge of Java for Android</li>
			<li class="bodyTextMedium">Know-how for databases (MySQL, postgreSQL)</li>
		</ul>
	</div>
	<div class="section" />
</div>

<style>
	* {
		color: #fff;
	}

	:root {
		--gray: #292c30;
	}

	.cvContainer {
		width: 60%;
		min-height: 90vh;
		background: var(--gray);
		padding: 12px;
		margin: 0;
		margin-top: 100px;
		border-radius: 8px;
		box-shadow: -3px 3px 4px black;
	}

	.section {
		margin-top: 16px;
	}

	@media screen and (max-width: 1200px) {
		.cvContainer {
			width: 80%;
		}
	}

	@media screen and (max-width: 800px) {
		.cvContainer {
			width: 100%;
			border-radius: 0;
		}
	}
</style>
