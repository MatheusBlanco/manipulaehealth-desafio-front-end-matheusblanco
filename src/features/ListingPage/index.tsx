import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import svgIcon from "../../../public/No data-cuate.svg";
import { EmptyState } from "../../components/EmptyState";
import { TrackRowProps } from "../../components/TrackRow/interfaces";
import { Header, ListContainer } from "../../styles";
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
  const router = useRouter();
  const { query } = router;

  return (
    <ListContainer>
      <SearchBar />{" "}
      {tracks?.data?.length ? (
        <>
          <Header>
            {query?.search?.length ? query.search : "As mais tocadas"}
          </Header>
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
        </>
      ) : (
        <EmptyState
          title={`Sua busca por ${query.search} não retornou resultados.`}
          subtitle={"Tente alterar os termos pesquisados e tente novamente."}
          svgIcon={svgIcon}
        />
      )}
    </ListContainer>
  );
}
