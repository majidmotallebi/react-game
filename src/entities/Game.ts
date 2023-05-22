import { PlatformItem } from "../hooks/PlatformItem";
import { Geners } from "./Geners";
import { Publisher } from './Publishers';


export interface Game {
    id: number;
    name: string;
    slug: string;
    genres:Geners[];
    publishers: Publisher[];
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: PlatformItem; }[];
    metacritic: number;
    rating_top: number;
}
