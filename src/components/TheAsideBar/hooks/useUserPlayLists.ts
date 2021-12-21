import { useEffect, useState } from "react";

import { SelfStore } from "../../../mobx/self";
import { PlayList } from "../../../models/PlayList";
import { getUserPlayListsReq } from "../../../network/user/getUserPlayLists";

export const useUserPlayLists = () => {
  const [playLists, setPlayLists] = useState<PlayList[]>([]);

  console.log({ playLists });

  const self = SelfStore.self;

  const createPlayLists: PlayList[] = self
    ? playLists.filter((list) => list.userId === self.userId)
    : [];
  const starPlayLists: PlayList[] = self
    ? playLists.filter((list) => list.userId !== self.userId)
    : [];

  const getUserPlayLists = async () => {
    const self = SelfStore.self;
    if (!self) return;
    const playLists = await getUserPlayListsReq({ uid: self.userId });
    if (!playLists) return;
    setPlayLists(playLists.playlist);
  };

  useEffect(() => {
    console.log({ self });

    getUserPlayLists();
  }, [self]);

  return { createPlayLists, starPlayLists };
};
