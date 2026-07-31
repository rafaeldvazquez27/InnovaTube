import prisma from "../config/prisma";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { generateToken } from "../utils/jwt";

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

        const isValid = await bcrypt.compare(password, user.password);
        const token = generateToken(user.id);

        if (!isValid) {
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

        const hasedPassword = await bcrypt.hash(password, 10);

        return await prisma.user.create({
            data: {
                name,
                email,
                password: hasedPassword
            }
        });
    }
}