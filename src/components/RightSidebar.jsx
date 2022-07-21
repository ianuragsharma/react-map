import React from "react";
import { sidebarData } from "../data";

const RightSidebar = () => {
  const sidebarList = sidebarData.map((data) => (
    <div key={data.id} className="icon-background">
      {<data.icon size={30} />}
    </div>
  ));
  return <div className="right-sidebar">{sidebarList}</div>;
};

export { RightSidebar };
