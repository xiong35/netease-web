import "./index.scss";

import { useHistory } from "react-router-dom";

import { useTabs } from "./hooks/useTabs";

// type HomeTabsProps = {
// };

function HomeTabs(/* props: HomeTabsProps */) {
  // const {} = props;

  const { curTab, tabs } = useTabs();

  const history = useHistory();

  return (
    <div className="home_tabs">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`home_tabs-item ${curTab === tab ? "active" : ""}`}
          onClick={() => history.replace(`/home?tab=${tab}`)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
}

export default HomeTabs;
