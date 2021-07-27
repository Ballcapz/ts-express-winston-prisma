import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function read(req: any, res: any) {
	try {
		const users = await prisma.user.findMany();
		res.status(200).send({ data: users });
	} catch (err) {
		throw err;
	} finally {
		await prisma.$disconnect()
	}
}