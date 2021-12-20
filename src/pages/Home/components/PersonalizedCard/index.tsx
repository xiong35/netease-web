import "./index.scss";

import { Personalized } from "../../../../models/Home";
import PlayIcon from "../PlayIcon";

type PersonalizedCardProps = {
  item: Personalized;
};

function PersonalizedCard(props: PersonalizedCardProps) {
  const { item } = props;

  return (
    <div className="personalized_card">
      <div className="personalized_card-cover">
        <img
          src={item.picUrl}
          alt={item.name}
          className="personalized_card-cover-img"
        />
        <PlayIcon></PlayIcon>
      </div>
      <div className="personalized_card-name">{item.name}</div>
    </div>
  );
}

export default PersonalizedCard;
