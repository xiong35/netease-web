import { useEffect, useState } from "react";

import { SingleComment } from "../../../../../models/Comments";
import { getMusicCommentsReq } from "../../../../../network/music/getMusicComments";

export function useComments(musicID: number) {
  const [hotComments, setHotComments] = useState<SingleComment[] | null>(null);
  const [comments, setComments] = useState<SingleComment[] | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getMusicCommentsReq({ page, musicID }).then((res) => {
      if (!res) return;

      setComments(res.comments);
      setTotal(res.total);
      setHotComments(res.hotComments);
    });
  }, [page]);

  useEffect(() => {
    getMusicCommentsReq({ page: 1, musicID }).then((res) => {
      if (!res) return;

      setHotComments(res.hotComments);
      setComments(res.comments);
      setTotal(res.total);
      setPage(1);
    });
  }, [musicID]);

  return { hotComments, comments, setPage, total, page };
}
