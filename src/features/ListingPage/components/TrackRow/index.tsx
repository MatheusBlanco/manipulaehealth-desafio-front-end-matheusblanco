import { timeFormat } from "@/utils";
import Link from "next/link";
import { Track } from "../../interfaces";
import {
  AlbumImage,
  BasicInformation,
  DurationAndInteractions,
  FavoriteIcon,
  IconButton,
  IndexText,
  OpenInNewTabIcon,
  TrackInformation,
  TrackNameAndArtist,
  TrackText,
} from "./styles";

interface Props {
  track: Track;
  index: number;
}

export const TrackRow = ({ track, index }: Props) => {
  return (
    <TrackInformation key={track.id}>
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
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Link href={track.link} target="_blank">
          <IconButton>
            <OpenInNewTabIcon />
          </IconButton>
        </Link>
      </DurationAndInteractions>
    </TrackInformation>
  );
};
