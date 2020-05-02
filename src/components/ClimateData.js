import React from 'react';
// Helpers
import { formatTemperature } from '../helpers';
// Styles
import { Wrapper, Date, Temp, Wind } from './ClimateStyling';

const ClimateData = ({ sol, isMetric }) => (
  <Wrapper>
    <Date>
      <h2>{sol.sol}</h2>
      <p>{sol.date}</p>
    </Date>

    <Temp>
      <h2 className='section-title'>Temperature</h2>
      <br/>
      <p className='reading'>
        High:
        <span> {formatTemperature(sol.maxTemp, isMetric)}</span>°
        <span> {isMetric ? 'C' : 'F'}</span>
      </p>
      <p className='reading'>
        Low:
        <span> {formatTemperature(sol.minTemp, isMetric)}</span>°
        <span> {isMetric ? 'C' : 'F'}</span>
      </p>
    </Temp>

    <Wind deg={sol.windDirection}>
      <h2 className='section-title'>Wind</h2>
      <p className='reading'>
        <span>{sol.windSpeed}</span>
        <span>{isMetric ? ' kmh' : ' mph'}</span>
      </p>

      <div className='wind-direction'>
        <div className='wind-arrow'></div>
      </div>
    </Wind>
  </Wrapper>
);

export default ClimateData;