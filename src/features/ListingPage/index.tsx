import Link from "next/link";
import styled from "styled-components";
import { TrackRow } from "../../components/TrackRow";
import { SearchBar } from "./components/SearchBar";
import { Track, TracksResponse } from "./interfaces";

interface Props {
  tracks: TracksResponse;
}

export default function ListingPage({ tracks }: Props) {
  return (
    <ListContainer>
      <Link
        href={{
          pathname: "favorites",
        }}
      >
        favoritos
      </Link>
      <SearchBar />
      {tracks?.data?.map((track: Track, index: number) => {
        return <TrackRow key={track.id} track={track} index={index} />;
      })}
    </ListContainer>
  );
}

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
`;
