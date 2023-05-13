<script>
	import WelcomeHeader from '$lib/effects/welcomeHeader.svelte';
	import Header from '$lib/page/header.svelte';
	import AboutMe from '$lib/sections/aboutMe.svelte';
	import SkillsAndExperience from '$lib/sections/skillsAndExperience.svelte';
</script>

<WelcomeHeader />

<Header text={'About Me'} />
<AboutMe />

<Header text={'Projects'} />

<Header text={'Skills & Experience'} />
<SkillsAndExperience />

<Header text={'Contact Me'} />
