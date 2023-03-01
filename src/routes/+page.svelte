<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: foods = data.foods;
</script>

<ul>
	{#each foods as food}
		<li data-testid="foodListItem">
			{food.name}
		</li>
	{/each}
</ul>
