import prisma from "../config/prisma";

export class FavoriteService {

    async add(data: any) {

        const exists = await prisma.favorite.findFirst({
            where: {
                userId: data.userId,
                videoId: data.videoId
            }
        });

        if (exists) {
            throw new Error("Este video ya está en favoritos.");
        }

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