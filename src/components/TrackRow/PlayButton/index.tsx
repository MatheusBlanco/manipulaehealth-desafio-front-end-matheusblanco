import { ReactTooltipStyled } from "@/styles";
import { MdOutlinePauseCircle, MdOutlinePlayCircle } from "react-icons/md";
import { IconButton, IconSize } from "../styles";

interface Props {
  playing: boolean;
  onClick: () => void;
}

export const PlayButton = ({ playing, onClick }: Props) => {
  return (
    <>
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
    </>
  );
};
