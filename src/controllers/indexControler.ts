import { Request, Response } from "express";

class indexControler {
    public index(req: Request, res: Response) {
        res.render("index", { layout: false })
    }
}

export const ic = new indexControler();


