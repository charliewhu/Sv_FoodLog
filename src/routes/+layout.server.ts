import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const startDate = new Date();
	startDate.setUTCHours(0, 0, 0, 0);

	const endDate = new Date();
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
