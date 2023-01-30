<script>
	import FancyText from './fancyText.svelte';
	import Header from './header.svelte';
	import Project from './project.svelte';

	import Section from './section.svelte';
	import Separator from './separator.svelte';
</script>

<div class="snap-mandatory snap-y overflow-y-scroll h-screen ">
	<div class="snap-center snap-always h-full flex items-center justify-center h-full">
		<FancyText />
	</div>

	<div class="snap-center snap-always h-full">
		<Header text={'CV'} />
	</div>

	<div class="snap-center snap-always h-full flex item-center justify-center">
		<div class="shadow-xl m-8 p-8 sm:m-16 sm:p-16 bg-neutral-900 rounded overflow-y-auto">
			<Separator />

			<Section
				header={'Skills:'}
				points={[
					'JavaScript and Typescript programming in Node and React',
					'Experience in creating and documenting REST APIs',
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
			<Separator />
		</div>
	</div>

	<div class="snap-center snap-always h-full">
		<Header text={'Projects'} />
	</div>

	<div class="snap-center snap-always h-full">
		<div class="w-100 flex flex-wrap h-full justify-around items-center m-8 sm:m-16 overflow-auto">
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
</div>
