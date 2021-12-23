import "./index.scss";

import { PlayingMusicStore } from "../../../../mobx/playingMusic";
import { Lyric as LyricType } from "../../../../models/lyric";

type LyricProps = {
  lyric: LyricType[];
};

function Lyric(props: LyricProps) {
  const { lyric } = props;

  return (
    <div className="lyric">
      {lyric.map((l, i) => (
        <div
          className="lyric-item"
          key={l.startSec * 100 + i}
          ref={(el) => (l.ref = el)}
          onClick={() => (PlayingMusicStore.currentTime = l.startSec)}
        >
          {l.content}
        </div>
      ))}
    </div>
  );
}

export default Lyric;
