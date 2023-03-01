import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import type { Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	//const now = new Date();

	// TODO: needs to be filtered for today only
	const foods = await prisma.food.findMany();

	return { foods };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const food = Object.fromEntries(form);

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
	}
};
