import "./index.scss";

import { NavLink } from "react-router-dom";

type tableHead = "音乐标题" | "歌手" | "专辑" | "时长";
export type tableContent = {
  [K in tableHead]?: {
    content: string;
    linkTo?: () => void;
  };
} & { id: number };

type SongsListProps = {
  tableHeads: tableHead[];
  tableContents: tableContent[];
  highlightWord?: string;
};

export default function SongsList(props: SongsListProps) {
  const { highlightWord, tableContents, tableHeads } = props;

  // /.^/ 为不匹配任何东西的正则，不过最好还是匹配时候多判断一下不要匹配
  const highlightReg = highlightWord
    ? new RegExp(`([^${highlightWord}]*)(${highlightWord})(.*)`)
    : /.^/;

  return (
    <div className="songs_list">
      <div className="songs_list-item">
        {tableHeads.map((head, index) => (
          <div key={index} className="songs_list-item-column header">
            {head}
          </div>
        ))}
      </div>
      {tableContents.map((content, index) => (
        <div className="songs_list-item" key={index}>
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
              <div
                key={index}
                className="songs_list-item-column ellipsis elipsis"
              >
                {item.linkTo ? <NavLink to="">{Content}</NavLink> : Content}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
