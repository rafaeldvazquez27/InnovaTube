import prisma from "../config/prisma";

export class AuthService {

    async login(email: string, password: string) {

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (!user) {
            return null;
        }

        if (user.password !== password) {
            return null;
        }

        return {
            success: true,
            token: 'jwt-temporal',
            user
        };

    }

    async register(name: string, email: string, password: string) {
        return await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        });
    }
}