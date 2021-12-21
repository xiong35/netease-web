import "./index.scss";

// type MusicDetailProps = {
// };

function MusicDetail(/* props: MusicDetailProps */) {
  // const {} = props;

  return (
    <div className="music_detail">
      <div className="music_detail-title">
        <div className="music_detail-title-music_name">music_name</div>
        <div className="music_detail-title-artist_name">artist_name</div>
      </div>

      <div className="music_detail-song">
        <div className="music_detail-song-disc">
          <div className="music_detail-song-disc-prob">prob</div>
          <div className="music_detail-song-disc-cover">
            cover
            <div className="music_detail-song-disc-cover-dots">dots</div>
          </div>
        </div>

        <div className="music_detail-song-lyric">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vero,
          inventore consequuntur dolores consequatur ipsum quidem odio error est
          pariatur magni sunt velit nostrum hic ullam perspiciatis, iusto nihil
          dolorem.
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

export default MusicDetail;
