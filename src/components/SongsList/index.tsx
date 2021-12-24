import "./index.scss";

type tableHead = "音乐标题" | "歌手" | "专辑" | "时长" | "热度";
type tableContent = {
  [K in tableHead]?: {
    content: string;
    onClick?: () => void;
  };
};

type SongsListProps = {
  tableHeads: tableHead[];
  tableContents: tableContent[];
  highlightWord?: string;
};

export default function SongsList(props: SongsListProps) {
  const { highlightWord, tableContents, tableHeads } = props;

  // /.^/ 为不匹配任何东西的正则
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

            return (
              <div key={index} className="songs_list-item-column elipsis">
                <span
                  onClick={item.onClick}
                  style={{
                    cursor: content[head]?.onClick ? "pointer" : "unset",
                  }}
                >
                  <span>{contentHighlighted[1]}</span>
                  <span className="songs_list-item-column-highlight">
                    {contentHighlighted[2]}
                  </span>
                  <span>{contentHighlighted[3]}</span>
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
