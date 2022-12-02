import React from "react";
import Widget from "./Widget";
import { createRoot } from "react-dom/client";

const widgetElement = document.getElementById("react-widget");

const root = createRoot(widgetElement);

if (widgetElement) {
  root.render(
    <React.StrictMode>
      <Widget />
    </React.StrictMode>
  );
}
