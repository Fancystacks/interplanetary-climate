import React from 'react';
// Styles
import { PreviousWrapper, Toggle, PreviousDays, PreviousDay } from './PreviousStyling';

const Previous = ({ weather, previous, setPrevious, setSelectedSol, isMetric }) => (
  <PreviousWrapper previous={previous}>
    <Toggle htmlFor='weather-toggle'
      onClick={() => setPrevious(prev => !prev)}
      previous={previous}
    >
      <span>&#8679;</span>
      <span className='sr-only'></span>
    </Toggle>

    <h2 className='main-title previous-weather__title'>View previous 7 day weather</h2>
    <PreviousDays>
      {weather.map((sol, i) => (
        <PreviousDay key={sol.sol} previous={previous}>
        <h4 className='previous-day__sol'>
          <span>{sol.sol}</span>
        </h4>
        <p className='previous-day__date'>
          {sol.date}
        </p>
        <p className='previous-day__temp'>
          High:
           <span>{sol.maxTemp}</span>
          <span>{isMetric ? ' °C' : ' °F'}</span>
        </p>
        <p className='previous-day__temp'>
          Low:
           <span>{sol.minTemp}</span>
          <span>{isMetric ? ' °C' : ' °F'}</span>
        </p>
        <button className='previous-day__more-info'
          onClick={() => setSelectedSol(i)} > Additional Info</button>
      </PreviousDay>
      ))}
    </PreviousDays>
  </PreviousWrapper>
);

export default Previous;