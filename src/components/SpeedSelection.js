import React from 'react';

function SpeedSelect() {
  return (
    <div className="speed-form">
      <label>Slow</label>
      <label>Fast</label>
      <fieldset>
          <div>
              <input type="radio" name="speed" value="1000" id="radio1"/>
              <label for="radio1"></label>
          </div>
          <div>
              <input type="radio" name="speed" value="1500" id="radio2"/>
              <label for="radio2"></label>
          </div>
          <div>
              <input type="radio" name="speed" value="2000" id="radio3"/>
              <label for="radio3"></label>
          </div>
          <div>
              <input type="radio" name="speed" value="3500" id="radio4"/>
              <label for="radio4"></label>
          </div>
          <div>
              <input type="radio" name="speed" value="5000"  id="radio5"/>
              <label for="radio5"></label>
          </div>
      </fieldset>
  </div>
  )
}

export default SpeedSelect
