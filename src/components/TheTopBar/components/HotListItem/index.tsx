import "./index.scss";

type HotListItemProps = {
  data: {
    content: string;
    score: number;
    searchWord: string;
    iconType: number;
    iconUrl: string | null;
  };
  index: number;
};

function HotListItem(props: HotListItemProps) {
  const HotListItemData = props.data;
  const HotListItemIndex = props.index;

  return (
    <li className="hotlist-item">
      <div
        className={
          HotListItemIndex < 3
            ? "hotlist-item-rank top_three"
            : "hotlist-item-rank"
        }
      >
        {HotListItemIndex + 1}
      </div>
      <div className="hotlist-item-outer_wrapper">
        <div className="hotlist-item-outer_wrapper-inner_wrapper">
          <h5 className="hotlist-item-outer_wrapper-inner_wrapper-title">
            {HotListItemData.searchWord}
          </h5>
          {HotListItemData.iconType && HotListItemData.iconUrl ? (
            <img src={HotListItemData.iconUrl} />
          ) : (
            ""
          )}
          <span className="hotlist-item-outer_wrapper-inner_wrapper-score">
            {HotListItemData.score}
          </span>
        </div>
        <p className="hotlist-item-outer_wrapper-content">
          {HotListItemData.content}
        </p>
      </div>
    </li>
  );
}

export default HotListItem;
