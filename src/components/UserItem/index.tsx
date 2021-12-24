import "./index.scss";

import { useHistory } from "react-router-dom";

import { UserProfile } from "../../models/User";
import Img from "../Img";
import manIcon from "./img/man.svg";
import womanIcon from "./img/woman.svg";

type UserItemProps = Pick<
  UserProfile,
  "avatarUrl" | "userId" | "nickname" | "gender" | "signature" | "description"
> & {
  avatarDetail?: {
    identityIconUrl: string;
  };
};

export default function UserItem(props: UserItemProps) {
  const {
    avatarUrl,
    gender,
    nickname,
    signature,
    userId,
    avatarDetail,
    description,
  } = props;

  const history = useHistory();

  return (
    <div
      className="user_item"
      onClick={() => history.push(`/user-detail?uid=${userId}`)}
    >
      <div className="user_item-avatar">
        <Img src={avatarUrl} alt="avatar" className="user_item-avatar-img" />
        {avatarDetail && (
          <div
            className="user_item-avatar-identify_icon"
            style={{ backgroundImage: `url(${avatarDetail.identityIconUrl})` }}
          ></div>
        )}
      </div>
      <div className="user_item-name">{nickname}</div>
      {gender && (
        <div
          className={"user_item-gender" + (gender === 1 ? " man" : " woman")}
        >
          <Img
            src={gender === 1 ? manIcon : womanIcon}
            alt={gender === 1 ? "男" : "女"}
            className="user_item-gender-icon"
            loadingMask={false}
          />
        </div>
      )}
      <div className="spacer"></div>
      <div className="user_item-signature elipsis">
        {avatarDetail ? description || "网易音乐人" : signature}
      </div>
    </div>
  );
}
