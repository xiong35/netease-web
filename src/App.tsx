import "./App.scss";

import { Redirect, Route, Switch } from "react-router-dom";

import TheAsideBar from "./components/TheAsideBar";
import TheMusicPlayer from "./components/TheMusicPlayer";
import TheTopBar from "./components/TheTopBar";
import { useSelf } from "./hooks/useSelf";
import { routes } from "./routes";

export default function App() {
  useSelf();

  return (
    <div className="main">
      <div className="main-body">
        <TheTopBar />
        <div className="main-body-content">
          <TheAsideBar />
          <Switch>
            <Redirect to="/home" path="/" exact></Redirect>
            {routes.map((route, i) => (
              <Route key={i} {...route} />
            ))}
          </Switch>
        </div>

        <TheMusicPlayer></TheMusicPlayer>
      </div>
    </div>
  );
}
