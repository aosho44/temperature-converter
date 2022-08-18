import './Input.css';
import PropTypes from 'prop-types';
import tryConvert from '../lib/tryConvert';

import { useState } from 'react';

function ConvertCalculator() {
	const [temperature, setTemperature] = useState({
		celsius: 0,
		fahrenheit: 0,
	});

	const changeHandler = (event) => {
		if (event.target.id === 'celsius') {
			setTemperature({
				celsius: event.target.value,
				fahrenheit: tryConvert(event.target.value, 'toFahrenheit'),
			});
		} else {
			setTemperature({
				celsius: event.target.value,
				fahrenheit: tryConvert(event.target.value, 'toFahrenheit'),
			});
		}
	};
	return (
		<div>
			<div id="convertBody">
				<h1>Temperature Converter</h1>
				<div id="inputDiv">
					<div className="labelInput">
						<label htmlFor="celsius">Celsius</label>
						<input
							type="number"
							id="celsius"
							placeholder="Celsius"
							value={temperature.celsius}
							onChange={changeHandler}
						/>
					</div>
					<div className="labelInput">
						<label htmlFor="fahrenheit">Fahrenheit</label>
						<input
							type="number"
							id="fahrenheit"
							placeholder="Fahrenheit"
							value={temperature.fahrenheit}
							onChange={changeHandler}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

ConvertCalculator.prototype = {
	changeHandler: PropTypes.func.isRequired,
};

export { ConvertCalculator };
