import { FullWidthDiv } from "../../styles";
import { timeFormat } from "../../utils";
import { FavoriteButton } from "./FavoriteButton";
import { OpenInNewButton } from "./OpenInNewButton";
import { PlayButton } from "./PlayButton";
import { TrackRowProps } from "./interfaces";
import {
  AlbumImage,
  BasicInformation,
  DurationAndInteractions,
  IndexText,
  TrackInformation,
  TrackNameAndArtist,
  TrackText,
} from "./styles";
import { useTrackRow } from "./useTrackRow";

export const TrackRow = ({ track, index }: TrackRowProps) => {
  const {
    handleAudio,
    audioRef,
    currentPlaying,
    handleFavoritesList,
    isFavorited,
  } = useTrackRow(track);

  return (
    <FullWidthDiv data-testid="#track_row">
      <TrackInformation key={track.id} data-testid={`#track_row_${track.id}`}>
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
          <PlayButton
            playing={currentPlaying === track.preview}
            onClick={() => handleAudio(track.preview)}
          />
          <FavoriteButton
            isFavorited={isFavorited}
            onClick={() => handleFavoritesList()}
          />
          <OpenInNewButton link={track.link} />
        </DurationAndInteractions>
      </TrackInformation>
    </FullWidthDiv>
  );
};
