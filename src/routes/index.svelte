<script>
	import Counter from '$lib/Counter.svelte';

	var index = 0;

	function back() {
		if (index === 0) {
			return;
		}
		index = index - 1;
	}

	function next() {
		if (index === 4) {
			return;
		}
		index = index + 1;
	}
</script>

<svelte:head>
	<title>Hello world!</title>
</svelte:head>

<main>
	<h1>Coding club!</h1>

	<div class="carousel">
		<img class={index === 0 ? 'visible' : ''} src="/title.png" alt="Title" />
		<img class={index === 1 ? 'visible' : ''} src="/back_to_the_code.png" alt="Title" />
		<img class={index === 2 ? 'visible' : ''} src="/talk.png" alt="Title" />
		<img class={index === 3 ? 'visible' : ''} src="/message.png" alt="Title" />
		<img class={index === 4 ? 'visible' : ''} src="/suggestions.png" alt="Title" />
	</div>
	<button on:click={back}>Previous</button>
	<button on:click={next}>Next</button>
	<p>
		would you like to join my Coding club? we will learn how to use scrach most of you guys know how
		to use scrach... actually you all know how to do scrach so do you want to make bigger and better
		games? if so pls join my coding club and when you guys are ready we can use javaScript.react to
		code
	</p>

	<p>
		here is a little code on how to make a loop <code class=""
			>for (let i = 0;i &lt; 123;i=i+1)s&#123; if (i = alive)&#123 i.code&#125&#125</code
		> i will explain how to do this in my club and how to make other things like that
	</p>

	<div>if you would like to join my club pls put your name on the list below⬇️</div>
</main>

<style>
	img {
		display: none;
		width: 100%;
	}
	.visible {
		display: block;
	}
	main {
		font-size: 4vmax;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		background: url('stuff.png') no-repeat;
		background-attachment: fixed;
	}
	button {
		font-size: 4vmax;
		color: white;
		background: linear-gradient(
			90deg,
			rgba(2, 0, 36, 1) 19%,
			rgba(9, 9, 121, 1) 25%,
			rgba(40, 2, 202, 1) 31%,
			rgba(5, 42, 255, 1) 37%,
			rgba(61, 0, 255, 1) 48%,
			rgba(255, 2, 2, 1) 52%,
			rgba(255, 25, 25, 1) 63%,
			rgba(255, 0, 0, 1) 69%,
			rgba(255, 0, 0, 1) 74%,
			rgba(170, 0, 0, 1) 80%,
			rgba(0, 0, 0, 1) 100%
		);
	}

	h1 {
		background: -webkit-linear-gradient(
					90deg,
					rgba(0, 0, 0, 1) 0%,
					rgba(29, 0, 0, 1) 7%,
					rgba(91, 0, 5, 1) 12%,
					rgba(176, 0, 22, 1) 18%,
					rgba(219, 0, 0, 1) 24%,
					rgba(255, 0, 20, 1) 28%,
					rgba(255, 0, 0, 1) 33%,
					rgba(255, 0, 0, 1) 37%,
					rgba(255, 0, 16, 1) 42%,
					rgba(255, 0, 0, 1) 45%,
					rgba(1, 0, 255, 1) 54%,
					rgba(0, 27, 235, 1) 59%,
					rgba(0, 16, 217, 1) 64%,
					rgba(0, 28, 213, 1) 69%,
					rgba(0, 17, 208, 1) 73%,
					rgba(20, 0, 190, 1) 81%,
					rgba(35, 0, 138, 1) 88%,
					rgba(38, 13, 109, 1) 91%,
					rgba(0, 0, 0, 1) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		text-transform: uppercase;
		font-size: 10vmax;
		font-weight: 100;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	p {
		background: -webkit-linear-gradient(
					90deg,
					rgba(0, 0, 0, 1) 0%,
					rgba(29, 0, 0, 1) 7%,
					rgba(91, 0, 5, 1) 12%,
					rgba(176, 0, 22, 1) 18%,
					rgba(219, 0, 0, 1) 24%,
					rgba(255, 0, 20, 1) 28%,
					rgba(255, 0, 0, 1) 33%,
					rgba(255, 0, 0, 1) 37%,
					rgba(255, 0, 16, 1) 42%,
					rgba(255, 0, 0, 1) 45%,
					rgba(1, 0, 255, 1) 54%,
					rgba(0, 27, 235, 1) 59%,
					rgba(0, 16, 217, 1) 64%,
					rgba(0, 28, 213, 1) 69%,
					rgba(0, 17, 208, 1) 73%,
					rgba(20, 0, 190, 1) 81%,
					rgba(35, 0, 138, 1) 88%,
					rgba(38, 13, 109, 1) 91%,
					rgba(0, 0, 0, 1) 100%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;

	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
		}

		p {
			max-width: none;
		}
	}
</style>
