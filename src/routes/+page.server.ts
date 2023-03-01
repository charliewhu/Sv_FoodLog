import type { PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';

export const load: PageServerLoad = async () => {
	//const now = new Date();

	// TODO: needs to be filtered for today only
	const foods = await prisma.food.findMany();

	return { foods };
};
