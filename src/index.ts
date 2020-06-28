import express from "express";
import habs from "express-handlebars";
import path from "path";

//Importando rutas
import indexRoutes from "./routes/index.routes";

//Inicializacion de express
const app = express();

//configuracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  habs({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers"),
  })
);
app.set("view engine", ".hbs");

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Rutas
app.use("/books", indexRoutes);

//Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

//Iniciar servidor
app.listen(app.get("port"), () => {
  console.log("Servidor en puerto ", app.get("port"));
});
