import prisma from "../config/prisma";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import { genereateToken } from "../utils/jwt";

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
        const token = genereateToken(user.id);

        console.log(user);

        console.log("Password recibida:", password);

        console.log("Hash BD:", user.password);

        console.log("isValid:", isValid);

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