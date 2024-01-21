import { Track } from "../../features/ListingPage/interfaces";

export interface StoreType {
  currentPlaying: string;
  favoriteTracks: Track[];
}
