import { Request, Response } from "express";
import Book, { IBook } from "../models/book"

class booksControler {
    public async indexBook(req: Request, res: Response): Promise<void> {
        const books: IBook[] = await Book.find();
        console.log(books)
        const booksStringify = JSON.stringify(books)
        console.log(booksStringify)
        res.render("books/index", { title: "Libros", books: booksStringify })
    }

    public agregar(req: Request, res: Response): void {
        res.render("books/agregar", { title: "Agregar libros" })
    }

    public async agregarLibro(req: Request, res: Response): Promise<void> {
        const { nombreLibro, autorLibro, temaLibro, year } = req.body
        const newBook: IBook = new Book({
            nombreLibro,
            autorLibro,
            temaLibro,
            year
        })
        await newBook.save();
        res.redirect("/books")
    }
}

export default new booksControler();


