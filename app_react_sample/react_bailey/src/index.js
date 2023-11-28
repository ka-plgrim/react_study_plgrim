import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import Layout from "./layout/Layout";
import Body from "./layout/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <Layout>
          <Body />
      </Layout>
  </BrowserRouter>,
);
