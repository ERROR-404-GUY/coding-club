<script>
	import { db } from '../firebase';

	var members;

	db.collection('applications')
		.where('accepted', '==', true)
		.onSnapshot(function (snap) {
			members = snap.docs.map((data) => data.data());
			console.log(members);
		});
</script>

{#if members}
	{#each [1, 2, 3, 4, 5] as i}
		<ul class="level{i}">
			<li class="title">Level {i}</li>
			{#each members as member}
				{#if member.accepted}
					{#if member.level === i}
						<li>Class: {member.class}, Name: {member.name}</li>
					{/if}
				{/if}
			{/each}
		</ul>
	{/each}
{/if}

<style>
	.level1 .title {
		background-color: rgba(0, 153, 0, 0.63);
		font-size: 6vmax;
		border: 1px dashed cadetblue;

		animation-name: level1;
		animation-duration: 0.5s;
		animation-iteration-count: infinite;
		color: rgb(0, 255, 0);
	}
	.level2 .title {
		background-color: rgba(251, 255, 0, 0.63);
		font-size: 6vmax;
		border: 1px dashed cadetblue;
		color: rgb(255, 238, 0);
	}
	.level3 .title {
		background-color: rgb(183, 0, 255, 0.63);
		font-size: 6vmax;
		border: 1px dashed cadetblue;

		animation-name: level3;
		animation-duration: 0.3s;
		animation-iteration-count: infinite;
		color: rgb(94, 0, 182);
	}

	.level4 .title {
		background-color: rgba(255, 136, 0, 0.63);
		font-size: 6vmax;
		border: 1px dashed cadetblue;

		animation-name: level4;
		animation-duration: 0.2s;
		animation-iteration-count: infinite;
		color: rgb(255, 123, 0);
	}

	.level5 .title {
		background-color: rgb(255, 0, 0, 0.63);
		font-size: 6vmax;
		border: 1px dashed cadetblue;

		animation-name: level5;
		animation-duration: 0.1s;
		animation-iteration-count: infinite;
		color: rgb(255, 0, 0);
	}
	li {
		color: royalblue;
		font-size: 4vmax;
		border: 1px dashed cadetblue;
		list-style-type: none;
	}
</style>
