import React from 'react';

function TemperatureToggle({ isCelsius, onToggle }) {
  return (
    <div className="temperature-toggle">
      <label>
        <input type="checkbox" checked={isCelsius} onChange={onToggle} />
        {isCelsius ? "Celsius" : "Fahrenheit"}
      </label>
    </div>
  );
}

export default TemperatureToggle;
