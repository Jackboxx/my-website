<script>
	import FancyText from './fancyText.svelte';

	import Section from './section.svelte';
	import Separator from './separator.svelte';
</script>

<div class="flex justify-center">
	<div class="m-8 sm:m-16 h-48 w-full max-w-2xl lg:h-64">
		<FancyText />
	</div>
</div>

<div class="bg-zinc-800 h-32" />

<div class="m-8 p-8 sm:m-16 sm:p-16 bg-zinc-800">
	<Section
		header={'Skills:'}
		points={[
			'JavaScript and Typescript programming in Node and React',
			'Experience in creating REST APIs',
			'Rust development, mainly with web sockets and server-cdivent communication',
			'Experienced in creating video games with C#',
			'Knowledge of Java for Android',
			'Know-how for databases (MySQL, postgreSQL)'
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
</div>

<div class="bg-zinc-800 h-32" />
