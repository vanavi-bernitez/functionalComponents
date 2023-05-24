import React from "react";
import { menuComponents } from "../tools/objects";
import { Menu } from "./Menu";

const Navigation = () => {
  return (
    <nav>
      <Menu menuItems={menuComponents} />
    </nav>
  );
};

export { Navigation };
