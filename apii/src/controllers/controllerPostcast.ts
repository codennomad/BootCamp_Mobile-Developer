import {IncomingMessage, request, ServerResponse} from 'http'
import { serviceListEpisodes } from '../services/listEpisodes';
import { serviceFilterEpisodes } from '../services/filterEpisodes';
import { ContentType } from '../utils/contenttype';
import { FilterPodcastModel } from '../models/response';


export const getListEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse) => {
    const content: FilterPodcastModel = await serviceListEpisodes();

    response.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    response.write(JSON.stringify(content.body));
    response.end();
};


export const getFilterEpisodes = async (
    request: IncomingMessage,
    response: ServerResponse,
    podcastName: string | undefined,
    language: string | undefined
) => {
    const content: FilterPodcastModel = await serviceFilterEpisodes(podcastName, language);

    response.writeHead(content.statusCode, {'content-type': ContentType.JSON});
    response.write(JSON.stringify(content.body));
    response.end();
};