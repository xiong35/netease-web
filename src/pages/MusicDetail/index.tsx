import "./index.scss";

import { observer } from "mobx-react-lite";

import Img from "../../components/Img";
import { PlayStore } from "../../mobx/play";

// type MusicDetailProps = {
// };

function _MusicDetail(/* props: MusicDetailProps */) {
  // const {} = props;
  const music = PlayStore.curMusic;

  return (
    <div className="music_detail">
      <div className="music_detail-title">
        <div className="music_detail-title-music_name">{music.name}</div>
        <div className="music_detail-title-artist_name">
          {music.ar.map((ar) => ar.name).join("/")}
        </div>
      </div>

      <div className="music_detail-song">
        <div className="music_detail-song-disc">
          <div className="music_detail-song-disc-cover">
            <Img
              src={music.al.picUrl}
              className="music_detail-song-disc-cover-img"
              alt={music.al.name}
            ></Img>
            <div className="music_detail-song-disc-cover-decorate">
              decorate
            </div>
          </div>
        </div>

        <div className="music_detail-song-lyric">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero,
          inventore consequuntur dolores consequatur ipsum quidem odio error est
          pariatur magni sunt velit nostrum hic ullam perspiciatis, iusto nihil
          dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Inventore eos sed, error perspiciatis natus repudiandae blanditiis
          nobis doloremque nulla eaque illo pariatur recusandae at, dolorem nam
          cumque odio excepturi Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Natus numquam saepe, hic culpa cum magni, sint
          mollitia quod quam distinctio impedit, odit rem odio quisquam.
          Dignissimos perferendis laudantium maiores cumque.
        </div>

        <div className="music_detail-song-recommend">
          <div className="music_detail-song-recommend-item">item</div>
          <div className="music_detail-song-recommend-item">item</div>
          <div className="music_detail-song-recommend-item">item</div>
          <div className="music_detail-song-recommend-item">item</div>
        </div>
      </div>

      <div className="music_detail-comments">
        <div className="music_detail-comments-title">全部评论</div>
        <div className="music_detail-comments-item">item</div>
        <div className="music_detail-comments-item">item</div>
        <div className="music_detail-comments-item">item</div>
        <div className="music_detail-comments-item">item</div>
        <div className="music_detail-comments-item">item</div>
      </div>
    </div>
  );
}

const MusicDetail = observer(_MusicDetail);

export default MusicDetail;
