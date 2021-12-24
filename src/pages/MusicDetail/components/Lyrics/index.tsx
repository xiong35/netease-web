import "./index.scss";

import { PlayingMusicStore } from "../../../../mobx/playingMusic";
import { Lyric as LyricType } from "../../../../models/lyric";
import { useFocusActiveLyric } from "./hooks/useFocusActiveLyric";

type LyricProps = {
  lyric: LyricType[];
};

function Lyric(props: LyricProps) {
  const { lyric } = props;
  const time = PlayingMusicStore.getCurrentTime();

  const { marginTop } = useFocusActiveLyric(lyric);

  return (
    <div className="lyric">
      <div className="lyric-scroll-wrap">
        <div className="lyric-mask top"></div>
        <div className="lyric-warp" style={{ marginTop }}>
          {lyric.map((l, i) => {
            if (!l.content) return null;
            const Tag = l.startSec <= time ? "section" : "div";
            return (
              <Tag
                className={`lyric-item`}
                key={l.startSec * 100 + i}
                ref={(el) => (l.ref = el)}
                onClick={() => (PlayingMusicStore.currentTime = l.startSec)}
              >
                {l.content}
              </Tag>
            );
          })}
        </div>
        <div className="lyric-mask bottom"></div>
      </div>
    </div>
  );
}

export default Lyric;
