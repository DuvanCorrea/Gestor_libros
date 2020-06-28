import { Router } from "express";
import bc from "../controllers/booksController";

const router: Router = Router();

router.get("/", bc.indexBook);
router.get("/agregar", bc.agregar)
router.post("/agregar", bc.agregarLibro)

export default router;