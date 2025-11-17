import express from "express";
import usuarioRouters from "./scr/routes/usuario.routes.js";
import { count } from "console";
import { console } from "inspector";

const app = express();

app.use(express.json());
app.use(usuarioRouters);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});