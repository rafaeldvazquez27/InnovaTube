import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

export class AuthController {

    private authService = new AuthService();

    login(req: Request, res: Response) {

        const { email, password } = req.body;

        const result = this.authService.login(
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
    }

}