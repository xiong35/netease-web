import "./index.scss";

import Img from "../../../../../../../../components/Img";
import { UserProfile } from "../../../../../../../../models/User";
import female from "../../../../../../images/female.svg";
import male from "../../../../../../images/male.svg";

type subscriberProps = {
  data: UserProfile;
};

function Subscriber(props: subscriberProps) {
  return (
    <div className="album_detail-body-subscribers-item">
      <Img
        alt={props.data.nickname}
        src={props.data.avatarUrl}
        className="album_detail-body-subscribers-item-avatar"
        onClick={() => {
          window.location.href = `/user-detail?uid=${props.data.userId}`;
        }}
      />
      <div className="album_detail-body-subscribers-item-user_info">
        <div className="album_detail-body-subscribers-item-user_info-upper">
          <span
            className="album_detail-body-subscribers-item-user_info-upper-nick_name"
            onClick={() => {
              window.location.href = `/user-detail?uid=${props.data.userId}`;
            }}
          >
            {props.data.nickname}
          </span>
          <img
            src={!props.data.gender ? male : female}
            className={
              !props.data.gender
                ? "album_detail-body-subscribers-item-user_info-upper-gender icon male"
                : "album_detail-body-subscribers-item-user_info-upper-gender icon female"
            }
          />
        </div>
        {props.data.signature !== "" ? (
          <div className="album_detail-body-subscribers-item-user_info-signature">
            {props.data.signature}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Subscriber;
