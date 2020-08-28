import React, { useEffect } from 'react';

import './toggle.css';

function Toggler(props) {
  let { modeChange } = props;
  let toggleValue;
  useEffect(() => {
    let checker = document.getElementById('checker');
    toggleValue = () => {
      modeChange(checker.checked);
    };
  });

  return (
    <div>
      <input
        type='checkbox'
        id='checker'
        class='switch'
        onClick={() => toggleValue()}

        //doubt 1 : why is it supposed to be a callback function???
      />
      <label for='checker' class='btn-toggle'></label>
    </div>
  );
}

export default Toggler;
