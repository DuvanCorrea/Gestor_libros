import { Router } from "express";
import ic from "../controllers/indexControler";

const router: Router = Router();

router.get("/", ic.index);

export default router;