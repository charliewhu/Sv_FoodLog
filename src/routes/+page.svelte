<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
	$: foods = data.foods;
</script>

<article class="foodForm">
	<div>
		<form method="POST" action="?/createFood" use:enhance>
			<div class="grid">
				<input type="text" name="name" placeholder="Name" />
				<input type="number" name="calories" placeholder="Calories" />
			</div>
			<div class="grid">
				<input type="number" name="protein" placeholder="Protein" />
				<input type="number" name="carb" placeholder="Carb" />
				<input type="number" name="fat" placeholder="Fat" />
			</div>
			<button type="submit" aria-label="addFoodItem"> Add </button>
		</form>
	</div>
</article>

<style>
	.foodForm {
		height: fit-content;
	}
</style>
