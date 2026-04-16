import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
//import "./styles/normalize.css";
//import "./styles/styles.css";

const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);
root.render(<App />);
