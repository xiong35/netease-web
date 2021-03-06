import "./index.scss";

import { observer } from "mobx-react-lite";
import { useState } from "react";

import Pager from "../../../../../../components/Pager";
import { SongListStore } from "../../../../../../mobx/songlist";
import Adder from "./components/Adder";
import Comment from "./components/Comment";

function _Comments() {
  const [pageIndex, setPageIndex] = useState(1);

  return (
    <div className="album_detail-body-comments">
      <Adder />
      {SongListStore.hotComments.length ? (
        <div className="album_detail-body-comments-hotest">
          <div className="album_detail-body-comments-hotest-header">
            精彩评论
          </div>
          <div className="album_detail-body-comments-hotest-list">
            {SongListStore.hotComments.map((item) => (
              <Comment data={item} key={item.commentId} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {SongListStore.comments.length ? (
        <div className="album_detail-body-comments-newest">
          <div
            className="album_detail-body-comments-newest-header"
            id="ad_co-newest_header"
          >
            最新评论({SongListStore.commentCount})
          </div>
          <div className="album_detail-body-comments-newest-list">
            {SongListStore.comments.map((item) => (
              <Comment data={item} key={item.commentId} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {!SongListStore.hotComments.length && !SongListStore.comments.length ? (
        <div className="album_detail-body-comments-no_comments">暂无评论</div>
      ) : (
        ""
      )}
      <Pager
        page={pageIndex}
        totalPage={Math.ceil(
          SongListStore.commentCount / SongListStore.commentLimit
        )}
        setPage={(page) => {
          setPageIndex(page);
          SongListStore.updateCommentPage(page);
        }}
      ></Pager>
    </div>
  );
}

const Comments = observer(_Comments);

export default Comments;
