<script>
	import WelcomeHeader from '$lib/effects/welcomeHeader.svelte';
	import Header from '$lib/page/header.svelte';
	import Project from '$lib/page/project.svelte';
	import AboutMe from '$lib/sections/aboutMe.svelte';
	import SkillsAndExperience from '$lib/sections/skillsAndExperience.svelte';
</script>

<WelcomeHeader />

<Header text={'About Me'} />
<AboutMe />

<div class="m-52 lg:m-80" />

<Header text={'Projects'} />
<Project
	title="Vocal"
	link="https://github.com/Jackboxx/vocal"
	image="/img/vocal.png"
	reverse={true}
/>
<Project
	title="Rust CLI Tools"
	link="https://github.com/stars/Jackboxx/lists/rust-cli-tools"
	image="/img/rust-cli-tools.png"
	reverse={false}
/>

<div class="m-52 lg:m-80" />

<Header text={'Skills & Experience'} />
<SkillsAndExperience />

<Header text={'Contact Me'} />
