import { IncomingMessage } from "http";
import { repoPodscast } from "../repositories/podcastsRepository"
import { FilterPodcastModel } from "../models/response";
import { StatusCode } from "../utils/statuscode";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined,
    language: string | undefined
): Promise<FilterPodcastModel> => {
    //define a interface de retorno
    let responseFormat: FilterPodcastModel = {
     statusCode: 0,
     body: [],   
    };

    //buscando os dados
    const data = await repoPodscast(podcastName, language);

    //verifico se tem conteudo
    responseFormat.statusCode = 
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
}