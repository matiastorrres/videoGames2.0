import { VideoGames } from '../models';

export const adapterVideoGames = (videogames: Array<VideoGames>) => {
  const formateVideoGame = videogames.map((e: VideoGames) => ({
    id: e.id,
    name: e.name,
    released: e.released,
    image: e.background_image,
    rating: e.rating,
    ratings_count: e.ratings_count,
    platforms: e.parent_platforms.map((el) => el.platform.name),
    genres: e.genres.map((el) => el.name),
    stores: e.stores.map((el) => el.store.name),
    tags: e.tags.map((el) => el.name),
    short_screenshots: e.short_screenshots.map((el) => el.image),
  }));
  return formateVideoGame;
};
