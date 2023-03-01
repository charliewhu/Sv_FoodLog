<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: foods = data.foods;
</script>

<div class="grid">
	<ul>
		{#each foods as food}
			<li data-testid="foodListItem">
				{food.name}
			</li>
		{/each}
	</ul>
	<form method="POST">
		<div class="grid">
			<input type="text" name="name" placeholder="Name" />
			<input type="number" name="calories" placeholder="Calories" />
		</div>
		<div class="grid">
			<input type="number" name="protein" placeholder="Protein" />
			<input type="number" name="carb" placeholder="Carb" />
			<input type="number" name="fat" placeholder="Fat" />
		</div>
		<button type="submit"> Add </button>
	</form>
</div>
