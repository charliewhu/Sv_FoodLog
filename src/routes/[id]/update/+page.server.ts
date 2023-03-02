import { prisma } from '$lib/server/prisma.ts';
import { error, type Actions, fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const food = await prisma.food.findUnique({
		where: {
			id: Number(params.id)
		}
	});

	if (!food) {
		throw error(404, 'Food not found!');
	}

	return { food: food };
};

export const actions: Actions = {
	default: async ({ request, params }) => {
		const form = await request.formData();
		const food = Object.fromEntries(form);

		try {
			await prisma.food.update({
				where: {
					id: Number(params.id)
				},
				data: {
					name: String(food.name),
					calories: Number(food.calories),
					protein: Number(food.protein),
					carb: Number(food.carb),
					fat: Number(food.fat)
				}
			});
		} catch (err) {
			console.log(err);
			return fail(500, { message: 'Could not update' });
		}

		throw redirect(302, '/');
	}
};
