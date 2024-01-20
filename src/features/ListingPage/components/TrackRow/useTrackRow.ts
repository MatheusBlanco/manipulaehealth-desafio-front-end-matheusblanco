import { pauseSong, playSong } from "@/lib/slices/currentPlayingSlice";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Track } from "../../interfaces";

export const useTrackRow = (track: Track) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentPlaying = useSelector((state: any) => state.currentPlaying);
  const dispatch = useDispatch();

  const handlePlaySound = (url: string) => {
    dispatch(playSong(url));
  };

  const handleStopSound = () => {
    dispatch(pauseSong());
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

  const handleAudio = (url: string) => {
    if (currentPlaying === url) {
      handleStopSound();
    } else {
      handlePlaySound(url);
    }
  };

  return { handleAudio, audioRef, currentPlaying };
};
