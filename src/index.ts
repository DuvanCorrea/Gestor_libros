import express from "express";
import hbs from "express-handlebars";
import path from "path";

// inicializacion de express
const app = express();

//configuracion
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set(
  ".hbs",
  hbs({
    extname: ".hbs",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partial"),
  })
);

//midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//rutas

// archivos estaticos

//Iniciar servidor

app.listen(app.get("port"), () => {
  console.log("Servidor en puerto ", app.get("port"));
});
