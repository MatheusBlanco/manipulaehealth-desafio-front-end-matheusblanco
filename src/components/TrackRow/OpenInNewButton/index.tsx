import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import { ReactTooltipStyled } from "../../../styles";
import { IconButton, IconSize } from "../styles";

interface Props {
  link: string;
}

export const OpenInNewButton = ({ link }: Props) => {
  return (
    <>
      <ReactTooltipStyled id="external-tooltip" />

      <Link
        data-tooltip-id="external-tooltip"
        data-tooltip-content={"Ver no Deezer"}
        href={link}
        target="_blank"
      >
        <IconButton>
          <MdOpenInNew style={IconSize} />
        </IconButton>
      </Link>
    </>
  );
};
