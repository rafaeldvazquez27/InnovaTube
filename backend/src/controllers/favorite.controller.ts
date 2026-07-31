import { Request, Response } from "express";
import { FavoriteService } from "../services/favorite.service";

export class FavoriteController {

    private service = new FavoriteService();

    async add(req: Request, res: Response) {

        const favorite = await this.service.add(req.body);

        return res.status(201).json(favorite);

    }

    async getByUser(req: Request, res: Response) {

        const userId = Number(req.params.userId);

        const favorites = await this.service.getByUser(userId);

        return res.json(favorites);

    }

    async remove(req: Request, res: Response) {

        await this.service.remove(Number(req.params.id));

        return res.sendStatus(204);

    }

}