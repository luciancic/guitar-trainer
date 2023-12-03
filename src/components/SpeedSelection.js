import React from 'react';

function SpeedSelect({ handleChange }) {
  return (
    <div className="speed-form">
      <label>Slow</label>
      <label>Fast</label>
      <div className="fieldset">
        <div>
          <input type="radio" name="speed" id="radio1" onChange={() => handleChange(5000)} />
          <label htmlFor="radio1"></label>
        </div>
        <div>
          <input type="radio" name="speed" id="radio2" onChange={() => handleChange(3500)} />
          <label htmlFor="radio2"></label>
        </div>
        <div>
          <input type="radio" name="speed" id="radio3" onChange={() => handleChange(2000)} defaultChecked />
          <label htmlFor="radio3"></label>
        </div>
        <div>
          <input type="radio" name="speed" id="radio4" onChange={() => handleChange(1500)} />
          <label htmlFor="radio4"></label>
        </div>
        <div>
          <input type="radio" name="speed" id="radio5" onChange={() => handleChange(1000)} />
          <label htmlFor="radio5"></label>
        </div>
      </div>
    </div>
  );
}

export default SpeedSelect;
