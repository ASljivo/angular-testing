export class SearchItem {
  resultCount: number;
  results: [
    Array<{
      artistId: string;
      artistName: string;
      trackName: string;
      artworkUrl60: string;
    }>
  ];
}

export class Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
