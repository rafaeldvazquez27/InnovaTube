import prisma from "../config/prisma";
import jwt from "jsonwebtoken";

export class AuthService {

    async login(email: string, password: string) {

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        });

        const token = jwt.sign(
            { 
                id: user?.id,
                email: user?.email
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: "1h"
            }
        );

        if (!user) {
            return null;
        }

        if (user.password !== password) {
            return null;
        }

        return {
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
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