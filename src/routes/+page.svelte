<script>
	import WelcomeHeader from '$lib/effects/welcomeHeader.svelte';
	import Header from '$lib/page/header.svelte';
	import Project from '$lib/page/project.svelte';
	import AboutMe from '$lib/sections/aboutMe.svelte';
	import Contacts from '$lib/sections/contacts.svelte';
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
>
	Vocal is a terminal based user interface that plays audio and music and looks cool while
	doing it. I wrote this project using the <a
		target="_blank"
		href="https://crates.io/crates/tui">tui-rs</a
	>
	Rust crate to create the UI and other crates like
	<a href="https://crates.io/crates/rodio" target="_blank">rodio</a>
	to manage music playback. <br />
	The whole project is available as an open-source project on GitHub along with up to date
	documentation on how to configure the interface and functionality to your liking. <br />
</Project>

<Project
	title="Rust CLI Tools"
	link="https://github.com/stars/Jackboxx/lists/rust-cli-tools"
	image="/img/rust-cli-tools.png"
	reverse={false}
>
	This is an ever growing list of command line tools I wrote either for fun or to solve
	some problem I had with the way I work. <br />
	Currently my favorite one has to be
	<a target="_blank" href="https://github.com/Jackboxx/archwiki-rs">archwiki-rs</a>
	which is a small utility I made to fetch pages from the
	<a href="https://wiki.archlinux.org/" target="_blank">ArchWiki</a>. I often found myself
	needing to look up a command or file location in the ArchWiki but I had to navigate to
	the website and search for the page I needed every time... <br />
	So I made a CLI web-scrapper that gets the contents of a particular page directly into my
	terminal + it shows me recommendations for page titles in case a page I am looking for does
	not exist.
</Project>

<div class="m-52 lg:m-80" />

<Header text={'Skills & Experience'} />
<SkillsAndExperience />

<div class="m-52 lg:m-80" />

<Header text={'Contacts'} />
<Contacts
	email="lucygschwantner@gmail.com"
	github="https://github.com/Jackboxx"
	linkedIn="https://www.linkedin.com/in/moritz-gschwantner-340142251/"
/>
