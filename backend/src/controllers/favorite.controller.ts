import { Response } from "express";
import { FavoriteService } from "../services/favorite.service";
import { AuthRequest } from "../middleware/auth.middleware"; 
export class FavoriteController {

    private service = new FavoriteService();

    async add(req: AuthRequest, res: Response) {

        const favorite = await this.service.add({
            ...req.body,
            userId: req.userId
        });

        return res.status(201).json(favorite);

    }

    async getByUser(req: AuthRequest, res: Response) {

        const favorites = await this.service.getByUser(req.userId!);

        return res.json(favorites);

    }

    async remove(req: AuthRequest, res: Response) {

        await this.service.remove(Number(req.params.id));

        return res.sendStatus(204);

    }

}