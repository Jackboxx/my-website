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
	Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Vitae tortor
	condimentum lacinia quis vel. Eget egestas purus viverra accumsan in nisl. Fermentum
	iaculis eu non diam phasellus. Semper quis lectus nulla at. Sapien faucibus et molestie
	ac feugiat. Facilisis volutpat est velit egestas dui. Cursus vitae congue mauris rhoncus
	aenean. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Faucibus
	ornare suspendisse sed nisi lacus sed viverra.
</Project>

<Project
	title="Rust CLI Tools"
	link="https://github.com/stars/Jackboxx/lists/rust-cli-tools"
	image="/img/rust-cli-tools.png"
	reverse={false}
>
	Posuere morbi leo urna molestie at elementum eu facilisis sed. Aliquam sem fringilla ut
	morbi. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Enim nec dui nunc
	mattis enim ut tellus elementum. Pharetra sit amet aliquam id diam maecenas. Tellus id
	interdum velit laoreet id donec ultrices tincidunt arcu. Nunc id cursus metus aliquam.
	Malesuada fames ac turpis egestas. Sit amet porttitor eget dolor morbi non. Eu feugiat
	pretium nibh ipsum consequat nisl.
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
