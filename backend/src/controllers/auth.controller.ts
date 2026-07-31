import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {

    private authService = new AuthService();

    async login(req: Request, res: Response) {

        try {

            const { email, password } = req.body;

            const result = await this.authService.login(
                email,
                password
            );

            if (!result) {
                return res.status(401).json({
                    success: false,
                    message: 'Credenciales inválidas'
                });
            }

            return res.json(result);

        } catch {

            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor'
            });

        }

    }

    async register(req: Request, res: Response) {

        console.log("Entro al register");
        console.log(req.body);

        try {

            const { name, email, password } = req.body;

            const user = await this.authService.register(
                name,
                email,
                password
            );

            return res.status(201).json(user);

        } catch (error) {

            console.log(error)
            return res.status(500).json({
                message: 'Error al crear el usuario'
            });

        }

    }

}