import "./index.scss";

import { observer } from "mobx-react-lite";

import Img from "../../../../../../components/Img";
import { SongListStore } from "../../../../../../mobx/songlist";

function _CoverImg() {
  return (
    <Img
      alt=""
      src={SongListStore.coverImgUrl}
      className="album_detail-header-img"
    />
  );
}

const CoverImg = observer(_CoverImg);

export default CoverImg;
