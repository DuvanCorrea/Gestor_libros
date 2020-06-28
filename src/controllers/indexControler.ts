import { Request, Response } from "express";

class indexControler {
    public index(req: Request, res: Response) {
        res.render("index", { title: "Inicio" })
    }
}

export default new indexControler();


