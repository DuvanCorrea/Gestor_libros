/*La cneccion a la base de datos*/
import mongoose from "mongoose"
import { mongodb } from "./keys"


mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("conexion ok")).catch((e) => console.log(">>>", e))