import { Request, Response } from "express";

class booksControler {
    public index(req: Request, res: Response): void {
        res.render("books/index", { title: "Libros" })
    }

    public agregar(req: Request, res: Response): void {
        res.render("books/agregar", { title: "Agregar libros" })
    }
}

export default new booksControler();


