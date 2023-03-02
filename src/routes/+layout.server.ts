import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	const startDate = new Date();
	startDate.setUTCHours(0, 0, 0, 0);
	const endDate = new Date(startDate.getTime());

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
