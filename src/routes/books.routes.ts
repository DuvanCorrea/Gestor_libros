import { Router } from "express";
import bc from "../controllers/booksController";

const router: Router = Router();

router.get("/", bc.index);

router.get("/agregar", bc.agregar)

export default router;