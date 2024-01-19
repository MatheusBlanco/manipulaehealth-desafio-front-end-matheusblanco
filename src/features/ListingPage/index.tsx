import styled from "styled-components";
import { TrackRow } from "./components/TrackRow";
import { Track, TracksResponse } from "./interfaces";

interface Props {
  tracks: TracksResponse;
}

export default function ListingPage({ tracks }: Props) {
  return (
    <ListContainer>
      <Header>As mais tocadas</Header>
      {tracks?.data?.map((track: Track, index: number) => {
        return <TrackRow key={track.id} track={track} index={index} />;
      })}
    </ListContainer>
  );
}

const Header = styled.h1``;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: start;
`;
