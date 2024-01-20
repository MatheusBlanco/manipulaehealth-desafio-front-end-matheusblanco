export type TracksResponse = {
  data: Track[];
  total: number;
};

export type Track = {
  preview: string;
  album: { cover_small: string };
  artist: { name: string };
  id: number;
  title: string;
  duration: number;
  link: string;
};
