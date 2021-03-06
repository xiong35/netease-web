import "./index.scss";

import Img from "../../../../../../../../components/Img";
import { SingleComment } from "../../../../../../../../models/Comments";
import { dateFormat } from "../../../../../../../../utils/dateFormat";

type commentProps = {
  data: SingleComment;
};

function Comment(props: commentProps) {
  return (
    <div className="album_detail-body-comments-item">
      <Img
        src={props.data.user.avatarUrl}
        alt={props.data.user.nickname}
        className="album_detail-body-comments-item-avatar"
        onClick={() => {
          window.location.href = `/user-detail?uid=${props.data.user.userId}`;
        }}
      />
      <div className="album_detail-body-comments-item-body">
        <div className="album_detail-body-comments-item-body-upper">
          <span
            className="album_detail-body-comments-item-body-upper-nick_name"
            onClick={() => {
              window.location.href = `/user-detail?uid=${props.data.user.userId}`;
            }}
          >
            {props.data.user.nickname + ":"}
          </span>
          <span className="album_detail-body-comments-item-body-upper-content">
            {props.data.content}
          </span>
        </div>
        {props.data.beReplied.length !== 0 ? (
          <div className="album_detail-body-comments-item-body-replied">
            <span
              className="album_detail-body-comments-item-body-replied-name"
              onClick={() => {
                window.location.href = `/user-detail?uid=${props.data.beReplied[0].user.userId}`;
              }}
            >
              @{props.data.beReplied[0].user.nickname}：
            </span>
            <span className="album_detail-body-comments-item-body-replied-content">
              {props.data.beReplied[0].content}
            </span>
          </div>
        ) : (
          ""
        )}
        <div className="album_detail-body-comments-item-body-date">
          {dateFormat(props.data.time)}
        </div>
      </div>
    </div>
  );
}

export default Comment;
