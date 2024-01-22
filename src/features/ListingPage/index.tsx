import dynamic from "next/dynamic";
import { TrackRowProps } from "../../components/TrackRow/interfaces";
import { ListContainer } from "../../styles";
import { ListingPageProps, Track } from "./interfaces";

const TrackRow = dynamic<TrackRowProps>(async () => {
  const trackRow = await import("../../components/TrackRow");
  return trackRow.TrackRow;
});

const SearchBar = dynamic(async () => {
  const searchBar = await import("./components/SearchBar");
  return searchBar.SearchBar;
});

export default function ListingPage({ tracks }: ListingPageProps) {
  return (
    <ListContainer>
      <SearchBar />
      {tracks?.data?.map((track: Track, index: number) => {
        return (
          <TrackRow
            data-testid={"track_list_" + track.id.toString()}
            key={track.id}
            track={track}
            index={index}
          />
        );
      })}
    </ListContainer>
  );
}
