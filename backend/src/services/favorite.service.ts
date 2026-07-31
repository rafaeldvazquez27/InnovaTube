import prisma from "../config/prisma";

export class FavoriteService {

    async add(data: any) {

        return await prisma.favorite.create({
            data
        });

    }

    async getByUser(userId: number) {

        return await prisma.favorite.findMany({
            where: {
                userId
            }
        });

    }

    async remove(id: number) {

        return await prisma.favorite.delete({
            where: {
                id
            }
        });

    }

}