import { IconButton } from "../../../../components/TrackRow/styles";
import { SearchBarContainer, SearchIcon, SearchInput } from "./styles";
import { useSearchBar } from "./useSearchBar";

export const SearchBar = () => {
  const { refreshData } = useSearchBar();

  return (
    <>
      <SearchBarContainer>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <SearchInput
          name="search"
          autoComplete="off"
          onChange={(e) => refreshData(e.target.value)}
          placeholder="Álbuns, artistas ou músicas..."
        />
      </SearchBarContainer>
    </>
  );
};
