import { PodcastModel } from "./models";

export interface FilterPodcastModel {
    statusCode: number;
    body: PodcastModel[];
}