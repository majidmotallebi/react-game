import { PlatformItem } from "../hooks/PlatformItem";


export interface Game {
    id: number;
    name: string;
    slug: string;
    description_raw: string;
    background_image: string;
    parent_platforms: { platform: PlatformItem; }[];
    metacritic: number;
    rating_top: number;
}
