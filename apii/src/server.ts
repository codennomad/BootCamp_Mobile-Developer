import * as http from "http";
import { getListEpisodes, getFilterEpisodes } from "./controllers/controllerPostcast";
import { Routes } from "./routes/routes";
import { httpMethod } from "./utils/httpmethods";
import { app } from "./app";

const server = http.createServer(app);

const port = process.env.PORT

server.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
})