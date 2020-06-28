import { Request, Response } from "express";

class indexControler {
    public index(req: Request, res: Response) {
        res.render("index", { titulo: "Bienvenido a booksApp" });
    }
}

export const ic = new indexControler();


