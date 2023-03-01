import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { redirect, type Actions } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	//const now = new Date();

	// TODO: needs to be filtered for today only
	const foods = await prisma.food.findMany();

	return { foods };
};

export const actions: Actions = {
	createFood: async ({ request }) => {
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

		throw redirect(302, '/');
	},
	deleteFood: async ({ request }) => {
		const form = await request.formData();
		const id = form.get('id');

		await prisma.food.delete({
			where: { id: Number(id) }
		});

		throw redirect(302, '/');
	}
};
