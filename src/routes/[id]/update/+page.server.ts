import { prisma } from '$lib/server/prisma.ts';
import { error } from '@sveltejs/kit';
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
