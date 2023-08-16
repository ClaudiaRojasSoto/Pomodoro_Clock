import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import Timer from './components/Timer';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <BreakControl />
      <SessionControl />
      <Timer />
      {/* Aquí está el elemento de audio */}
      <audio id="beep" src="/alarm-clock.mp3" preload="auto" aria-label="Timer beep" />

    </div>
  </Provider>
);

export default App;
