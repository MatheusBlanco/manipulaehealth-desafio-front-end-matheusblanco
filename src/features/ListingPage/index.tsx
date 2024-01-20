import { ListContainer } from "@/styles";
import Link from "next/link";
import { TrackRow } from "../../components/TrackRow";
import { SearchBar } from "./components/SearchBar";
import { Track, TracksResponse } from "./interfaces";

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
