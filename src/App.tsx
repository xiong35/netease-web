import "./App.scss";

import { observer } from "mobx-react-lite";
import { Redirect, Route, Switch } from "react-router-dom";

import TheAsideBar from "./components/TheAsideBar";
import TheMusicPlayer from "./components/TheMusicPlayer";
import TheToasts from "./components/TheToasts";
import TheTopBar from "./components/TheTopBar";
import { useSelf } from "./hooks/useSelf";
import { TheTopbarStore } from "./mobx/thetopbar";
import { routes } from "./routes";

function _App() {
  useSelf();

  return (
    <div className={`${TheTopbarStore.theme} main`}>
      <div className="main-body">
        <TheToasts></TheToasts>
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

const App = observer(_App);

export default App;
