import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async ({ url }) => {
	const date = url.searchParams.get('date') || new Date();

	const startDate = new Date(date);
	startDate.setUTCHours(0, 0, 0, 0);

	const endDate = new Date(date);
	endDate.setUTCHours(23, 59, 59, 999);

	const foods = await prisma.food.findMany({
		where: {
			date: {
				gte: startDate,
				lte: endDate
			}
		}
	});

	return { foods };
};
