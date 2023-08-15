import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import BreakControl from "./components/BreakControl";
import SessionControl from "./components/SessionControl";
import Timer from "./components/Timer";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <BreakControl />
        <SessionControl />
        <Timer />
      </div>
    </Provider>
  );
};

export default App;
