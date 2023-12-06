import React from "react";
import { createRoot } from 'react-dom/client';
import Amazingsvg from "../lib/amazingsvg";
import "../lib/amazingsvg.css"
// import Arrow from "./arrow/arrow";
// import Decoration from "./decoration2/decoration";

import "./test.less"

const root = createRoot(document.getElementById("root"));
root.render(
  <Amazingsvg.Decoration2  />
  // <Decoration className="jiu" color="rgba(1,215,250,1)" />
  // <Amazingsvg.Decoration2 />
);