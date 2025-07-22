import { promises } from "dns";
import { FilterPodcastModel } from "../models/response";
import { repoPodscast } from "../repositories/podcastsRepository";
import { StatusCode } from "../utils/statuscode";


export const serviceListEpisodes = async (): Promise<FilterPodcastModel> => {

    let responseFormat: FilterPodcastModel = {
     statusCode: 0,
     body: [],   
    };

    const data = await repoPodscast();

    responseFormat.statusCode = 
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;
        
    return responseFormat;
};