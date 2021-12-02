import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import App from "./App";

// CSS
import "./index.css";

// REDUX PROVIDER AND STORE
import { Provider } from "react-redux";
import store from "./state/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
