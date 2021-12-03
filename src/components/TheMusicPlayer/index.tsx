import "./index.scss";

import { useRef } from "react";

import { useVolume } from "./hooks/useVolume";
import { useMuted } from "./hooks/useMuted";
import { useIsPlaying } from "./hooks/useIsPlaying";
import { useCurrentTime } from "./hooks/useCurrentTime";

type TheMusicPlayerProps = {
  src?: string;
};

function TheMusicPlayer(props: TheMusicPlayerProps) {
  const {
    src = "http://192.168.11.175/m7.music.126.net/20211203210431/8d3ed597b681510c1da8c0d7a5eb3ea9/ymusic/b3de/76f4/6e13/659fd75ca5fa5a19c28f1907b6b1066e.mp3",
  } = props;

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const { currentTime, setCurrentTime } = useCurrentTime(audioRef);
  const { isPlaying, setIsPlaying } = useIsPlaying(audioRef);
  const { muted, setMuted } = useMuted(audioRef);
  const { volume, setVolume } = useVolume(audioRef);

  return (
    <div className="the_music_player t_m_p">
      <audio ref={audioRef} src={src}></audio>

      <pre>
        {JSON.stringify({ currentTime, isPlaying, muted, volume }, null, 2)}
      </pre>
      <button onClick={() => setIsPlaying((p) => !p)}>setIsPlaying</button>
      <button onClick={() => setMuted((p) => !p)}>setMuted</button>
      <input
        type="range"
        value={volume}
        onChange={(e) => setVolume(parseInt(e.target.value))}
      />
      <input
        type="range"
        onChange={(e) => {
          if (!audioRef.current) return;

          const percent = parseInt(e.target.value) || 0;
          setCurrentTime(audioRef.current.duration * 0.01 * percent);
        }}
      />
    </div>
  );
}

export default TheMusicPlayer;
