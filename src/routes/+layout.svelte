<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: foods = data.foods;
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
									<a href={`/${food.id}/update`}>
										<button type="button" aria-label="updateFoodItem"> Edit </button>
									</a>
								</div>
								<div>
									<form method="POST" action="?/deleteFood">
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
