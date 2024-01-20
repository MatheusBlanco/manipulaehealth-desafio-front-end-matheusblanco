import { StoreType } from "@/lib/interfaces";
import { pauseSong, playSong } from "@/lib/slices/currentPlayingSlice";
import { addTrack, removeTrack } from "@/lib/slices/favoriteTracksSlice";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../../features/ListingPage/interfaces";

export const useTrackRow = (track: Track) => {
  const { pathname } = useRouter();
  const [isFavorited, setIsFavorited] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();
  const currentPlaying = useSelector(
    (state: StoreType) => state.currentPlaying
  );
  const favoriteTracks = useSelector(
    (state: StoreType) => state.favoriteTracks
  );

  const trackIsFavorited = favoriteTracks.find(
    (favorite_track) => favorite_track.id === track.id
  );

  const handlePlaySound = (url: string) => {
    dispatch(playSong(url));
  };

  const handleStopSound = () => {
    dispatch(pauseSong());
  };

  const handleAudio = (url: string) => {
    if (currentPlaying === url) {
      handleStopSound();
    } else {
      handlePlaySound(url);
    }
  };

  const handleFavoritesList = () => {
    if (trackIsFavorited) {
      dispatch(removeTrack(track.id));
      setIsFavorited(false);
    } else {
      dispatch(addTrack(track));
      setIsFavorited(true);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      if (currentPlaying?.length && currentPlaying === track.preview) {
        audioRef.current.src = currentPlaying;
        audioRef.current.play();
      } else {
        audioRef.current.src = "";
        audioRef.current.pause();
        setTimeout(() => {
          dispatch(pauseSong());
        }, 30000);
      }
    }
  }, [currentPlaying]);

  useEffect(() => {
    if (trackIsFavorited) {
      setIsFavorited(true);
    }
    return () => {
      setIsFavorited(false);
    };
  }, [pathname]);

  return {
    handleAudio,
    audioRef,
    currentPlaying,
    handleFavoritesList,
    isFavorited,
  };
};
