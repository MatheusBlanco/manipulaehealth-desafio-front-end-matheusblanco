import { ReactTooltipStyled } from "@/styles";
import { timeFormat } from "@/utils";
import Link from "next/link";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOpenInNew,
  MdOutlinePauseCircle,
  MdOutlinePlayCircle,
} from "react-icons/md";
import {
  AlbumImage,
  BasicInformation,
  DurationAndInteractions,
  IconButton,
  IconSize,
  IndexText,
  TrackInformation,
  TrackNameAndArtist,
  TrackText,
} from "./styles";
import { useTrackRow } from "./useTrackRow";
import { TrackRowProps } from "./interfaces";

export const TrackRow = ({ track, index }: TrackRowProps) => {
  const {
    handleAudio,
    audioRef,
    currentPlaying,
    handleFavoritesList,
    isFavorited,
  } = useTrackRow(track);

  return (
    <TrackInformation key={track.id}>
      <audio ref={audioRef} />
      <ReactTooltipStyled id="play-tooltip" />
      <ReactTooltipStyled id="favorite-tooltip" />
      <ReactTooltipStyled id="external-tooltip" />

      <BasicInformation>
        <IndexText>{index + 1}</IndexText>
        <AlbumImage src={track.album.cover_small} alt={track.title} />
        <TrackNameAndArtist>
          <TrackText color="white">{track.title}</TrackText>{" "}
          <TrackText>{track.artist.name}</TrackText>
        </TrackNameAndArtist>
      </BasicInformation>
      <DurationAndInteractions>
        <TrackText>{timeFormat(track.duration)}</TrackText>

        <IconButton
          data-tooltip-id="play-tooltip"
          data-tooltip-content={
            currentPlaying === track.preview ? "Pausar prévia" : "Tocar prévia"
          }
          as="button"
          onClick={() => handleAudio(track.preview)}
        >
          {currentPlaying === track.preview ? (
            <MdOutlinePauseCircle style={IconSize} />
          ) : (
            <MdOutlinePlayCircle style={IconSize} />
          )}
        </IconButton>
        <IconButton
          data-tooltip-id="favorite-tooltip"
          data-tooltip-content={isFavorited ? "Desfavoritar" : "Favoritar"}
          as="button"
          onClick={() => handleFavoritesList()}
        >
          {isFavorited ? (
            <MdFavorite style={IconSize} />
          ) : (
            <MdFavoriteBorder style={IconSize} />
          )}
        </IconButton>
        <Link
          data-tooltip-id="external-tooltip"
          data-tooltip-content={"Ver no Deezer"}
          href={track.link}
          target="_blank"
        >
          <IconButton>
            <MdOpenInNew style={IconSize} />
          </IconButton>
        </Link>
      </DurationAndInteractions>
    </TrackInformation>
  );
};
