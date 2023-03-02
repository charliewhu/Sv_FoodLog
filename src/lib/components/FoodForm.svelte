<script lang="ts">
	import type { Food } from '@prisma/client';

	export let food: Food;

	const actionUrl = food ? '' : '?/createFood';
</script>

<article data-testId="foodForm" class="foodForm">
	<div>
		<form method="POST" action={actionUrl}>
			<div class="grid">
				<input type="text" name="name" placeholder="Name" value={food?.name} />
				<input type="number" name="calories" placeholder="Calories" value={food?.calories} />
			</div>
			<div class="grid">
				<input type="number" name="protein" placeholder="Protein" value={food?.protein} />
				<input type="number" name="carb" placeholder="Carb" value={food?.carb} />
				<input type="number" name="fat" placeholder="Fat" value={food?.fat} />
			</div>
			{#if !food}
				<button type="submit" aria-label="addFoodItem"> Add </button>
			{:else}
				<button type="submit" aria-label="submitUpdateFoodItem"> Update </button>
			{/if}
		</form>
	</div>
</article>

<style>
	.foodForm {
		height: fit-content;
	}
</style>
