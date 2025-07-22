import * as http from "http";
import { getFilterEpisodes, getListEpisodes } from "./controllers/controllerPostcast";
import { httpMethod } from "./utils/httpmethods";
import { Routes } from "./routes/routes";


export const app = async (
    request: http.IncomingMessage, 
    response: http.ServerResponse
) => {

        //querystring
        const parsedUrl = new URL (request.url || '/', `http://${request.headers.host}`)
        const baseUrl = parsedUrl.pathname;
        const queryParams = parsedUrl.searchParams;

        //listar podcast
        if(request.method === httpMethod.GET && baseUrl === Routes.LIST){
            await getListEpisodes(request, response);
        }

        if(request.method === httpMethod.GET && baseUrl === Routes.EPISODE){
            // Extrair o parâmetro 'p' (podcastName)
            const podcastName = queryParams.get('p') || undefined;

            // Extrair o parâmetro 'p' (podcastName)
            const language = queryParams.get('lang') || undefined;

            // Passar ambos os parâmetros para a função do controller
            await getFilterEpisodes(request, response, podcastName, language);
        }
    };