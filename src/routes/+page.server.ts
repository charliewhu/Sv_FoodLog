import { prisma } from '$lib/server/prisma';
import { type Actions, fail } from '@sveltejs/kit';

export const actions: Actions = {
	createFood: async ({ request }) => {
		const form = await request.formData();
		const food = Object.fromEntries(form);

		try {
			await prisma.food.create({
				data: {
					name: String(food.name),
					calories: Number(food.calories),
					protein: Number(food.protein),
					carb: Number(food.carb),
					fat: Number(food.fat),
					date: new Date()
				}
			});
		} catch (err) {
			return fail(500, { message: 'could not create food' });
		}

		return { status: 201 };
	},
	deleteFood: async ({ request }) => {
		const form = await request.formData();
		const id = form.get('id');

		await prisma.food.delete({
			where: { id: Number(id) }
		});

		return { status: 204 };
	}
};
