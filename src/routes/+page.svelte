<script>
	import FancyText from '$lib/effects/fancyText.svelte';
	import Header from '$lib/page/header.svelte';
	import Project from '$lib/page/project.svelte';
	import Section from '$lib/page/section.svelte';
	import Separator from '$lib/utils/separator.svelte';
</script>

<div class="h-screen">
	<div class="stars flex h-full items-center justify-center overflow-x-hidden">
		<FancyText />
	</div>

	<Header text={'CV'} />

	<div class="item-center flex justify-center">
		<div class="m-8 overflow-y-auto rounded bg-secondary p-8 shadow-xl sm:m-16 sm:p-16">
			<Separator />

			<Section
				header={'Skills:'}
				points={[
					'JavaScript and Typescript programming in Node and React',
					'Experience in creating and documenting REST APIs',
					'Rust development with web sockets and server-client communication, CLI apps, and REST APIs',
					'Experienced in creating video games with C#',
					'Intermidiate database Know-how (mainly MySQL, postgreSQL)'
				]}
			/>

			<Separator />

			<Section
				header={'Experience:'}
				points={[
					'September 2022-now: Software engineer at TimeTac GmbH, working on a React App that' +
						' interfaces with an internal API to create a time management plug-in for Jira',
					'July 2022-August 2022: Employed as a software engineering intern at TimeTac GmbH working' +
						' on the release of their updated web app'
				]}
			/>

			<Separator />

			<Section
				header={'Education:'}
				points={['2020 - now: HTBLA-Kaindorf (IT branch)', '2016 - 2020: MS1 Leibnitz']}
			/>
			<Separator />
		</div>
	</div>

	<Header text={'Projects'} />

	<div class="w-100 m-8 flex flex-wrap items-center justify-around gap-8">
		<Project
			title={'Personal blog website'}
			link={'https://lucys-terminal.com'}
			image={'/img/blog.png'}
		/>
		<Project
			title={'Vocal, a CLI audio player'}
			link={'https://github.com/Jackboxx/vocal'}
			image={'/img/vocal.png'}
		/>
	</div>
</div>

<style>
	.stars {
		background-image: -webkit-gradient(
				radial,
				50% 50%,
				2,
				50% 50%,
				4,
				from(white),
				color-stop(0.1, rgba(248, 255, 128, 0.5)),
				to(transparent)
			),
			-webkit-gradient(radial, 50% 50%, 1, 50% 50%, 3, from(white), color-stop(0.1, rgba(255, 186, 170, 0.4)), to(transparent)),
			-webkit-gradient(radial, 50% 50%, 1, 50% 50%, 4, from(rgba(255, 255, 255, 0.9)), color-stop(0.05, rgba(251, 255, 186, 0.3)), to(transparent)),
			-webkit-gradient(radial, 50% 50%, 0, 50% 50%, 3, from(rgba(255, 255, 255, 0.4)), color-stop(0.03, rgba(253, 255, 219, 0.2)), to(transparent));

		background-image: -moz-radial-gradient(
				circle,
				#fff 2px,
				rgba(248, 255, 128, 0.5) 2px,
				transparent 5px
			),
			-moz-radial-gradient(circle, #fff 1px, rgba(255, 186, 170, 0.4) 3px, transparent 3px),
			-moz-radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, rgba(251, 255, 186, 0.3)
						2px, transparent 4px),
			-moz-radial-gradient(circle, rgba(255, 255, 255, 0.9) 1px, rgba(251, 255, 186, 0.3)
						2px, transparent 4px),
			-moz-radial-gradient(circle, rgba(255, 255, 255, 0.4), rgba(253, 255, 219, 0.2) 1px, transparent
						3px);

		background-size: 550px 550px, 350px 350px, 250px 270px, 220px 200px;
		background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;

		animation-name: movement;
		animation-duration: 15s;
		animation-timing-function: linear;
		animation-iteration-count: infinite;
		-moz-animation-name: movement;
		-moz-animation-duration: 15;
		-moz-animation-timing-function: linear;
		-moz-animation-iteration-count: infinite;
		-webkit-animation-name: movement;
		-webkit-animation-duration: 15s;
		-webkit-animation-timing-function: linear;
		-webkit-animation-iteration-count: infinite;
	}

	@keyframes movement {
		from {
			background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
		}

		to {
			background-position: -550px 0, -320px 60px, -120px 270px, -150px 150px;
		}
	}

	@-moz-keyframes movement {
		from {
			background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
		}

		to {
			background-position: -550px 0, -320px 60px, -120px 270px, -150px 150px;
		}
	}

	@-webkit-keyframes movement {
		from {
			background-position: 0 0, 30px 60px, 130px 270px, 70px 150px;
		}

		to {
			background-position: -550px 0, -320px 60px, -120px 270px, -150px 150px;
		}
	}
</style>
