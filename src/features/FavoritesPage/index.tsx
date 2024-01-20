import { TrackRow } from "@/components/TrackRow";
import { StoreType } from "@/lib/interfaces";
import { Header, ListContainer } from "@/styles";
import Link from "next/link";
import { useSelector } from "react-redux";
import { Track } from "../ListingPage/interfaces";

export const FavoritesPage = () => {
  const favoriteTracks = useSelector(
    (state: StoreType) => state.favoriteTracks
  );

  return (
    <ListContainer>
      <Header>Meus favoritos</Header>
      <Link href={"/"} passHref={true}>
        home
      </Link>
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
