import "./index.scss";

import { useHistory } from "react-router-dom";

import logo from "../../images/logo.svg";

function Logo() {
  const history = useHistory();
  return (
    <div className="c-the_top_bar-logo" onClick={() => history.push("/")}>
      <img src={logo} className="icon" />
      <h2>网易云音乐</h2>
    </div>
  );
}

export default Logo;
