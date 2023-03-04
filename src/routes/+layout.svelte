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
		<article class="flex">
			<a data-testId="prevDay" href={`/?date=${date.setDate(date.getDate() - 1)}`}>{`<-`}</a>
			<p>{date.toDateString()}</p>
			<a>{`->`}</a>
		</article>
		<div class="grid">
			<article>
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
	.flex {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
		margin-top: 0;
		margin-bottom: 0;
	}
</style>
