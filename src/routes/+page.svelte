<script>
	import WelcomeHeader from '$lib/effects/welcomeHeader.svelte';
	import Header from '$lib/page/header.svelte';
	import Project from '$lib/page/project.svelte';
	import Section from '$lib/page/section.svelte';
	import Separator from '$lib/utils/separator.svelte';
</script>

<WelcomeHeader />

<Header text={'CV'} />

<div class="item-center flex justify-center">
	<div
		class="m-8 overflow-y-auto rounded bg-secondary-light p-8 shadow-xl dark:bg-secondary-dark sm:m-16 sm:p-16"
	>
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
