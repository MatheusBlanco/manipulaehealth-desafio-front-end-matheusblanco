import { IconButton } from "../TrackRow/styles";
import { Header, SearchBarContainer, SearchIcon, SearchInput } from "./styles";
import { useSearchBar } from "./useSearchBar";

export const SearchBar = () => {
  const { refreshData, query } = useSearchBar();

  return (
    <>
      <SearchBarContainer>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <SearchInput
          onChange={(e) => refreshData(e.target.value)}
          placeholder="Álbuns, artistas ou músicas..."
        />
      </SearchBarContainer>
      <Header>
        {query?.search?.length ? query.search : "As mais tocadas"}
      </Header>
    </>
  );
};