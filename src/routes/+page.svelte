<script>
	import WelcomeHeader from '$lib/effects/welcomeHeader.svelte';
	import Header from '$lib/page/header.svelte';
	import Project from '$lib/page/project.svelte';
	import AboutMe from '$lib/sections/aboutMe.svelte';
</script>

<WelcomeHeader />

<Header text={'About Me'} />
<AboutMe />

<div class="min-h-screen">
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
<Header text={'Skills & Experience'} />
<Header text={'Contact Me'} />
