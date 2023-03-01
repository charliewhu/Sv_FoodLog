<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
	$: foods = data.foods;
</script>

<div class="grid">
	<article>
		{#if foods.length !== 0}
			<h5>Your Foods</h5>
			{#each foods as food}
				<div data-testId="foodList">
					<div data-testId="foodListItem" class="grid list-item">
						<div>{food.name}</div>
						<div>{food.calories}</div>
						<div>{food.protein}</div>
						<div>{food.carb}</div>
						<div>{food.fat}</div>
						<div>
							<a href={`/${food.id}/update`}
								><button type="button" aria-label="updateFoodItem"> Update</button>
							</a>
						</div>
						<div>
							<form method="POST" action="?/deleteFood" use:enhance>
								<input type="hidden" name="id" value={food.id} />
								<button type="submit" aria-label="deleteFoodItem"> X </button>
							</form>
						</div>
					</div>
				</div>
			{/each}
		{:else}
			<p>You haven't logged any food today</p>
		{/if}
	</article>

	<article>
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
	</article>
</div>

<style>
	.list-item {
		align-items: center;
	}
</style>
