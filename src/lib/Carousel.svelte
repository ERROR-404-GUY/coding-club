<script>
import { slide } from 'svelte/transition';

	var index = 0;

	const images = [
		'/title.png',
		'/back_to_the_code.png',
		'/talk.png',
		'/message.png',
		'/suggestions.png'
	];

	function back() {
		if (index === 0) {
			return;
		}
		index = index - 1;
	}

	function next(evt) {
		if (index === 4) {
			return;
		}
		console.log(evt.target.style);
		index = index + 1;
	}
</script>

<div class="carousel">
	<div class="slide-{index}">
		{#each images as image}
			<img transition:slide={{ duration: 3000 }} src={image} alt="Title" />
		{/each}
	</div>
	<button class="prev" on:click={back}> &lt;&lt; </button>
	<button class="next" on:click={next}>&gt;&gt;</button>
</div>

<style>
	button{
		transform: rotate(0);
		animation-name: example;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 100%;
}

@keyframes example {
  0%   {color:red;}
  10%  {color:rgb(255, 123, 0);}
  20%  {color:dodgerblue;}
  30%  {color:green;}
  40% {color:red;}
  50%{color:rgb(255, 123, 0);}
  60%{color:dodgerblue;}
  70%{color:green;}
  80%{color:red;}
  90%{color:rgb(255, 123, 0);}
  100%{color:dodgerblue;}

	}
	.carousel {
		position: relative;
		height: 50vmax;
	}
	.carousel button {
		position: absolute;
		top: 50%;
	}
	.carousel button.prev {
		left: 0;
	}
	.carousel button.next {
		right: 0;
	}
	img {
		width: 100%;
		position: absolute;
		left: 100%;
		transition: left 1s ease-in-out, transform 1s, opacity 2s;
		transform: rotate(180deg);
		opacity: 0;
	}
	.slide-0 img:nth-child(1),
	.slide-1 img:nth-child(2),
	.slide-2 img:nth-child(3),
	.slide-3 img:nth-child(4),
	.slide-4 img:nth-child(5)
	 {
		left: 0;
		transform: rotate(0);
		opacity: 1;
	}
	</style>
