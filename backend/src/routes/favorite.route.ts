import { Router } from "express";
import { FavoriteController } from "../controllers/favorite.controller";

const router = Router();

const controller = new FavoriteController();

router.post("/", (req, res) => controller.add(req, res));

router.get("/:userId", (req, res) => controller.getByUser(req, res));

router.delete("/:id", (req, res) => controller.remove(req, res));

export default router;