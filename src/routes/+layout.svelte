<script lang="ts">
	import FoodListItem from '$lib/components/FoodListItem.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: foods = data.foods;

	let date = new Date();
</script>

<nav class="container">
	<ul>
		<li>
			<a class="contrast" href="/"><strong>Page</strong></a>
		</li>
	</ul>
	<ul>
		<li><a href="/">Link 1</a></li>
		<li><a href="/">Link 2</a></li>
	</ul>
</nav>

<main>
	<section class="container">
		<div class="grid">
			<article>
				<h6>{date.toDateString()}</h6>
				{#if foods.length !== 0}
					<h5>Your Foods</h5>
					<div data-testId="foodList">
						{#each foods as food}
							<FoodListItem {food} />
						{/each}
					</div>
				{:else}
					<p>You haven't logged any food today</p>
				{/if}
			</article>

			<slot />
		</div>
	</section>
</main>

<style global>
	@import '@picocss/pico';
	nav {
		padding-bottom: 30px;
	}
</style>
