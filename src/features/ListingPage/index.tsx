import { TrackRowProps } from "@/components/TrackRow/interfaces";
import { ListContainer } from "@/styles";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Track, TracksResponse } from "./interfaces";

const TrackRow = dynamic<TrackRowProps>(async () => {
  const trackRow = await import("@/components/TrackRow");
  return trackRow.TrackRow;
});

const SearchBar = dynamic(async () => {
  const searchBar = await import("./components/SearchBar");
  return searchBar.SearchBar;
});

interface Props {
  tracks: TracksResponse;
}

export default function ListingPage({ tracks }: Props) {
  return (
    <ListContainer>
      <Link href={"favorites"}>favoritos</Link>
      <SearchBar />
      {tracks?.data?.map((track: Track, index: number) => {
        return <TrackRow key={track.id} track={track} index={index} />;
      })}
    </ListContainer>
  );
}
