import { useQuery } from "../../../../../hooks/useQuery";

export type HomeTabs = [
  "个性推荐",
  "专属订制",
  "歌单",
  "排行榜",
  "歌手",
  "最新音乐"
];

export const tabs: HomeTabs = [
  "个性推荐",
  "专属订制",
  "歌单",
  "排行榜",
  "歌手",
  "最新音乐",
];

export function useTabs() {
  const { get } = useQuery<{ tab: HomeTabs[number] }>();
  const curTab = get("tab") || "个性推荐";

  return { curTab, tabs };
}
