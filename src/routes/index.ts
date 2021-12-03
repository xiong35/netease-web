import { RouteProps } from "react-router-dom";

import loadable from "@loadable/component";

export const routes: RouteProps[] = [
  {
    path: "/album-detail",
    component: loadable(() => import("../pages/AlbumDetail")),
    exact: true,
  },
  {
    path: "/home",
    component: loadable(() => import("../pages/Home")),
    exact: true,
  },
  {
    path: "/login-page",
    component: loadable(() => import("../pages/LoginPage")),
    exact: true,
  },
  {
    path: "/music-detail",
    component: loadable(() => import("../pages/MusicDetail")),
    exact: true,
  },
  {
    path: "/search-page",
    component: loadable(() => import("../pages/SearchPage")),
    exact: true,
  },
  {
    path: "/user-detail",
    component: loadable(() => import("../pages/UserDetail")),
    exact: true,
  },
];
