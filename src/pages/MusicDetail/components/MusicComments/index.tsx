import "./index.scss";

import { useRef } from "react";

import Pager from "../../../../components/Pager";
import { PER_PAGE } from "../../../../constants/paging";
import { numFormat } from "../../../../utils/numFormat";
import CommentItem from "../../../AlbumDetail/components/Body/components/Comments/components/comment";
import { useComments } from "./hooks/useComments";

type MusicCommentsProps = {
  musicID: number;
};

function MusicComments(props: MusicCommentsProps) {
  const { musicID } = props;
  const { setPage, comments, hotComments, page, total } = useComments(musicID);

  const topRef = useRef<HTMLHeadingElement>(null);

  return (
    <div className="music_comments">
      {hotComments && (
        <>
          <h3>热评</h3>
          {hotComments.map((comment) => (
            <CommentItem data={comment} key={comment.commentId}></CommentItem>
          ))}
        </>
      )}

      {comments && (
        <>
          <h3 style={{ marginTop: "-60px", paddingTop: "80px" }} ref={topRef}>
            歌曲评论({numFormat(total)})
          </h3>
          {comments.map((comment) => (
            <CommentItem data={comment} key={comment.commentId}></CommentItem>
          ))}
        </>
      )}

      <Pager
        page={page}
        setPage={(p) => {
          setPage(p);
          topRef.current && topRef.current.scrollIntoView();
        }}
        totalPage={total / PER_PAGE}
      ></Pager>
    </div>
  );
}

export default MusicComments;
