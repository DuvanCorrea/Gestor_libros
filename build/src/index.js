"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// inicializacion de express
var app = express_1.default();
//configuracion
app.set("port", 3000);
//midlewares
//rutas
// archivos estaticos
//Iniciar servidor
app.listen(app.get("port"), function () {
    console.log("Server en puerto ", app.get("port"));
});
