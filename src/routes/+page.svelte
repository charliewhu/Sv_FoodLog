<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
	$: foods = data.foods;
</script>

<div class="grid">
	{#if foods.length !== 0}
		<table data-testId="foodList">
			<thead>
				<tr>
					<th scope="col">Food</th>
					<th scope="col">Calories</th>
					<th scope="col">Protein</th>
					<th scope="col">Carb</th>
					<th scope="col">Fat</th>
				</tr>
			</thead>
			<tbody>
				{#each foods as food}
					<tr data-testId="foodListItem">
						<td>{food.name}</td>
						<td>{food.calories}</td>
						<td>{food.protein}</td>
						<td>{food.carb}</td>
						<td>{food.fat}</td>
						<td>
							<form method="POST" action="?/deleteFood" use:enhance>
								<button type="submit" aria-label="deleteFoodItem"> Delete </button>
							</form>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<p>You haven't logged any food today</p>
	{/if}
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
