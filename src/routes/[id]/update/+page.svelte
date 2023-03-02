<script lang="ts">
	import FoodForm from '$lib/components/FoodForm.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: food = data.food;
</script>

<FoodForm {food} />
