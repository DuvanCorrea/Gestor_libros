import { Schema, model, Document } from "mongoose";

export interface IBook extends Document {
    nombreLibro: String,
    autorLibro: String,
    temaLibro: String,
    year: Number
}

const bookSchema = new Schema({
    nombreLibro: String,
    autorLibro: String,
    temaLibro: String,
    year: Number
});

export default model<IBook>("book", bookSchema)