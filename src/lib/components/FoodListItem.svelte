<script lang="ts">
	import type { Food } from '@prisma/client';

	export let food: Food;
</script>

<div data-testId="foodListItem" class="grid list-item">
	<div>{food.name}</div>
	<div>{food.calories}</div>
	<div>{food.protein}</div>
	<div>{food.carb}</div>
	<div>{food.fat}</div>
	<a href={`/${food.id}/update`} role="button" aria-label="updateFoodItem"> Edit </a>
	<form method="POST" action="?/deleteFood">
		<input type="hidden" name="id" value={food.id} />
		<button type="submit" aria-label="deleteFoodItem"> X </button>
	</form>
</div>

<style>
	/* your styles go here */
</style>
