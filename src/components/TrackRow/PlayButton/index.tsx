import { MdOutlinePauseCircle, MdOutlinePlayCircle } from "react-icons/md";
import { ReactTooltipStyled } from "../../../styles";
import { IconButton, IconSize } from "../styles";

interface Props {
  playing: boolean;
  onClick: () => void;
}

export const PlayButton = ({ playing, onClick }: Props) => {
  return (
    <div data-testid={`#play-button_${playing ? "playing" : "paused"}`}>
      <ReactTooltipStyled id="play-tooltip" />
      <IconButton
        data-tooltip-id="play-tooltip"
        data-tooltip-content={playing ? "Pausar prévia" : "Tocar prévia"}
        as="button"
        onClick={onClick}
      >
        {playing ? (
          <MdOutlinePauseCircle style={IconSize} />
        ) : (
          <MdOutlinePlayCircle style={IconSize} />
        )}
      </IconButton>
    </div>
  );
};
