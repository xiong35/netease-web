import "./App.scss";

import { Redirect, Route, Switch } from "react-router-dom";

import { routes } from "./routes";

import TheTopBar from "./components/TheTopBar";

export default function App() {
  return (
    <div className="main">
      <div className="main-body">
        <TheTopBar />
        <Switch>
          <Redirect to="/home" path="/" exact></Redirect>
          {routes.map((route, i) => (
            <Route key={i} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
}
