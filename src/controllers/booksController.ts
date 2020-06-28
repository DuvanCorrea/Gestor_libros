import { Request, Response } from "express";
import Book, { IBook } from "../models/book"

class booksControler {
    public index(req: Request, res: Response): void {
        res.render("books/index", { title: "Libros" })
    }

    public agregar(req: Request, res: Response): void {
        res.render("books/agregar", { title: "Agregar libros" })
    }

    public agregarLibro(req: Request, res: Response): void {
        const { nombreLibro, autorLibro, temaLibro, year } = req.body
        const newBook: IBook = new Book({
            nombreLibro,
            autorLibro,
            temaLibro,
            year
        })
        console.log(newBook);
    }
}

export default new booksControler();


