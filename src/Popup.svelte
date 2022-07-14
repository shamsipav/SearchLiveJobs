<script>
//   export let message = 'Default message';
	import Button from './Button.svelte';
</script>

<form action="#">
	<p class="form__heading">Sing Up</p>
	<div class="form__content">
		<div class="form__item">
			<label for="name">Name</label>
			<input id="name" type="text">
		</div>
		<div class="form__item">
			<label for="email">Email</label>
			<input id="email" type="email">
		</div>
		<div class="form__item">
			<label for="password">Password</label>
			<input id="password" type="password">
		</div>
	</div>
	<Button variant="singup">Register now</Button>
</form>

<style>
	.form__heading {
		font-family: "Qanelas";
    	font-weight: 800;
		color: #367cff;
		font-size: 32px;
		text-align: center;
	}
	.form__heading, .form__content {
		margin: 0px 0px 40px 0px;
	}
	.form__item {
		display: flex;
		flex-direction: column;
		max-width: 70%;
		margin: 0 auto;
	}
	.form__item:not(:last-child) {
		margin-bottom: 20px;
	}
	.form__item input {
		padding: 0px 0px 1px 0px;
		border-bottom: 1px solid #367cff;
		font-size: 20px;
	}
	/* .form__item input:focus {
		border-bottom: 2px solid #367cff;
	} */
	.form__item label {
		margin: 0px 0px 5px 0px;
		color: #516193;
	}
</style>