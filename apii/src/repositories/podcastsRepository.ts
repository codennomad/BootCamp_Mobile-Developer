import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/models";

const pathData = path.join(__dirname, "podcasts.json");

export const repoPodscast = async (
    podcastName?: string,
    language?: string
):Promise<PodcastModel[]> => {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile: PodcastModel[] = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: PodcastModel) => 
            podcast.podcastName.toLowerCase().includes(podcastName.toLowerCase())
        );
    }

    if(language) {
         jsonFile = jsonFile.filter((podcast: PodcastModel) =>
            podcast.language?.toLowerCase() === language.toLowerCase()
        );
    }

    return jsonFile;
}