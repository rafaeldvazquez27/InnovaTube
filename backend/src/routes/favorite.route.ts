import { Router } from "express";
import { FavoriteController } from "../controllers/favorite.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const router = Router();

const controller = new FavoriteController();

router.post(
    "/",
    authMiddleware,
    (req, res) => controller.add(req, res)
);

router.get(
    "/",
    authMiddleware,
    (req, res) => controller.getByUser(req, res)
);

router.delete(
    "/:id",
    authMiddleware,
    (req, res) => controller.remove(req, res)
);

export default router;