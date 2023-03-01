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
		<input type="text" name="name" placeholder="Name" />
		<input type="text" name="protein" placeholder="Protein" />
		<input type="text" name="carb" placeholder="Carb" />
		<input type="text" name="fat" placeholder="Fat" />
		<input type="text" name="calories" placeholder="Calories" />
		<button type="submit"> Add </button>
	</form>
</div>
