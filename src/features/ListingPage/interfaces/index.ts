export type TracksResponse = {
  data: Track[];
  total: number;
};

export type Track = {
  album: { cover_small: string };
  artist: { name: string };
  id: number;
  title: string;
  duration: number;
  link: string;
};
