import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BreakControl from './components/BreakControl';
import SessionControl from './components/SessionControl';
import Timer from './components/Timer';
import './components/Timer.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <h1 className="pomodoro-title">Pomodoro Clock</h1>
      <BreakControl />
      <SessionControl />
      <Timer />
      <audio id="beep" src="/build_testable-projects-fcc_audio_BeepSound.wav" preload="auto" aria-label="Timer beep" />

    </div>
  </Provider>
);

export default App;
