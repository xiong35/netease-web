import "./index.scss";

import { NavLink } from "react-router-dom";

import { setCurSong } from "./util/setCurSong";

type TableHead = "音乐标题" | "歌手" | "专辑" | "时长";
export type TableContent = {
  [K in TableHead]?: {
    content: string;
    linkTo?: () => void;
  };
} & { id: number };

type SongsListProps = {
  tableHeads: TableHead[];
  tableContents: TableContent[];
  highlightWord?: string;
  indexed?: boolean;
  // setLike?: boolean;
};

export default function SongsList(props: SongsListProps) {
  const { highlightWord, tableContents, tableHeads, indexed } = props;

  // /.^/ 为不匹配任何东西的正则，不过最好还是匹配时候多判断一下不要匹配
  const highlightReg = highlightWord
    ? new RegExp(`([^${highlightWord}]*)(${highlightWord})(.*)`, "i")
    : /.^/;

  return (
    <div className="songs_list">
      <div className="songs_list-item">
        <div className="songs_list-item-opts">
          {indexed && <div className="songs_list-item-opts-index"></div>}
        </div>
        {tableHeads.map((head, index) => (
          <div key={index} className="songs_list-item-column header ellipsis">
            {head}
          </div>
        ))}
      </div>
      {tableContents.map((content, index) => (
        <div
          className="songs_list-item"
          key={index}
          onClick={() => setCurSong(content.id)}
        >
          <div className="songs_list-item-opts">
            {indexed && (
              <div className="songs_list-item-opts-index">{index + 1}</div>
            )}
          </div>
          {tableHeads.map((head, index) => {
            const item = content[head];
            if (!item) return;
            const contentHighlighted = item.content.match(highlightReg) || [
              "",
              item.content,
              "",
              "",
            ];

            const Content = (
              <>
                <span>{contentHighlighted[1]}</span>
                <span className="songs_list-item-column-highlight">
                  {contentHighlighted[2]}
                </span>
                <span>{contentHighlighted[3]}</span>
              </>
            );

            return (
              <div key={index} className="songs_list-item-column ellipsis">
                {item.linkTo ? <NavLink to="">{Content}</NavLink> : Content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
