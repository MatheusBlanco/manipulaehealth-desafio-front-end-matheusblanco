import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { ReactTooltipStyled } from "../../../styles";
import { IconButton, IconSize } from "../styles";

interface Props {
  isFavorited: boolean;
  onClick: () => void;
}

export const FavoriteButton = ({ isFavorited, onClick }: Props) => {
  return (
    <div id="#favorites-button">
      <ReactTooltipStyled id="favorite-tooltip" />
      <IconButton
        data-tooltip-id="favorite-tooltip"
        data-tooltip-content={isFavorited ? "Desfavoritar" : "Favoritar"}
        as="button"
        onClick={onClick}
      >
        {isFavorited ? (
          <MdFavorite style={IconSize} />
        ) : (
          <MdFavoriteBorder style={IconSize} />
        )}
      </IconButton>
    </div>
  );
};
