import React from "react";
import { createRoot } from 'react-dom/client';
import Amazingsvg from "../lib/amazingsvg";
// import Arrow from "./arrow/arrow";
// import Decoration from "./decoration2/decoration";

const root = createRoot(document.getElementById("root"));
root.render(
  <Amazingsvg.Decoration2 />
  // <Decoration color="rgba(1,25,250,0.5)" />
  // <Amazingsvg.Decoration2 />
);