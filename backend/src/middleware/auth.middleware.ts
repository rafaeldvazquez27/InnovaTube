import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET = "InnovaTubeSecret2026";

export interface AuthRequest extends Request {
    userId?: number;
}

export function authMiddleware(
    req: AuthRequest,
    res: Response,
    next: NextFunction
) {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({
            message: "Token requerido"
        });
    }

    const token = authHeader.replace("Bearer ", "");

    try {

        const payload = jwt.verify(token, SECRET) as any;

        req.userId = payload.userId;

        next();

    } catch {

        return res.status(401).json({
            message: "Token inválido"
        });

    }

}