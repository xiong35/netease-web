import "./index.scss";

import { computePage } from "./utils/computePage";

type PagerProps = {
  page: number;
  setPage: (newPage: number) => void;
  totalPage: number;
};

function Pager(props: PagerProps) {
  const { page, setPage, totalPage } = props;

  const pages = computePage(totalPage, page);

  return (
    <div className="c-pager">
      <div
        className={`c-pager-prev c-pager-item ${page === 1 ? "disabled" : ""}`}
        onClick={() => setPage(page - 1)}
      >
        {"<"}
      </div>

      {pages.map((c) => (
        <div
          className={`c-pager-item ${c === page ? "active" : ""}`}
          onClick={() => c !== "..." && setPage(c)}
        >
          {c}
        </div>
      ))}

      <div
        className={`c-pager-next c-pager-item ${
          page === Math.ceil(totalPage) ? "disabled" : ""
        }`}
        onClick={() => setPage(page + 1)}
      >
        {">"}
      </div>
    </div>
  );
}

export default Pager;
