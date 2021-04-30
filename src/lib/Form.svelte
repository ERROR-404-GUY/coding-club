<script>
	import { db } from '../firebase';

	var submited = false;
	function onFormSubmit(event) {
		event.preventDefault();
		db.collection('applications')
			.doc()
			.set({
				name: event.target.name.value,
				class: event.target.class.value,
				level: event.target.level.value,
				accepted: false
			})
			.then(function () {
				submited = true;
			})
			.catch(function (error) {
				console.log(error);
			});
	}
</script>

<form on:submit={onFormSubmit}>
	<div>
		<label for="name-input"
			>Your name
			<input id="name-input" name="name" placeholder="name" autocomplete="off" required />
		</label>
	</div>
	<div>
		<label>
			Your class:
			<select name="class" required>
				<option value="">Please choose an option</option>
				<option value="G4-1">G4-1</option>
				<option value="G4-2">G4-2</option>
				<option value="G4-3">G4-3</option>
				<option value="G4-4">G4-4</option>
				<option value="G4-5">G4-5</option>
				<option value="G4-6">G4-6</option>
				<option value="G4-7">G4-7</option>
				<option value="G4-8">G4-8</option>
				<option value="G4-9">G4-9</option>
			</select>
		</label>
		<label>
			your level:
			<select name="level" required>
				<option value="">(Please be honest)</option>
				<option value=0>0</option>
				<option value=1>1</option>
				<option value=2>2</option>
				<option value=3>3</option>
				<option value=4>4</option>
				<option value=5>5</option>
			</select>
		</label>

		{#if submited}
			<p>welcome to the club!</p>
			<p>meet at 4-8 mr grewalls class every friday afternoon recess!</p>
		{/if}

		{#if !submited}
			<div class="join">
				<button type="submit">join</button>
			</div>
		{/if}
	</div>
</form>

<style>
	label {
		display: block;
		color: royalblue;
	}
	select[name='level'] {
		background-color: rgb(255, 153, 0);
		font-size: 4vmax;
		margin: 2vmax;
	}
	form {
		border: rgb(72, 255, 0) solid;
	}
	.join {
		text-align: center;
	}
	.join button {
		font-size: 4vmax;
		background-color: chocolate;
	}
	select[name='class'] {
		background-color: rgb(76, 202, 202);
		font-size: 4vmax;
		margin: 2vmax;
	}
	input[name='name'] {
		background-color: rgb(95, 126, 219);
		font-size: 4vmax;
		margin: 2vmax;
	}
	p {
		text-align: center;
		color: rgb(255, 255, 255);
		font-size: 4vmax;
	}
</style>
