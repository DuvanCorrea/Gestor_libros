import { Router } from "express";
import { ic } from "../controllers/indexControler";

const router: Router = Router();

router.get("/", ic.index);

router.get("/agregar", (req, res) => {
    res.send("agregar libros");
});

export default router;
