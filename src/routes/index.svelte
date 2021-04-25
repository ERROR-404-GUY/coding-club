<script>
	import Carousel from '$lib/Carousel.svelte';
	import Form from '$lib/form.svelte';
	import Members from '$lib/Members.svelte';
</script>

<svelte:head>
	<title>CODING CLUB!</title>
</svelte:head>

<main>
	<h1>Coding club!</h1>
	<Carousel />
	<p>
		would you like to join my Coding club? we will learn how to use scrach most of you guys know how
		to use scrach... actually you all know how to do scrach so do you want to make bigger and better
		games? if so pls join my coding club and when you guys are ready we can use javaScript.react to
		code
	</p>

	<p>here is how to make a loop</p>
	<pre
		class="example">
			<code>
  for (let i = 0; i &gt; alive.length)&#123;
    if (i = alive)&#123;
      i.code
    &#125;
  &#125;
	</code>
	</pre>
	<p>i will explain how to do this in my club and how to make other things like that</p>

	<p>if you would like to join my club pls put your name on the boxes below⬇️</p>
	<Form />
	<p>here is a list of people who have joined and been accepted</p>
	<Members />
</main>

<style>
	main {
		font-size: 4vmax;
		padding: 1em;
		margin: 0 auto;
		background: url('stuff.png') no-repeat;
		background-attachment: fixed;
	}

	:global(button) {
		font-size: 4vmax;
	}

	h1 {
		text-align: center;
		text-transform: uppercase;
		font-size: 10vmax;
		font-weight: 600;
		line-height: 1.1;
		margin: 4rem auto;
		max-width: 14rem;
	}

	pre.example code {
		color: rgb(255, 255, 255);
		font-size: 4vmax;
		text-align: left;
		animation-name: example;
		animation-duration: 3s;
		animation-iteration-count: infinite;
	}

	@keyframes example {
		0% {
			color: red;
		}
		10% {
			color: rgb(255, 123, 0);
		}
		20% {
			color: dodgerblue;
		}
		30% {
			color: green;
		}
		40% {
			color: red;
		}
		50% {
			color: rgb(255, 123, 0);
		}
		60% {
			color: dodgerblue;
		}
		70% {
			color: green;
		}
		80% {
			color: red;
		}
		90% {
			color: rgb(255, 123, 0);
		}
		100% {
			color: dodgerblue;
		}
	}

	p {
		text-align: center;
		color: white;
		max-width: 14rem;
		margin: 2rem auto;
		line-height: 1.35;
	}

	@media (min-width: 480px) {
		h1 {
			max-width: none;
			animation-name: example;
			animation-duration: 3s;
			animation-iteration-count: infinite;
		}

		@keyframes example {
			0% {
				color: #ff0000;
			}
			50% {
				color: #228b22;
			}
			75% {
				color: #0047ab;
			}
			100% {
				color: #ff0000;
			}
		}

		p {
			max-width: none;
		}
	}
</style>
