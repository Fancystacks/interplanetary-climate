import React from 'react';
// Styles
import { PreviousWrapper, Toggle, PreviousDays, PreviousDay } from './PreviousStyling';

const Previous = ({ weather, previous, setPrevious, setSelectedSol }) => (
  <PreviousWrapper previous={previous}>
    <Toggle htmlFor='weather-toggle'
    onClick={() => setPrevious(prev => !prev)}
    previous={previous}
    >
      <span>&#8593;</span>
      <span className='sr-only'>Show previous weather</span>
    </Toggle>

    <h2 className='main-title previous-weather__title'>Previous 7 days</h2>
    <PreviousDays>
      {weather.map((sol. i) => (
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
            <span>{isMetric ? ' C' : ' F'}</span>
          </p>
        </PreviousDay>
      ))}
    </PreviousDays>
  </PreviousWrapper>
);

export default Previous;