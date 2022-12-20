export interface VideoGames {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: string;
  ratings_count: string;
  // ver otra forma de solucionar esto y no usar any
  parent_platforms: any[];
  genres: any[];
  stores: any[];
  tags: any[];
  short_screenshots: any[];
}
