<script>
	import { db } from '../firebase';

	var members;

	db.collection('applications')
		.where('accepted', '==', true)
		.onSnapshot(function (snap) {
			members = snap.docs.map((data) => {
				const d = data.data();
				console.log(d);
				return d;
			});
		});
</script>

<ul>
	{#if members}
		{#each members as member}
			{#if member.accepted}
				<li>Class: {member.class}, Name: {member.name}</li>
			{/if}
		{/each}
	{/if}
</ul>
<style>
li{
color:royalblue ;
font-size: 4vmax; 
}


</style>
