import { timeFormat } from "@/utils";
import Link from "next/link";
import {
  MdFavorite,
  MdFavoriteBorder,
  MdOpenInNew,
  MdOutlinePauseCircle,
  MdOutlinePlayCircle,
} from "react-icons/md";
import { Track } from "../../features/ListingPage/interfaces";
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

interface Props {
  track: Track;
  index: number;
}

export const TrackRow = ({ track, index }: Props) => {
  const {
    handleAudio,
    audioRef,
    currentPlaying,
    favoriteTracks,
    handleFavoritesList,
    isFavorited,
  } = useTrackRow(track);

  return (
    <TrackInformation key={track.id}>
      <audio ref={audioRef} />
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

        <IconButton as="button" onClick={() => handleAudio(track.preview)}>
          {currentPlaying === track.preview ? (
            <MdOutlinePauseCircle style={IconSize} />
          ) : (
            <MdOutlinePlayCircle style={IconSize} />
          )}
        </IconButton>
        <IconButton as="button" onClick={() => handleFavoritesList()}>
          {isFavorited ? (
            <MdFavorite style={IconSize} />
          ) : (
            <MdFavoriteBorder style={IconSize} />
          )}
        </IconButton>
        <Link href={track.link} target="_blank">
          <IconButton>
            <MdOpenInNew style={IconSize} />
          </IconButton>
        </Link>
      </DurationAndInteractions>
    </TrackInformation>
  );
};
