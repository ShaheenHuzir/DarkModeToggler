import React, { useState } from 'react';
import Toggler from './components/toggle.js';

import './App.css';
import classNames from 'classnames';

function App() {
  let [mode, setMode] = useState(false);

  let modeHandler = (toggledMode) => {
    setMode(toggledMode);
  };

  let boom = classNames({ hello: !mode, yello: mode });

  return (
    <div className={('container', boom)}>
      <Toggler modeChange={modeHandler} />
    </div>
  );
}

export default App;
