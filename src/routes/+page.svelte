<script>
	import WelcomeHeader from '$lib/effects/welcomeHeader.svelte';
	import Header from '$lib/page/header.svelte';
	import AboutMe from '$lib/sections/aboutMe.svelte';
	import SkillsAndExperience from '$lib/sections/skillsAndExperience.svelte';
</script>

<WelcomeHeader />

<div class="min-h-screen">
	<Header text={'About Me'} />
	<AboutMe />
</div>

<Header text={'Projects'} />

<div class="min-h-screen">
	<Header text={'Skills & Experience'} />
	<SkillsAndExperience />
</div>

<Header text={'Contact Me'} />
