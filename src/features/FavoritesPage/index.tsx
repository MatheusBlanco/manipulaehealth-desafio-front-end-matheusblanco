import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { TrackRowProps } from "../../components/TrackRow/interfaces";
import { StoreType } from "../../lib/interfaces";
import { Header, ListContainer } from "../../styles";
import { Track } from "../ListingPage/interfaces";

const TrackRow = dynamic<TrackRowProps>(async () => {
  const trackRow = await import("../../components/TrackRow");
  return trackRow.TrackRow;
});

export const FavoritesPage = () => {
  const favoriteTracks = useSelector(
    (state: StoreType) => state.favoriteTracks
  );

  return (
    <ListContainer>
      <Header>Meus favoritos</Header>

      {favoriteTracks?.length ? (
        favoriteTracks?.map((track: Track, index: number) => {
          return <TrackRow key={track.id} track={track} index={index} />;
        })
      ) : (
        <Header>Você ainda não tem favoritos</Header>
      )}
    </ListContainer>
  );
};
