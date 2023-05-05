import React from "react";
import { useSnapshot } from "valtio";

import state from "../store";

const Tab = () => {
  const snap = useSnapshot(state); //get snapshot of store
  return <div>Tab</div>;
};

export default Tab;
